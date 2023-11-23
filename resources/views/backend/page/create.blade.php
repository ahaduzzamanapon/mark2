
@extends('layouts.default')
@section('content')

<div class="content-header">
    <div class="breadcrumb">
        <a class="page" href="pages.php" data-i18n="page.title" data-i18n="page.title"></a>
        <span class="page current" data-i18n="page.add" data-i18n="page.new"></span>
    </div>
    <div class="content-header-right">
        <div class="add-data">
            <button class="btn primary filled" id="submit-page"> <i class="fa-regular fa-file right"></i> <span data-i18n="action.submit"></span></button>
        </div>
    </div>
</div>
<div class="content-main add-page">
    <div class="row">
        <div class="col col-left">
            <section>
                <div aria-name="media-selector-referrence">                        
                    <div class="media-thumbnail-wrap media-selector-referrence-wrap">
                        <div class="source-file">
                            <span class="content-placeholder"></span>
                        </div>
                    </div>
                    <input type="hidden" name="media-id" value="">
                    <div class="buttons inline">
                        <button class="btn" name="media-selector"><i class="fa-duotone fa-upload"></i> <span data-i18n="file.upload-thumbnail"></span></button>
                        <button class="btn alert" name="reset-media-selector"><i class="fa-duotone fa-clock-rotate-left"></i> <span data-i18n="action.reset"></span></button>
                    </div>
                </div>
            </section>
            <div aria-name="status-visibility">
                <div class="fields inline mgt-20">
                    <div class="field">
                        <select one id="select-status"></select>
                    </div>
                    <div class="field">
                        <select one id="post-page-visiblity"></select>
                    </div>
                </div>
                <div class="field" aria-name="password-protected">
                    <input type="text" id="password" place-i18n="input.password"/>
                </div>
            </div>
        </div>
    
        <div class="col col-right">
            <section>
                <div aria-name="tab" class="language-tabs">
                    <ul aria-name="tabs" class="horizontal-tabs" tab-name="language">
                        <li data-tab="bn" class="active"><span></span></li>
                        <li data-tab="en"><span></span></li>
                    </ul>
                    <div aria-name="tabs-container" tab-name="language">
                        <div class="tab-data-container active" data-tab="bn">
                            <div class="fields">
                                <div class="field">
                                    <input type="text" lang="bn" id="page-title-bn" placeholder="পেজ টাইটেল" />
                                </div>
                                <div class="field">
                                    <textarea lang="bn" name="page-content" id="content-bn" placeholder="পেজ কন্টেন্ট"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="tab-data-container" data-tab="en">
                            <div class="fields">
                                <div class="field">
                                    <input type="text" lang="en" id="page-title-en" placeholder="Page Title" />
                                </div>
                                <div class="field">
                                    <textarea lang="en" name="page-content" id="content-en" placeholder="Page Content"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</div>

@endsection