
@extends('layouts.default')
@section('content')

<div class="content-header">
    <div class="content-header-left">
        <div class="breadcrumb">
            <a class="page current" href="media.php" data-i18n="media.title"></a>
        </div>
        <div class="header-alt">
            <span>(<span data-i18n="number">30</span> <span data-i18n="media.files-count"></span>)</span>
        </div>
    </div>
    <div class="content-header-right media-actions">
        <div class="select-media-wrapper">
            <button class="btn select-media" id="select-media-item"><i class="fa-light fa-circle-check"></i> <span data-i18n="media.select"></span></button>
            <span class="select-all" id="select-all-media" data-i18n="media.select-all">all</span>
        </div>
        <button class="btn delete only-icon" id="delete-media"><i class="fa-solid fa-trash"></i></button>
        <div class="grid-list-view">
            <button class="btn grid active" id="media-grid"><i class="fa-solid fa-grid-horizontal"></i></button>
            <button class="btn list" id="media-list"><i class="fa-solid fa-list-ul"></i></button>
        </div>
        <a class="btn add-new-media" href="{{url('media-add-new')}}"><i class="fa-solid fa-plus"></i> <span data-i18n="media.new"></span></a>
    </div>
</div>
<div class="content-main media">
    <div class="row">
        <div class="col col-left">
            <ul class="medias">
                @foreach ($libraries as $key => $library)
                      <li  title="{{$library->name}}" data-id="{{$library->id }}"  data-url="{{$library->url }}"  aria-checked="false"><img src="https://img.icons8.com/color/96/{{$library->file_type}}.png" alt=""></li>
                    @endforeach

            </ul>
            <span class="content-not-found hidden" data-i18n="media.not-found"></span>
        </div>
        <div class="col col-right media-filter">
            <div class="media-filter-wrap">
                <h3 data-i18n="media.filter"></h3>
                <div class="fields">
                    <div class="field">
                        <input type="search" placeholder="Search" id="search-media" />
                    </div>
                    <div class="field">
                        <label for="media-sort" data-i18n="sort.title">Sort by</label>
                        <select name="media-sort" id="media-sort">
                            <option value="name-asc" data-i18n="sort.name.asc">Name ASC</option>
                            <option value="name-dsc" data-i18n="sort.name.dsc">Name DSC</option>
                            <option value="date-asc" data-i18n="sort.date.asc">Date ASC</option>
                            <option value="date-dsc" data-i18n="sort.date.dsc">Date DSC</option>
                        </select>
                    </div>
                    <div class="field">
                        <label for="media-time-uploaded" data-i18n="media.time-uploaded"></label>
                        <select name="media-time-uploaded" id="media-time-uploaded">
                            <option value="all-time" selected data-i18n="media.all-time"></option>
                            <option value="january-2023">January 2023</option>
                            <option value="february-2023">February 2023</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection