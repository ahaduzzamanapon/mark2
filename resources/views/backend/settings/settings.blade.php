
@extends('layouts.default')
@section('content')

<div class="content-header">
    <div class="breadcrumb">
        <a class="page current" href="settings.php">Settings</a>
    </div>
</div>
<div class="content-main tabbed-page settings">
    <div class="row" aria-name="tab">
        <div class="col col-left">
            <ul aria-name="tabs" class="vertical-tabs" tab-name="main">
                <li data-tab="general" class="active"><i class="fa-solid fa-screwdriver-wrench"></i> General</li>
                <li data-tab="export-import"><i class="fa-solid fa-right-left-large"></i> Export/Import</li>
                <li data-tab="api"><i class="fa-solid fa-webhook"></i> API & Gateways</li>
            </ul>
        </div>
    
        <div class="col col-right">
            <div aria-name="tabs-container" tab-name="main">
                <div class="tab-data-container active" data-tab="general">
                    <div class="tab-data-wrap">
                        <div class="tab-container-heading"><h2><i class="fa-solid fa-screwdriver-wrench"></i> General</h2></div>
                        <div class="row">
                            <div class="col setting-col-left">
                                <div class="fields inline">
                                    <div class="field logo">
                                        <div aria-name="media-selector-referrence">
                                            <div class="media-thumbnail-wrap media-selector-referrence-wrap">
                                                <div class="source-file"><span class="content-placeholder"></span></div>
                                            </div>
                                            <input type="hidden" name="media-id" data-name="logo" value="">
                                            <div class="buttons inline">
                                                <button class="btn" name="media-selector" allowed-files="jpg jpeg png"><i class="fa-duotone fa-upload"></i> Logo</button>
                                                <button class="btn alert" name="reset-media-selector"><i class="fa-duotone fa-clock-rotate-left"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="field flag">
                                        <div aria-name="media-selector-referrence">
                                            <div class="media-thumbnail-wrap media-selector-referrence-wrap">
                                                <div class="source-file"><span class="content-placeholder"></span></div>
                                            </div>
                                            <input type="hidden" name="media-id" data-name="falg" value="">
                                            <div class="buttons inline">
                                                <button class="btn" name="media-selector" allowed-files="jpg jpeg png"><i class="fa-duotone fa-upload"></i> Flag</button>
                                                <button class="btn alert" name="reset-media-selector"><i class="fa-duotone fa-clock-rotate-left"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="field favicon">
                                    <div aria-name="media-selector-referrence">
                                        <div class="favicon-browser-tab">
                                            <div class="favicon-browser-tab-wrap">
                                                <div class="media-thumbnail-wrap media-selector-referrence-wrap">
                                                    <div class="source-file"><span class="content-placeholder"></span></div>
                                                </div>
                                                <span class="site-title">Site Title</span>
                                                <button class="btn alert" name="reset-media-selector"><i class="fa-solid fa-xmark"></i></button>
                                            </div>
                                        </div>
                                        <input type="hidden" name="media-id" data-name="favicon" value="">
                                        <div class="buttons inline">
                                            <button class="btn" name="media-selector" allowed-files="png"><i class="fa-duotone fa-upload"></i> Favicon</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col setting-col-right no-scroll">
                                <div aria-name="tab" class="language-tabs">
                                    <ul aria-name="tabs" class="horizontal-tabs" tab-name="language">
                                        <li data-tab="bn" class="active"><span></span></li>
                                        <li data-tab="en"><span></span></li>
                                    </ul>
                                    <div aria-name="tabs-container" tab-name="language">
                                        <div class="tab-data-container active" data-tab="bn">
                                            <div class="tab-data-wrap">
                                                <div class="fields">
                                                    <div class="field"><input type="text" name="site-title" placeholder="সাইট টাইটেল" lang="bn"></div>
                                                    <div class="field"><input type="text" name="site-tagline" placeholder="সাইট ট্যাগলাইন" lang="bn"></div>
                                                    <div class="field"><textarea name="site-description" placeholder="সাইটের বর্ণনা" lang="bn"></textarea></div>
                                                </div>
                                                <div class="fields inline">
                                                    <div class="field">
                                                        <select one lang="bn" name="select-date-format">
                                                            <option value="">তারিখ ফরমেট</option>
                                                        </select>
                                                        <input type="text" data-dependecy="select" lang="bn" name="date-format" disabled />
                                                    </div>
                                                    <div class="field">
                                                        <select one lang="bn" name="select-time-format">
                                                            <option value="">সময় ফরমেট</option>
                                                        </select>
                                                        <input type="text" data-dependecy="select" lang="bn" name="time-format" disabled />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-data-container" data-tab="en">
                                            <div class="tab-data-wrap">
                                                <div class="fields">
                                                    <div class="field"><input type="text" name="site-title" placeholder="Site Title"></div>
                                                    <div class="field"><input type="text" name="site-tagline" placeholder="Site Tagline"></div>
                                                    <div class="field"><textarea name="site-description" placeholder="Site Description"></textarea></div>
                                                </div>
                                                <div class="fields inline">
                                                    <div class="field">
                                                        <select one name="select-date-format">
                                                            <option value="">Date Format</option>
                                                        </select>
                                                        <input type="text" data-dependecy="select" name="date-format" disabled />
                                                    </div>
                                                    <div class="field">
                                                        <select one name="select-time-format">
                                                            <option value="">Time Format</option>
                                                        </select>
                                                        <input type="text" data-dependecy="select" name="time-format" disabled />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-data-container" data-tab="export-import">
                    <div class="tab-data-wrap">
                        <div class="tab-container-heading"><h2></h2></div>
                        <div class="tab-container-content">
                            <div class="export-import-header">
                                <div class="fields inline">
                                    <div class="field"><select one name="export-import-action" id="export-import-action"><option value="">Selelct action</option></select></div>
                                    <div class="field"><select one name="import-data-type" id="export-import-data-type"><option value="">Select Data Type</option></select></div>
                                    <div class="field"><button one id="export-import-submit" class="btn primary filled" disabled style="display: none;">Export/Import</button></div>
                                </div>
                            </div>
                            <div aria-name="import-steps" style="display: none;">
                                <div class="add-media">
                                    <label for="upload-media" class="drag_and_drop_box">
                                        <i class="fa-solid fa-cloud-arrow-up"></i>
                                        <span>Drop your files here. <br> or <span>Browse</span></span>
                                        <input type="file" id="upload-media">
                                    </label>
                                </div>
                                <div class="import-data-mapping">
                                    <div data-import="member">
                                        <div class="fields">
                                            <div class="field">
                                                <label>সদস্যের নাম (বাংলা)</label>
                                                <select one data-select="import-column"></select>
                                            </div>
                                            <div class="field">
                                                <label>Member Name (English)</label>
                                                <select one data-select="import-column"></select>
                                            </div>
                                            <div class="field">
                                                <label>পদবী</label>
                                                <select one data-select="import-column"></select>
                                            </div>
                                            <div class="field">
                                                <label>জন্ম তারিখ</label>
                                                <select one data-select="import-column"></select>
                                            </div>
                                            <div class="field">
                                                <label>ঠিকানা</label>
                                                <div class="fields inline import-addresses">
                                                    <div class="field"><label for="division">বিভাগ</label><select one id="division" data-select="import-column" class="import-address"></select></div>
                                                    <div class="field"><label for="district">জেলা</label><select one id="district" data-select="import-column" class="import-address"></select></div>
                                                    <div class="field"><label for="upzilla">উপজেলা/থানা</label><select one id="upzilla" data-select="import-column" class="import-address"></select></div>
                                                    <div class="field"><label for="union">ইউনিয়ন</label><select one id="union" data-select="import-column" class="import-address"></select></div>
                                                    <div class="field"><label for="ward">ওয়ার্ড</label><select one id="ward" data-select="import-column" class="import-address"></select></div>
                                                </div>
                                            </div>
                                            <div class="field">
                                                <label>যোগাযোগের তথ্য</label>
                                                <div class="fields inline">
                                                    <div class="field"><label>মোবাইল নম্বর</label><select one data-select="import-column"></select></div>
                                                    <div class="field"><label>ইমেইল</label><select one data-select="import-column"></select></div>
                                                </div>
                                            </div>
                                            <div class="field">
                                                <label>সামাজিক যোগাযোগ মাধ্যম</label>
                                                <div class="fields inline">
                                                    <div class="field"><label>ফেসবুক</label><select one data-select="import-column"></select></div>
                                                    <div class="field"><label>টুইটার</label><select one data-select="import-column"></select></div>
                                                    <div class="field"><label>ইউটিউব</label><select one data-select="import-column"></select></div>
                                                </div>
                                            </div>
                                            <div class="field">
                                                <label>সদস্য সম্পর্কে বিস্তারিত</label>
                                                <div class="fields inline">
                                                    <div class="field"><label>বাংলা</label><select one data-select="import-column"></select></div>
                                                    <div class="field"><label>ইংরেজী</label><select one data-select="import-column"></select></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-import="committe">
                                        <div class="fields">
                                            <div class="field">
                                                <label>ঠিকানা</label>
                                                <div class="fields inline import-addresses">
                                                    <div class="field"><label for="division">বিভাগ</label><select one id="division" data-select="import-column" class="import-address"></select></div>
                                                    <div class="field"><label for="district">জেলা</label><select one id="district" data-select="import-column" class="import-address"></select></div>
                                                    <div class="field"><label for="upzilla">উপজেলা/থানা</label><select one id="upzilla" data-select="import-column" class="import-address"></select></div>
                                                    <div class="field"><label for="union">ইউনিয়ন</label><select one id="union" data-select="import-column" class="import-address"></select></div>
                                                    <div class="field"><label for="ward">ওয়ার্ড</label><select one id="ward" data-select="import-column" class="import-address"></select></div>
                                                </div>
                                            </div>
                                            <div class="field">
                                                <label>কমিটি/দলের ধরন</label>
                                                <select one data-select="import-column"></select>
                                            </div>
                                            <div class="field">
                                                <label>সদস্য</label>
                                                <div class="fields inline">
                                                    <div class="field"><label>সদস্যা নাম/মেম্বার আইডি</label><select one data-select="import-column"></select></div>
                                                    <div class="field"><label>Name in english &nbsp;<small style="font-weight: normal;">(for unlisted member)</small></label><select one data-select="import-column"></select></div>
                                                </div>
                                            </div>
                                            <div class="field">
                                                <label>পদ/পদবী</label>
                                                <select one data-select="import-column"></select>
                                            </div>
                                            <div class="field">
                                                <label>মোবাইল নম্বর</label>
                                                <select one data-select="import-column"></select>
                                            </div>
                                            <div class="field">
                                                <label>ইমেইল</label>
                                                <select one data-select="import-column"></select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="batch-status">
                                    <ul class="batch-status-list">
                                        <li class="success"><span class="title">1. Member: </span><b>Mirza Fakhrul</b> successfully imported</li>
                                        <li class="warning"><span class="title">2. Member: </span><b>Mirza Fakhrul</b> has data conflict <small><span class="highlight">Row 4</span></small></li>
                                        <li class="error"><span class="title">3. Member: </span><b>Mirza Fakhrul</b> already exist <small><span class="highlight">Row 5</span></small></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-data-container" data-tab="api">
                    <div class="tab-data-wrap">
                        <div class="tab-container-heading"><h2></h2></div>
                        <div class="data-content">API Setting Form</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection