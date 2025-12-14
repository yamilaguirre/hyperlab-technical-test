<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Illuminate\Support\Facades\App;

class HandleInertiaRequests extends Middleware
{
    protected $rootView = 'app';

    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    public function share(Request $request): array
{
    // Obtenemos el locale actual (ya seteado por el middleware SetLocale)
    $locale = App::getLocale();
    
    // Ruta al archivo JSON
    $jsonPath = lang_path($locale . '.json');
    
    // Leemos el archivo, si no existe devolvemos array vacío
    $translations = file_exists($jsonPath) 
        ? json_decode(file_get_contents($jsonPath), true) 
        : [];

    return array_merge(parent::share($request), [
        'auth' => [
            'user' => $request->user(),
        ],
        'locale' => $locale,
        'translations' => $translations,
    ]);
}
}