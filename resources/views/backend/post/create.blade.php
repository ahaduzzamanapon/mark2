
@extends('layouts.default')
@section('content')

<div class="content-header">
    <div class="breadcrumb">
        <a class="page" href="posts.php" data-i18n="post.title"></a>
        <span class="page current" data-i18n="post.title"></span>
    </div>
    <div class="content-header-right">
        <div class="add-data">
            <button class="btn primary filled" id="submit-post"> <i class="fa-regular fa-file-lines right"></i> <span data-i18n="action.submit"></span></button>
        </div>
    </div>
</div>
<div class="content-main add-post">
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
            <div class="fields mgt-20">
                <div class="field">
                    <select one id="post-category" place-i18n="post.select-category"><option value=""></option></select>
                </div>
                <div class="field">
                    <select one id="select-status"></select>
                </div>
                <div class="field">
                    <select one id="post-page-visiblity"></select>
                </div>
                <div class="field" aria-name="password-protected">
                    <input type="text" id="password" placeholder="Password"/>
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
                                    <input type="text" lang="bn" id="post-title-bn" placeholder="পোস্ট টাইটেল" />
                                </div>
                                <div class="field">
                                    <textarea lang="bn" name="post-content" id="content-bn" placeholder="পেজ কন্টেন্ট"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="tab-data-container" data-tab="en">
                            <div class="fields">
                                <div class="field">
                                    <input type="text" lang="en" id="post-title-en" placeholder="Post Title" />
                                </div>
                                <div class="field">
                                    <textarea lang="en" name="post-content" id="content-en" placeholder="Post Content"></textarea>
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