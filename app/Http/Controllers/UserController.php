<?php

namespace App\Http\Controllers;

use App\UserModel;
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
            return response()->json(['auth' =>  "user is login"]);
        }
        $email = Request::input("email");
        $password = Request::input("password");
        if (Auth::attempt(['email' => $email, 'password' => $password]))
        {
            return response()->json(['email' => $email, 'auth' => true]);
        }
    }
}

