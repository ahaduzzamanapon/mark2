@extends('layouts.default')
@section('content')

<div class="content-header">
    <div class="breadcrumb">
        <a class="page current" href="user-access.php">User Access</a>
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
        <form action="" method="post">
            <div class="fields inline">
                <div class="field">
                    <input type="text" name="name" id="name" placeholder="Name"/>
                </div>
                <div class="field">
                    <input type="email" name="email" id="email" placeholder="E-mail"/>
                </div>
                <div class="field">
                    <select one id="user-access-role"><option value="">Select role</option></select>
                </div>
                <div class="field">
                    <input type="password" name="password" id="password" placeholder="Password" autocomplete/>
                </div>
                <div class="field">
                    <input type="password" name="confirm_password" id="confirm_password" placeholder="Confirm password" autocomplete/>
                </div>
                <div class="field">
                    <button type="submit" class="btn primary filled" id="submit-user"><i class="fas fa-plus"></i> Submit</button>
                </div>
            </div>
        </form>
    </div>
    <div class="data-content-card no-before">
        <div class="data-content">
            <table class="data-table user-list" data-single="user" data-basecol="3">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>E-mail</th>
                        <th data-expand>Role</th>
                        <th class="actions">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td><img src="{{ asset('') }}assets/images/profile-picture.jpg" alt="F. Last Name"></td>
                        <!-- Link only for current user -->
                        <td><a href="{{ asset('') }}admin/profile.php">F. Last Name</a></td>
                        <td>mail@trigger.link</td>
                        <td data-expand>Super Admin<button type="button" name="expand" class="expand"></button></td>
                        <td class="actions">
                            <button name="view" class="btn primary-filled"></button>
                            <button name="delete" class="btn alert-filled delete"></button>
                        </td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td><img src="{{ asset('') }}assets/images/profile-picture.jpg" alt="F. Last Name"></td>
                        <td>F. Last Name</td>
                        <td>mail@trigger.link</td>
                        <td data-expand>Admin<button type="button" name="expand" class="expand"></button></td>
                        <td class="actions">
                            <button name="view" class="btn primary-filled"></button>
                            <button name="delete" class="btn alert-filled delete"></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="data-card mini-card user-card">
            <div class="data-card-wrapper">
                <div class="pre-loader">
                    <div class="pre-loader-wrapper">
                        <img src="{{ asset('') }}assets/images/loading.gif" alt="Loading...">
                    </div>
                </div>
                <div class="user-cover" style="background-image: url({{ asset('') }}assets/images/cover.png);">
                    <button type="button" name="hide-data-card"></button>
                </div>
                <div class="user-profile-picture">
                    <img src="{{ asset('') }}assets/images/profile-picture.jpg" alt="User Name">
                </div>
                <table class="user-details-table">
                    <tbody>
                        <tr>
                            <th><i class="far fa-hashtag"></i> ID :</th>
                            <td>1</td>
                        </tr>
                        <tr>
                            <th><i class="far fa-user"></i> Name :</th>
                            <td>Name</td>
                        </tr>
                        <tr>
                            <th><i class="far fa-shield"></i> Role :</th>
                            <td>Admin</td>
                        </tr>
                        <tr>
                            <th><i class="far fa-envelope"></i> E-mail :</th>
                            <td><a href="mailto:">mail@trigger.link</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

@endsection