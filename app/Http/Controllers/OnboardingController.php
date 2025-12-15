<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class OnboardingController extends Controller
{
    /**
     * Complete onboarding and create/update user
     */
    public function complete(Request $request)
    {
        $validated = $request->validate([
            'role' => 'required|string|in:creator,user',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'full_name' => 'required|string|max:255',
            'username' => 'required|string|min:3|max:20|unique:users|regex:/^[a-zA-Z0-9_]+$/',
            'birth_date' => 'required|date|before:today',
            'gender' => 'nullable|string',
            'language' => 'nullable|string',
            'description' => 'nullable|string|max:250',
            'categories' => 'nullable|array',
            'socials' => 'nullable|array',
            'profile_photo' => 'nullable|string',
            'blocked_countries' => 'nullable|array',
        ]);

        // Verificar que el usuario tenga al menos 18 años
        $birthDate = new \DateTime($validated['birth_date']);
        $today = new \DateTime();
        $age = $today->diff($birthDate)->y;
        
        if ($age < 18) {
            return back()->withErrors([
                'birth_date' => 'You must be 18 or older to use the platform.',
            ]);
        }

        // Crear el usuario con todos los datos del onboarding
        $user = User::create([
            'name' => $validated['full_name'], // Usar full_name como name principal
            'full_name' => $validated['full_name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
            'role' => $validated['role'],
            'username' => $validated['username'],
            'birth_date' => $validated['birth_date'],
            'gender' => $validated['gender'] ?? null,
            'language' => $validated['language'] ?? null,
            'description' => $validated['description'] ?? null,
            'categories' => $validated['categories'] ?? [],
            'socials' => $validated['socials'] ?? [],
            'profile_photo' => null, // Placeholder, will update below
            'blocked_countries' => $validated['blocked_countries'] ?? [],
        ]);

        // Handle profile photo
        if (!empty($validated['profile_photo'])) {
            try {
                $image_64 = $validated['profile_photo']; // your base64 encoded
                
                // Allow both raw base64 strings and data-uri formatted strings
                if (preg_match('/^data:image\/(\w+);base64,/', $image_64, $type)) {
                    $image_64 = substr($image_64, strpos($image_64, ',') + 1);
                    $type = strtolower($type[1]); // jpg, png, gif
                    
                    // Force jpg extension if user requested specific naming, or use detected type
                    // User requested [username].jpg specifically
                    $extension = 'jpg'; 
                    
                    $image_64 = base64_decode($image_64);
                    
                    $imageName = $validated['username'] . '.' . $extension;
                    $path = 'profile_photos/' . $imageName;
                    
                    // Save to public disk
                    \Illuminate\Support\Facades\Storage::disk('public')->put($path, $image_64);
                    
                    // Update user record with the path
                    $user->update([
                        'profile_photo' => '/storage/' . $path
                    ]);
                }
            } catch (\Exception $e) {
                // Log error but don't fail the whole registration
                \Illuminate\Support\Facades\Log::error('Failed to save profile photo: ' . $e->getMessage());
            }
        }

        // Autenticar al usuario
        Auth::login($user);

        return redirect()->route('home');
    }
}
