<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\{
    BatteryController, 
    CustomerController
};

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::group(['prefix' => 'admin'], function () {
    Route::group(['prefix' => 'customers'], function () {
        Route::get('/', [CustomerController::class, 'index']);
        Route::post('/', [CustomerController::class, 'store']);
        Route::get('/{id}', [CustomerController::class, 'show']);
        Route::put('/{id}', [CustomerController::class, 'update']);
        Route::delete('/{id}', [CustomerController::class, 'destroy']);
    });
});

Route::group(['prefix' => 'batteries'], function () {
    Route::get('/', [BatteryController::class, 'index']);
    Route::get('/{id}', [BatteryController::class, 'show']);
    Route::post('/', [BatteryController::class, 'store']);
    Route::put('/{id}', [BatteryController::class, 'update']);
    Route::delete('/{id}', [BatteryController::class, 'destroy']);
});

