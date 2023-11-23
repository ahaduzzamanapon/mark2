
@extends('layouts.default')
@section('content')

<div class="content-header">
        <div class="breadcrumb">
            <a class="page current" href="notices.php">Notices</a>
        </div>
        <div class="content-header-right">
            <div class="data-bulk-action">
                <select one id="data-bulk-options"><option value="">Bulk action</option></select>
                <button class="btn" id="data-bulk-action" disabled>Apply</button>
            </div>
            <button class="btn filter"><i class="fa-solid fa-filter"></i> Filter</button>
            <div class="data-pagination pagination">
                <a href="#" class="page prev">Prev</a>
                <a href="#" class="page">1</a>
                <span class="page current">2</span>
                <span class="page none">...</span>
                <a href="#" class="page">5</a>
                <a href="#" class="page next">Next</a>
            </div>
            <div class="add-data">
                <a class="btn" href="{{ url('add_new_notice') }}"> <i class="fa-regular fa-clipboard right"></i> New Notice</a>
            </div>
        </div>
        <div class="data-filter buttoned-filter">
            <div class="data-filter">
                <select one id="filter-post-page-status"><option value="">Select status</option></select>
            </div>
            <div class="data-search">
                <input type="search" id="search-notice" placeholder="Search notice...">
                <button class="btn main" id="filter-search-btn">Search</button>
            </div>
            <div>
                <button class="btn delete trash"><i class="fa-solid fa-trash"></i> Trash</button>
            </div>
        </div>
    </div>
    <div class="content-main">
        <div class="data-content">
            <table class="data-table data-list" data-single="notice" data-basecol="2">
                <thead>
                    <tr>
                        <th><input type="checkbox" id="select-all-data"></th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="checkbox" value="0000" name="select-individual-data"></td>
                        <td>
                            মনোনয়ন বিতরণ
                            <div class="row-actions">
                                <a class="edit" href="#"><i class="fa-duotone fa-pen"></i> Edit</a>
                                <button name="delete" class="btn alert-filled delete"><i class="fa-duotone fa-trash"></i> Delete</button>
                                <a class="view"><i class="fa-duotone fa-eye"></i> View</a>
                            </div>
                        </td>
                        <td class="published">Published</td>
                        <td><span>30/06/2023 at 10:16 PM</span></td>
                </tbody>
            </table>
        </div>
    </div>

@endsection