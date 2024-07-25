<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('admin', function() {
    return 'Hi Admin';
})->middleware('role:admin');

Route::get('user', function() {
    return 'Hi User';
})->middleware('role:user');

Route::redirect('/', '/prototype/login');

Route::prefix('prototype')->group(function() {
    route::get('/login', function() {
        return Inertia::render('Prototype/Login');
    });
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';