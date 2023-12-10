
@extends('layouts.default')
@section('content')

<div class="content-header">
    <div class="breadcrumb">
        <a class="page current" href="posts.php" data-i18n="post.title"></a>
    </div>
    <div class="content-header-right">
        <div class="data-bulk-action">
            <select one id="data-bulk-options" place-i18n="action.bulk"><option value=""></option></select>
            <button class="btn" id="data-bulk-action" disabled data-i18n="action.apply"></button>
        </div>
        <button class="btn filter"><i class="fa-solid fa-filter"></i> <span data-i18n="action.filter"></span></button>
        <div class="data-pagination pagination">
            <a href="#" class="page prev" data-i18n="action.prev"></a>
            <a href="#" class="page" data-i18n="number">1</a>
            <span class="page current" data-i18n="number">2</span>
            <span class="page none">...</span>
            <a href="#" class="page" data-i18n="number">5</a>
            <a href="#" class="page next" data-i18n="action.next"></a>
        </div>
        <div class="add-data">
            <a class="btn" href="post-add-new.php"> <i class="fa-regular fa-file-lines right"></i> <span data-i18n="post.new"></span></a>
        </div>
    </div>
    <div class="data-filter buttoned-filter">
        <div class="data-filter">
            <select one id="filter-post-page-status" place-i18n="status.select"><option value=""></option></select>
            <select one id="filter-category" place-i18n="post.category.select-category"><option value=""></option></select>
        </div>
        <div class="data-search">
            <input type="search" id="search-page" place-i18n="post.search">
            <button class="btn main" id="filter-search-btn" data-i18n="action.search"></button>
        </div>
        <div>
            <button class="btn delete trash"><i class="fa-solid fa-trash"></i> <span data-i18n="action.trash"></span></button>
        </div>
    </div>
</div>
<div class="content-main posts">
    <div class="data-content">
        <!-- Bulk Module -->
        <div class="bulk-edit-module" aria-name="bulk-module">
            <div class="bulk-edit-module-wrapper">
                <div class="row">
                    <div class="col col-1">
                        <div class="title" data-i18n="action.bulk-edit-title"></div>
                        <div class="bulk-list">
                            <ul></ul>
                        </div>
                    </div>
                    <div class="col col-2">
                        <div class="title" data-i18n="action.bulk-setting-attributes"></div>
                        <div class="bulk-options">
                            <div class="fields inline" aria-name="status-visibility">
                                <div class="field">
                                    <label for="post-category"><span data-i18n="post.category.select-category"></span></label>
                                    <select one id="post-category">
                                        <option value="-1" selected>-- No change</option>
                                    </select>
                                </div>
                                <div class="field">
                                    <label for="select-status"><span data-i18n="status.select"></span></label>
                                    <select one id="select-status">
                                        <option value="-1" selected>-- No change</option>
                                    </select>
                                    <div class="field inline" aria-name="scheduled">
                                        <input type="date" id="schedule-date"/>
                                        <input type="time" id="schedule-time"/>
                                    </div>
                                </div>
                                <div class="field">
                                    <label for="post-page-visiblity"><span data-i18n="visibility.title"></span></label>
                                    <select one id="post-page-visiblity">
                                        <option value="-1" selected>-- No change</option>
                                    </select>
                                </div>
                                <div class="field" aria-name="password-protected">
                                    <input type="text" id="password" placeholder="Password"/>
                                </div>
                            </div>
                            <div class="buttons inline mgt-20">
                                <button id="cancel-bulk-action" class="btn alert">Cancel</button>
                                <button id="submit-bulk-action" class="btn primary filled">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Data Table -->
        <table class="data-table data-list" data-single="page" data-basecol="2">
            <thead>
                <tr>
                    <th><input type="checkbox" id="select-all-data"></th>
                    <th data-i18n="post.table.name"></th>
                    <th data-i18n="post.category.title"></th>
                    <th data-i18n="status.title"></th>
                    <th data-i18n="date-time.date.title"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="checkbox" value="0000" name="select-individual-data"/></td>
                    <td>
                        Hello World!
                        <div class="row-actions">
                            <a class="edit" href="#"><i class="fa-duotone fa-pen"></i> <span data-i18n="action.edit"></span></a>
                            <button name="delete" class="btn alert-filled delete"><i class="fa-duotone fa-trash"></i> <span data-i18n="action.delete"></span></button>
                            <a class="view"><i class="fa-duotone fa-eye"></i> <span data-i18n="action.view"></span></a>
                            <input type="hidden" name="data-id" value="0001">
                        </div>
                    </td>
                    <td>Uncategorized</td>
                    <td class="published">Published</td>
                    <td>
                        <div class="date update">
                            <span>
                                <span data-i18n="date">30/06/2023</span> <span data-i18n="date-time.at"></span> <span data-i18n="time">10:16 PM</span></span>
                            </span>
                            <span class="count">(<span data-i18n="number">3</span>)</span>
                        </div>
                        <div class="date published">
                            <span data-i18n="date">30/06/2023</span> <span data-i18n="date-time.at"></span> <span data-i18n="time">10:16 PM</span></span>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

@endsection
