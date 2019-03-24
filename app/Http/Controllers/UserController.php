<?php

namespace App\Http\Controllers;

use Exception;
use App\UserModel;
use Illuminate\Support\Facades\Hash;
use Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    //
  public function getAllUsers() {
      $users = UserModel::all();

      foreach ($users as $user) {
          echo $user->user_email;
      }
  }
    public function authenticate()
    {
        if (Auth::check()) {
            return response()->json(['authStatus' =>  true]);
        }
        $email = Request::input("email");
        $password = Request::input("password");
        error_log($email);
        error_log($password);
        if (Auth::attempt(['email' => $email, 'password' => $password]))
        {
            return response()->json(['authStatus' => true]);
        }
        return response()->json(['authStatus' => false]);
    }

    public function signupUser() {
        $email = Request::input("email");
        $password = Request::input("password");
        $users = UserModel::where("email", $email) -> get();
        error_log($users);
        if (count($users) > 0) {
            return response()->json(['status' => 'error', 'message' => 'this email has already registered']);
        }
        try {
            $newUser = new UserModel();
            $newUser->email = $email;
            $newUser->password = Hash::make($password);
            $newUser->save();

            if (Auth::attempt(['email' => $email, 'password' => $password])) {
                return response()->json(['authStatus' => true]);
            }
            return response()->json(['authStatus' => false]);
        } catch (Exception $e) {
            $message = $e->getMessage();
            error_log($message);

            return response()->json(['message' => $message], 500);
        }

    }
}

