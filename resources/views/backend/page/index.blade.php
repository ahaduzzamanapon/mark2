
@extends('layouts.default')
@section('content')

<div class="content-header">
    <div class="breadcrumb">
        <a class="page current" href="pages.php" data-i18n="page.title"></a>
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
            <a class="btn" href="page-add-new.php"> <i class="fa-regular fa-file right"></i> <span data-i18n="page.new"></span></a>
        </div>
    </div>
    <div class="data-filter buttoned-filter">
        <div class="data-filter">
            <select one id="filter-post-page-status" place-i18n="status.select"><option value=""></option></select>
        </div>
        <div class="data-search">
            <input type="search" id="search-page" place-i18n="page.search">
            <button class="btn main" id="filter-search-btn" data-i18n="action.search"></button>
        </div>
        <div>
            <button class="btn delete trash"><i class="fa-solid fa-trash"></i> <span data-i18n="action.trash"></span></button>
        </div>
    </div>
</div>
<div class="content-main">
    <div class="data-content">
        <table class="data-table data-list" data-single="page" data-basecol="2">
            <thead>
                <tr>
                    <th><input type="checkbox" id="select-all-data"></th>
                    <th data-i18n="page.table.name"></th>
                    <th data-i18n="status.title"></th>
                    <th data-i18n="date-time.date.title"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="checkbox" value="0000" name="select-individual-data"></td>
                    <td>
                        About us
                        <div class="row-actions">
                            <a class="edit" href="#"><i class="fa-duotone fa-pen"></i> <span data-i18n="action.edit"></span></a>
                            <button name="delete" class="btn alert-filled delete"><i class="fa-duotone fa-trash"></i> <span data-i18n="action.delete"></span></button>
                            <a class="view"><i class="fa-duotone fa-eye"></i> <span data-i18n="action.view"></span></a>
                        </div>
                    </td>
                    <td class="published" data-i18n="status.published">Published</td>
                    <td><span data-i18n="date">30/06/2023</span> <span data-i18n="date-time.at"></span> <span data-i18n="time">10:16 PM</span></span></td>
            </tbody>
        </table>
    </div>
</div>

@endsection