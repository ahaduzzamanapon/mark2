@extends('layouts.default')
@section('content')

<div class="content-header">
        <div class="breadcrumb">
            <a class="page current" href="user-access.php">User</a>
        </div>
        <div class="content-header-right">
            <div class="data-filter">
                <h3>Filter</h3>
                <select one id="filter-role"><option value="">Select role</option></select>
            </div>
            <div class="data-search">
                <input type="search" id="search-user" placeholder="Search user...">
            </div>
            <div class="data-pagination pagination">
                <a href="#" class="page prev">Prev</a>
                <a href="#" class="page">1</a>
                <span class="page current">2</span>
                <span class="page none">...</span>
                <a href="#" class="page">5</a>
                <a href="#" class="page next">Next</a>
            </div>
            <div class="add-data">
                <button class="btn" href="user-add-new.php" id="add-user"> <i class="fa-regular fa-user-plus right"></i> Add User</button>
            </div>
        </div>
    </div>
    <div class="content-main users">
        <div class="add-user">
            <div class="fields inline">
                <div class="field">
                    <input type="text" name="name" id="name" placeholder="Name"/>
                </div>
                <div class="field">
                    <input type="number" name="mobile" id="mobile" placeholder="Mobile"/>
                </div>
                <div class="field">
                    <input type="email" name="email" id="email" placeholder="E-mail"/>
                </div>
                <div class="field">
                    <select one id="user-access-role"><option value="">Select role</option></select>
                </div>
                <div class="field">
                    <button type="submit" class="btn primary filled" id="submit-user"><i class="fas fa-plus"></i> Submit</button>
                </div>
            </div>
        </div>
        <div class="data-content-card no-before">
            <div class="data-content">
                <table class="data-table user-list" data-single="user" data-basecol="3">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>E-mail</th>
                            <th data-expand>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td><img src="{{ asset('') }}assets/images/profile-picture.jpg" alt="F. Last Name"></td>
                            <!-- Link only for current user -->
                            <td>
                                <a href="{{ asset('') }}admin/profile.php">F. Last Name</a>
                            </td>
                            <td><a href="tel:017000000000">017000000000</a></td>
                            <td><a href="mailto:mail@example.com">mail@example.com</a></td>
                            <td>Super Admin</button></td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td><img src="{{ asset('') }}assets/images/profile-picture.jpg" alt="F. Last Name"></td>
                            <td>
                                F. Last Name
                                <div class="row-actions">
                                    <a class="edit" href="user-edit.php?id=user_id"><i class="fa-duotone fa-user-pen"></i> Edit</a>
                                    <button name="delete" class="btn alert-filled delete"><i class="fa-duotone fa-trash"></i> Delete</button>
                                </div>
                            </td>
                            <td><a href="tel:017000000000">017000000000</a></td>
                            <td><a href="mailto:mail@example.com">mail@example.com</a></td>
                            <td>Admin</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

@endsection
