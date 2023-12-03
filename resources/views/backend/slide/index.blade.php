@extends('layouts.default')
@section('content')

<div class="content-header">
    <div class="breadcrumb">
        <a class="page current" href="slide.php" data-i18n="slide.title"></a>
    </div>
    <div class="content-header-right">
        <div class="add-data">
            <button class="btn info fill-hover" id="add-new-slide"><i class="fa-solid fa-layer-plus"></i> <span data-i18n="slide.new"></span></button>
            <button class="btn primary filled" id="update-slides"> <i class="fa-solid fa-rotate right"></i> <span data-i18n="slide.update"></span></button>
        </div>
    </div>
</div>
<div class="content-main slides">
    <div class="data-content">
        <form action="{{url('/test')}}" method="get" class="data-form" enctype="multipart/form-data">
        <table class="data-table" data-single="slide" data-basecol="2">
            <thead>
                <tr>
                    <th class="preview" data-i18n="slide.preview"></th>
                    <th class="title" data-i18n="slide.list-title"></th>
                    <th class="slide-content-col" data-i18n="slide.content.title"></th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </table>
        <button type="submit" class="btn primary filled"><i class="fa-solid fa-rotate right"></i> <span data-i18n="slide.update"></span></button>
    </form>
    </div>
</div>

@endsection