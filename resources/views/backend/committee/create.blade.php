@extends('layouts.default')
@section('content')

<div class="content-header">
    <div class="breadcrumb">
        <a class="page" href="committees.php">Committees</a>
        <sapn class="page current">Add new</sapn>
    </div>
    <div class="add-data">
        <button class="btn primary filled" id="submit-committee"> <i class="fa-regular fa-users-viewfinder right"></i> সাবমিট</button>
    </div>
</div>
<div class="content-main add-committee">
    <div class="info-primary">
        <div class="locations">
            <h3><i class="fa-solid fa-location-dot"></i>Location</h3>
            <div class="fields inline">
                <div class="field"><select one id="division"><option value="">Division</option></select></div>
                <div class="field"><select one id="district"><option value="">District</option><select></div>
                <div class="field"><select one id="upzilla"><option value="">Upzilla/Thana</option></select></div>
                <div class="field"><select one id="union"><option value="">Union</option></select></div>
                <div class="field"><select one id="ward"><option value="">Ward</option></select></div>
            </div>
        </div>
        <div class="committee-type">
            <label for="committee-category"><i class="fa-solid fa-sitemap"></i> Committee Category</label>
            <div class="fields inline">
                <div class="field committee-category">
                    <select one id="committee-category"></select>
                </div>
                <div class="field">
                    <select one id="committee-type"><option value="">Committee Type</option></select>
                </div>
            </div>
        </div>
    </div>
    <hr>
    <ul class="committee-members">
        <li class="committee-member" id="add-member">
            <i class="fa-regular fa-user-plus"></i>
            <h4>সদস্য যুক্ত করুন</h4>
        </li>
    </ul>
</div>

@endsection