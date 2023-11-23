@extends('layouts.default')
@section('content')

<div class="content-header">
    <div class="breadcrumb">
        <a class="page" href="events.php">Events</a>
        <span class="page current">Add new</span>
    </div>
    <div class="content-header-right">
        <div class="add-data">
            <button class="btn primary filled" id="submit-event"> <i class="fa-regular fa-calendar-plus right"></i> সাবমিট</button>
        </div>
    </div>
</div>
<div class="content-main add-event">
        <div class="row">
            <div class="col col-left">
                <div aria-name="tab" class="language-tabs">
                    <ul aria-name="tabs" class="horizontal-tabs" tab-name="language">
                        <li data-tab="bn" class="active"><span></span></li>
                        <li data-tab="en"><span></span></li>
                    </ul>
                    <div aria-name="tabs-container" tab-name="language">
                        <div class="tab-data-container active" data-tab="bn">
                            <div class="field">
                                <label for="event-title">ইভেন্টের নাম</label>
                                <input type="text" lang="bn" id="event-title-বn" placeholder="বাংলা" />
                            </div>
                        </div>
                        <div class="tab-data-container" data-tab="en">
                            <div class="field">
                                <label for="event-title">Event name</label>
                                <input type="text" lang="bn" id="event-title-en" placeholder="English" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="field">
                    <label for="event-date">Date</label>
                    <input type="date" id="event-date" placeholder="Date" />
                </div>
                <div class="fields inline mgt-20">
                    <div class="field">
                        <label for="event-start-time">Starting Time</label>
                        <input type="text" id="event-start-time" placeholder="Starting Time" readonly />
                    </div>
                    <div class="field">
                        <label for="event-end-time">Ending Time</label>
                        <input type="text" id="event-end-time" placeholder="Ending Time" readonly />
                    </div>
                </div>
                <div class="fields mgt-20">
                    <div class="field">
                        <label for="event-leader">Event Leader</label>
                        <select one id="event-leader"><option value="">Event Leader</option></select>
                    </div>
                </div>
            </div>
        
            <div class="col col-right">
                <section>
                    <div aria-name="media-selector-referrence">                        
                        <div class="event-cover-wrap media-selector-referrence-wrap">
                            <div class="source-file">
                                <span class="content-placeholder"></span>
                            </div>
                        </div>
                        <input type="hidden" name="media-id" value="">
                        <div class="buttons inline">
                            <button class="btn upload-member-picture" name="media-selector" allowed-files="jpg jpeg png"><i class="fa-duotone fa-upload"></i> Upload event cover</button>
                            <button class="btn alert" name="reset-media-selector"><i class="fa-duotone fa-clock-rotate-left"></i> Reset</button>
                        </div>
                    </div>
                </section>
                <section>
                    <h3>Address</h3>
                    <div class="fields inline">
                        <div class="field"><select one id="division" place-i18n="address.title.division"><option value="">Divison</option></select></div>
                        <div class="field"><select one id="district" place-i18n="address.title.district"><option value="">District</option><select></div>
                        <div class="field"><select one id="upzilla" place-i18n="address.title.upzilla"><option value="">Upzilla/Thana</option></select></div>
                        <div class="field"><select one id="union" place-i18n="address.title.union"><option value="">Union</option></select></div>
                        <div class="field"><select one id="ward" place-i18n="address.title.ward"><option value="">Ward</option></select></div>
                    </div>

                    <div class="language-tabs">
                        <div aria-name="tabs-container" tab-name="language">
                            <div class="tab-data-container active" data-tab="bn">
                                <div class="field mgt-20">
                                    <label for="place-bn">স্থান</label>
                                    <input type="text" id="place-bn" placeholder="স্থান" />
                                </div>
                            </div>
                            <div class="tab-data-container" data-tab="en">
                                <div class="field mgt-20">
                                    <label for="place-en">Place</label>
                                    <input type="text" id="place-en" placeholder="Place" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="language-tabs">
                        <div aria-name="tabs-container" tab-name="language">
                            <div class="tab-data-container active" data-tab="bn">
                                <div class="field">
                                    <label for="content-bn">বিস্তারিত</label>
                                    <textarea name="event-details-bn" id="content-bn" placeholder="ইভেন্ট ডিটেইলস"></textarea>
                                </div>
                            </div>
                            <div class="tab-data-container" data-tab="en">
                                <div class="field">
                                    <label for="content-en">Details</label>
                                    <textarea name="event-details-en" id="content-en" placeholder="Event Details"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
</div>


@endsection