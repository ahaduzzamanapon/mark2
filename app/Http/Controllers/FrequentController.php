<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;

class FrequentController extends Controller
{
    public function frequent()
    {
        $roles = Role::with('permissions')->get();
        return view('backend.frequent.frequent' , compact('roles'));
    }
    public function frequent_store(Request $request)
    {
        
    }
}
