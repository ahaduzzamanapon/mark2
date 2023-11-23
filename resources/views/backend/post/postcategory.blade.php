
@extends('layouts.default')
@section('content')

<div class="content-header">
    <div class="breadcrumb">
        <a class="page" href="posts.php">Posts</a>
        <span class="page current">Categories</span>
    </div>
    <div class="content-header-right">
        <div>
            <button class="btn delete trash"><i class="fa-solid fa-trash"></i> Trash</button>
        </div>
        <div class="data-bulk-action">
            <select one id="data-bulk-options"><option value="">Bulk action</option></select>
            <button class="btn" id="data-bulk-action" disabled>Apply</button>
        </div>
    </div>
</div>
<div class="content-main add-category" aria-name="add-category">
    <div class="row">
        <div class="col col-left" aria-name="category-form">
            <div class="fields">
                <div aria-name="tab" class="language-tabs">
                    <ul aria-name="tabs" tab-name="language" class="horizontal-tabs">
                        <li data-tab="bn" class="active"><span></span></li>
                        <li data-tab="en"><span></span></li>
                    </ul>
                    <div aria-name="tabs-container" tab-name="language">
                        <div class="tab-data-container active" data-tab="bn">
                            <div class="field">
                                <label for="category-name-bn">ক্যাটাগরির নাম </label>
                                <input type="text" lang="en" id="category-name-bn" placeholder="বাংলা" />
                            </div>
                        </div>
                        <div class="tab-data-container" data-tab="en">
                            <div class="field">
                                <label for="category-name-en">Category name</label>
                                <input type="text" lang="en" id="category-name-en" placeholder="English" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="field">
                    <label for="category-slug">Category slug</label>
                    <input type="text" id="category-slug"/>
                </div>
                <div class="field">
                    <label for="parent-category">Parent category</label>
                    <select one id="parent-category">
                        <option value="">Select category</option>
                    </select>
                </div>
            </div>
            <div class="fields inline mgt-20">
                <div class="field">
                    <input type="hidden" id="input-edit-category" value=""/>
                    <button class="btn main">Add new category</button>
                </div>
                <div class="field hide-field-no-transition cancel-onpage-action">
                    <button class="btn normal" name="cancel-onpage-action">Cancel</button>
                </div>
            </div>
        </div>
    
        <div class="col col-right">
            <div class="data-content">
                <table class="data-table data-list" data-single="page" data-basecol="2">
                    <thead>
                        <tr>
                            <th><input type="checkbox" id="select-all-data"></th>
                            <th>Name</th>
                            <th>Posts</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="checkbox" value="0000" name="select-individual-data"></td>
                            <td>
                                Default (ডিফল্ট)
                                <div class="row-actions">
                                    <button name="edit-category" class="edit" data-id="0000" data-name-bn="ডিফল্ট" data-name-en="Default" data-slug="default" data-parent="default"><i class="fa-duotone fa-pen"></i> Edit</button>
                                    <button name="delete" class="btn alert-filled delete"><i class="fa-duotone fa-trash"></i> Delete</button>
                                </div>
                            </td>
                            <td>1</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

@endsection