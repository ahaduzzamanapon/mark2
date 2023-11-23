
@extends('layouts.default')
@section('content')

<div class="content-header">
    <div class="breadcrumb">
        <a class="page" href="notices.php">Notices</a>
        <span class="page current">Add new</span>
    </div>
    <div class="content-header-right">
        <div class="add-data">
            <button class="btn primary filled" id="submit-post"> <i class="fa-regular fa-clipboard right"></i> Submit</button>
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
                        <button class="btn" name="media-selector" allowed-files="jpg jpeg pdf" url="true" unknown-source="true"><i class="fa-duotone fa-upload"></i> Upload file</button>
                        <button class="btn alert" name="reset-media-selector"><i class="fa-duotone fa-clock-rotate-left"></i> Reset</button>
                    </div>
                </div>
            </section>
            <div class="fields mgt-20">
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
                                    <input type="text" lang="bn" id="notice-title-bn" placeholder="নোটিশ টাইটেল" />
                                </div>
                                <div class="field">
                                    <textarea lang="bn" name="notice-content" id="content-bn" placeholder="নোটিশ বিস্তারিত"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="tab-data-container" data-tab="en">
                            <div class="fields">
                                <div class="field">
                                    <input type="text" lang="en" id="notice-title-en" placeholder="Notice Title" />
                                </div>
                                <div class="field">
                                    <textarea lang="en" name="notice-content" id="content-en" placeholder="Notice Details"></textarea>
                                    
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