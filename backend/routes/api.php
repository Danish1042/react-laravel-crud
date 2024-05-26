<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;

Route::middleware('auth:sanctum')->get('/user', function (Request $request){
    return $request->user();
});


Route::resource('users', UserController::class);
