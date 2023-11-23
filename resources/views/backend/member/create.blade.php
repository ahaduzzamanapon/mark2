@extends('layouts.default')
@section('content')

<div class="content-header">
    <div class="breadcrumb">
        <a class="page" href="members.php">Members</a>
        <span class="page current">Add new</span>
    </div>
    <div class="content-header-right">
        <div class="add-data">
            <button class="btn primary filled" id="submit-member"> <i class="fa-regular fa-user-plus right"></i> সাবমিট</button>
        </div>
    </div>
</div>
<div class="content-main add-member">
    <div class="row">
        <div class="col col-left">
            <div class="fields">
                <div class="field">
                    <div aria-name="media-selector-referrence">                        
                        <div class="member-picture-wrap media-selector-referrence-wrap">
                            <div class="source-file">
                                <span class="content-placeholder"></span>
                            </div>
                        </div>
                        <input type="hidden" name="media-id" value="">
                        <div class="buttons inline">
                            <button class="btn upload-member-picture" name="media-selector"><i class="fa-duotone fa-upload"></i> Upload picture</button>
                            <button class="btn alert" name="reset-media-selector"><i class="fa-duotone fa-clock-rotate-left"></i> Reset</button>
                        </div>
                    </div>
                </div>
                <div aria-name="tab" class="language-tabs mgt-20">
                    <ul aria-name="tabs" class="horizontal-tabs" tab-name="language">
                        <li data-tab="bn" class="active"><span></span></li>
                        <li data-tab="en"><span></span></li>
                    </ul>
                    <div aria-name="tabs-container" tab-name="language">
                        <div class="tab-data-container active" data-tab="bn">
                            <div class="field">
                                <label for="name-bn">সদস্যের নাম</label>
                                <input type="text" lang="bn" id="name-bn" placeholder="সদস্যের নাম" />
                            </div>
                        </div>
                        <div class="tab-data-container" data-tab="en">
                            <div class="field">
                                <label for="name-en">Member Name</label>
                                <input type="text" lang="en" id="name-en" placeholder="Member Name" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="field">
                    <label for="role">পদবী</label>
                    <select one id="role">
                        <option value="">পদবী</option>
                    </select>
                </div>
                <div class="field">
                    <label for="dob">জন্ম তারিখ</label>
                    <input type="date" id="dob" placeholder="জন্ম তারিখ" />
                </div>
            </div>
        </div>
        <div class="col col-right">
            <section>
                <h3>ঠিকানা</h3>
                <div class="fields inline">
                    <div class="field"><select one id="division"><option value="">বিভাগ</option></select></div>
                    <div class="field"><select one id="district"><option value="">জেলা</option><select></div>
                    <div class="field"><select one id="upzilla"><option value="">উপজেলা/থানা</option></select></div>
                    <div class="field"><select one id="union"><option value="">ইউনিয়ন</option></select></div>
                    <div class="field"><select one id="ward"><option value="">ওয়ার্ড</option></select></div>
                </div>
            </section>
            <section>
                <h3>যোগাযোগের তথ্য</h3>
                <div class="fields inline">
                    <div class="field">
                        <input type="number" id="mobile" placeholder="মোবাইল নম্বর" />
                    </div>
                    <div class="field">
                        <input type="email" id="email" placeholder="ইমেইল" />
                    </div>
                </div>
            </section>
            <section>
                <h3>সামাজিক যোগাযোগ মাধ্যম</h3>
                <div class="fields inline">
                    <div class="field">
                        <input type="text" id="facebook" placeholder="Facebook handle" />
                    </div>
                    <div class="field">
                        <input type="text" id="twitter" placeholder="Twiiter handle" />
                    </div>
                    <div class="field">
                        <input type="text" id="youtube" placeholder="Youtube handle" />
                    </div>
                </div>
            </section>
            <section>
                <div class="language-tabs">
                    <div aria-name="tabs-container" tab-name="language">
                        <div class="tab-data-container active" data-tab="bn">
                            <div class="field">
                                <label for="content-bn">সদস্য সম্পর্কে বিস্তারিত</label>
                                <textarea name="about-member" id="content-bn"></textarea>
                            </div>
                        </div>
                        <div class="tab-data-container" data-tab="en">
                            <div class="field">
                                <label for="content-en">About of member</label>
                                <textarea name="about-member" id="content-en"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</div>

@endsection