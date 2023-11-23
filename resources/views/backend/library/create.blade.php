@extends('layouts.default')
@section('content')

<div class="content-header">
    <div class="content-header-left">
        <div class="breadcrumb">
            <a class="page" href="media.php" data-i18n="media.title"></a>
            <a class="page current" href="media-add-new.php" data-i18n="media.new"></a>
        </div>
    </div>
</div>
<div class="content-main add-media">
    <div class="row">
        <div class="col col-left">
            <label for="upload-media" class="drag_and_drop_box">
                <i class="fa-solid fa-cloud-arrow-up"></i>
                <span><span data-i18n="file.drop">Drop your files here.</span> <br> <span data-i18n="or"></span> <span data-i18n="file.browse"></span></span>
                <input type="file" id="upload-media"/>
            </label>
        </div>
        <div class="col col-right">
            <div class="upload-status">
                <ul>
                    <li>
                        <span class="file-type">
                            <i class="fa-solid fa-file-pdf"></i>
                        </span>
                        <div class="file-info-action-progress">
                            <div class="file-info-action">
                                <div class="file-info">
                                    <span class="file-name">constituion.pdf</span>
                                    <span class="file-size"><span data-i18n="number">6.2</span> <span data-i18n="file.mb"></span></span>
                                </div>
                                <span class="file-action delete">
                                    <i class="fa-regular"></i>
                                </span>
                            </div>
                            <div class="file-progress">
                                <progress id="file" value="70" max="100"> <span data-i18n="number">70</span>% </progress>
                            </div>
                        </div>
                    </li>
                    <li>
                        <span class="file-type">
                            <i class="fa-solid fa-file-pdf"></i>
                        </span>
                        <div class="file-info-action-progress">
                            <div class="file-info-action">
                                <div class="file-info">
                                    <span class="file-name">constituion.pdf</span>
                                    <span class="file-size">
                                    <span class="file-size"><span data-i18n="number">6.2</span> <span data-i18n="file.mb"></span></span></span>
                                </div>
                                <span class="file-action uploaded">
                                    <i class="fa-regular"></i>
                                </span>
                            </div>
                            <div class="file-progress">
                                <progress id="file" value="25" max="100"> <span data-i18n="number">25</span>% </progress>
                            </div>
                        </div>
                    </li>
                    <li>
                        <span class="file-type">
                            <i class="fa-solid fa-file-pdf"></i>
                        </span>
                        <div class="file-info-action-progress">
                            <div class="file-info-action">
                                <div class="file-info">
                                    <span class="file-name">constituion.pdf</span>
                                    <span class="file-size">
                                    <span class="file-size"><span data-i18n="number">6.2</span> <span data-i18n="file.mb"></span></span></span>
                                </div>
                                <span class="file-action uploaded">
                                    <i class="fa-regular"></i>
                                </span>
                            </div>
                            <div class="file-progress">
                                <progress id="file" value="50" max="100"> <span data-i18n="number">50</span>% </progress>
                            </div>
                        </div>
                    </li>
                    <li>
                        <span class="file-type">
                            <i class="fa-solid fa-file-pdf"></i>
                        </span>
                        <div class="file-info-action-progress">
                            <div class="file-info-action">
                                <div class="file-info">
                                    <span class="file-name">constituion.pdf</span>
                                    <span class="file-size">
                                    <span class="file-size"><span data-i18n="number">6.2</span> <span data-i18n="file.mb"></span></span></span>
                                </div>
                                <span class="file-action uploaded">
                                    <i class="fa-regular"></i>
                                </span>
                            </div>
                            <div class="file-progress">
                                <progress id="file" value="40" max="100"> <span data-i18n="number">40</span>% </progress>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>

@endsection