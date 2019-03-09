<?php
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\UserModel;
use App\ModelObjFormat;
use App\Console;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
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

Route::post("/login", "UserController@authenticate");

Route::post('/modelFormatObj/create', function (Request $request) {
    if (Auth::check()) {
        $userId = Auth::id();
       try{
           error_log($request -> input("title"));
           error_log($request -> file("objModelFile"));
           $file = $request -> file("objModelFile");
           if ($file == null) {
               throw new Exception("file is null");
           }
           $path = $file -> store("modelsFormatObj");
           $title = $request -> input("title");
           if ($title == null || $title == "") {
               $title = $request -> input("fileName");
           }
           $model = new ModelObjFormat;
           $model -> userId = $userId;
           $model -> title = $title;
           $model -> path = $path;
           $model -> save();

           $newModels = ModelObjFormat::where("userId", $userId) -> get();
           return response()->json(['success' => true, 'models' => $newModels]);
       } catch (Exception $e) {
           $message = $e -> getMessage();
           error_log($message);

           return response()->json(['message' => $message], 500);
       }
    }
    return response()->json(['authStatus' => false]);
});

Route::post('/modelFormatObj/delete', function (Request $request) {
    if (Auth::check()) {
        $userId = Auth::id();
        try{
            $modelId = $request -> input("modelId");
            error_log($modelId);
            $models = ModelObjFormat::where("id", $modelId) -> get();
            $modelForDelete = $models[0];
            $path = $modelForDelete -> path;
            $modelForDelete -> delete();
            Storage::delete($path);

            $newModels = ModelObjFormat::where("userId", $userId) -> get();

            return response()->json(['success' => true, 'models' => $newModels]);
        } catch (Exception $e) {
            $message = $e -> getMessage();
            error_log($message);

            return response()->json(['message' => $message], 500);
        }
    }
    return response()->json(['authStatus' => false]);
});

Route::get('/modelFormatObj', ['middleware' => 'cors', function (Request $request) {
        try{
            $modelId = $request -> input("modelId");
            $models = ModelObjFormat::where("id", $modelId) -> get();
            $model = $models[0];
            $path = $model -> path;
            error_log($modelId);
            error_log($model);

            if ($path == null) {
                throw new Exception("path of .obj file is null");
            }
            $content = Storage::get($path);

            return response($content);
        } catch (Exception $e) {
            $message = $e -> getMessage();
            error_log($message);

            return response()->json(['message' => $message], 500);
        }
}]);

Route::get('/modelFormatObj/list', function (Request $request) {
    if (Auth::check()) {
        $userId = Auth::id();
        try{
            $models = ModelObjFormat::where("userId", $userId) -> get();
            return response()->json(['success' => true, 'models' => $models]);
        } catch (Exception $e) {
            $message = $e -> getMessage();
            error_log($message);

            return response()->json(['message' => $message], 500);
        }
    }
    return response()->json(['authStatus' => false]);
});

Route::get('/modelFormatObj/lastModel', function (Request $request) {
    if (Auth::check()) {
        $userId = Auth::id();
        try{
            $models = ModelObjFormat::where("userId", $userId) -> get();
            $lastIndex = count($models) - 1;
            $path = $models[$lastIndex] -> path;
            if ($path == null) {
                throw new Exception("path of .obj file is null");
            }
            $content = Storage::get($path);

            return response($content);
        } catch (Exception $e) {
            $message = $e -> getMessage();
            error_log($message);

            return response()->json(['message' => $message], 500);
        }
    }
    return response()->json(['authStatus' => false]);
});