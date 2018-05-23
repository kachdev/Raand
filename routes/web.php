<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    // return view('welcome');
    return File::get(public_path() .'/index.html');
});


Route::group(['middleware' => ['cors'], 'prefix' => 'api'], function () {

    Route::resource('receiver', 'receiverController',
    array('only' => array('index','store', 'destroy')));

    Route::resource('poster', 'posterController',
    array('only' => array('index','store', 'destroy')));
});
