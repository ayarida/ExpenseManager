<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ExpenseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->post('/category/create',[CategoryController::class,'store']);
Route::middleware('auth:sanctum')->get('/expenses',[ExpenseController::class,'index']);


Route::middleware('auth:sanctum')->delete('/expenses/{expense}', [ExpenseController::class,'destroy']); 
Route::middleware('auth:sanctum')->get('/expenses/{expense}',[ExpenseController::class,'show']); 
Route::middleware('auth:sanctum')->put('/expenses/{expense}',[ExpenseController::class,'update']); 