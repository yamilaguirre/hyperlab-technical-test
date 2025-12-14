<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('language/{locale}', function ($locale) {
    if (in_array($locale, ['en', 'es', 'fr'])) {
        session()->put('locale', $locale);
    }
    return redirect()->back();
})->name('language');

Route::get('/', function () {
    return Inertia::render('Auth/Login');
})->name('login');

Route::prefix('onboarding')->name('onboarding.')->group(function () {
    
    Route::get('/step/{step}', function ($step) {
        
        $steps = [
            1 => 'Onboarding/Step01Welcome',
            2 => 'Onboarding/Step02Language',
            3 => 'Onboarding/Step03FullName',
            4 => 'Onboarding/Step04Email',
            5 => 'Onboarding/Step05Password',
        ];

        if (!array_key_exists($step, $steps)) {
            return redirect()->route('login');
        }

        return Inertia::render($steps[$step]);
    })->name('step');

});

require __DIR__.'/auth.php';