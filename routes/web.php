<?php
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\UserModel;
use App\ModelObjFormat;
use App\Console;
use Illuminate\Http\Request;
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
    return view('welcome');
});

Route::get('/auth', function () {
   if (Auth::check()) {
       $userId = Auth::id();
       $model = ModelObjFormat::where("userId", $userId) -> get();

       return response()->json(['authStatus' => true, 'models' => $model]);
   }
    return response()->json(['authStatus' => false]);
});

Route::get("/login", "UserController@authenticate");

Route::post('/modelFormatObj/create', function (Request $request) {
    if (Auth::check()) {
        $userId = Auth::id();
       try{
           error_log($request -> input("title"));
           error_log($request -> file("objModelFile"));
           $path = $request -> file("objModelFile") -> store("modelsFormatObj");
           $title = $request -> input("title");
           $model = new ModelObjFormat;
           $model -> userId = $userId;
           $model -> title = $title;
           $model -> path = $path;
           $model -> save();

           $newModels = ModelObjFormat::where("userId", $userId) -> get();
           return response()->json(['success' => true, 'models' => $newModels]);
       } catch (Exception $e) {
           $message = $e -> getMessage();
           error_log($e -> getMessage());

           return response()->json(['message' => $message], 500);
       }
    }
    return response()->json(['authStatus' => false]);
});