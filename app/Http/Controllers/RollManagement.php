<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Session;

use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class RollManagement extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function Add_role_permission()
    {
        $role = Role::whereIn('name', ['Super Admin'])->first();

        if (!$role) {
            $role = Role::create(['name' => 'Super Admin']);
        }

        $permissions = ['Dashboard', 'Media', 'Slides', 'Pages', 'Posts & Categories', 'Notices', 'Events', 'Members', 'Committees', 'Appearances', 'Frequent Data', 'Settings', 'Webpage visitor'];

        foreach ($permissions as $permissionName) {
            $existingPermission = Permission::where('name', $permissionName)->where('guard_name', 'web')->first();

            if (!$existingPermission) {
                Permission::create(['name' => $permissionName, 'guard_name' => 'web']);
            }
        }

        $role->syncPermissions(Permission::where('guard_name', 'web')->whereIn('name', $permissions)->get());

        $role2 = Role::whereIn('name', [' Webpage visitor'])->first();
        
        if (!$role2) {
            $role2 = Role::create(['name' => 'Webpage visitor']);
        }
        $existingPermission2 = Permission::where('name', 'Webpage visitor')->where('guard_name', 'web')->first();
        if (!$existingPermission2) {
            Permission::create(['name' => 'Webpage visitor', 'guard_name' => 'web']);
        }
        $role2->syncPermissions(Permission::where('guard_name', 'web')->whereIn('name', ['Webpage visitor'])->get());
        echo 'success';
    }

    public function role_permission_update(Request $request)
    {
        $serializedData = json_decode($request->input('serializedData'), true);
        foreach ($serializedData as $key => $value) {

            $role = Role::whereIn('name', [$key])->first();
        
            if (!$role) {
                $role = Role::create(['name' => $key]);
            }
            $per=[];
           foreach ($value as $permission) {
               if($permission['isChecked']==true){
                   $per[] = $permission['checkboxValue'];
               }
            }
            $role->syncPermissions($per);
        }
        Session::flash('success', 'Role Permission Updated');
    }
    public function delete($id){
        $role = Role::find($id);
        $role->delete();
        Session::flash('success', 'Role Deleted');

        return redirect()->back();
    }
}

