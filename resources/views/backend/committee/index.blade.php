@extends('layouts.default')
@section('content')

<div class="content-header">
    <div class="breadcrumb">
        <a class="page current" href="committees.php">Committees</a>
    </div>
    <div class="content-header-right">
        <div class="data-bulk-action">
            <select one id="data-bulk-options"><option value="">Bulk action</option></select>
            <button class="btn" id="data-bulk-action" disabled>Apply</button>
        </div>
        <button class="btn filter"><i class="fa-solid fa-filter"></i> ফিল্টার</button>
        <div class="data-search">
            <input type="search" id="search-committee" placeholder="কমিটি খুঁজুন...">
            <button class="btn main" id="filter-search-btn">খুঁজুন</button>
        </div>
        <div class="data-pagination pagination">
            <a href="#" class="page prev">Prev</a>
            <a href="#" class="page">1</a>
            <span class="page current">2</span>
            <span class="page none">...</span>
            <a href="#" class="page">5</a>
            <a href="#" class="page next">Next</a>
        </div>
        <div class="add-data">
            <a class="btn" href="{{ url('add_new_committee') }}"> <i class="fa-regular fa-plus right"></i> নতুন কমিটি</a>
        </div>
    </div>
    <div class="data-filter buttoned-filter">
        <div class="fields inline">
            <div class="field"><select one id="division"><option value="">বিভাগ</option></select></div>
            <div class="field"><select one id="district"><option value="">জেলা</option><select></div>
            <div class="field"><select one id="upzilla"><option value="">উপজেলা/থানা</option></select></div>
            <div class="field"><select one id="union"><option value="">ইউনিয়ন</option></select></div>
            <div class="field"><select one id="ward"><option value="">ওয়ার্ড</option></select></div>
            <div class="field"><select one id="committee-type"><option value="">কমিটির ধরন</option></select></div>
        </div>
    </div>
</div>
<div class="content-main">
    <div class="data-content">
        <table class="data-table data-list" data-single="committee" data-basecol="2" data-basecol-optional="6">
            <thead>
                <tr>
                    <th><input type="checkbox" id="select-all-data"></th>
                    <th>কমিটির ধরন</th>
                    <th>সদস্য সংখ্যা</th>
                    <th>সভাপতি</th>
                    <th>সহ-সভাপতি</th>
                    <th>লোকেশন</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="checkbox" value="0000" name="select-individual-data"></td>
                    <td>
                        উপজেলা/থানা কাউন্সিল ও উপজেলা/থানা নির্বাহী কমিটি
                        <div class="row-actions">
                            <a class="edit" href="#"><i class="fa-duotone fa-pen"></i> Edit</a>
                            <button name="delete" class="btn alert-filled delete"><i class="fa-duotone fa-trash"></i> Delete</button>
                        </div>
                    </td>
                    <td>১০১</td>
                    <td>ইঞ্জিঃ মমিনুল হক</td>
                    <td>ইঞ্জিঃ মমিনুল হক</td>
                    <td>চট্টগ্রাম > চাঁদপুর > হাজীগঞ্জ</td>
                    <td><button title="Send notification" class="btn" name="notification"></button></td>
                </tr>
                <tr>
                    <td><input type="checkbox" value="0000" name="select-individual-data"></td>
                    <td>
                        উপজেলা/থানা কাউন্সিল ও উপজেলা/থানা নির্বাহী কমিটি
                        <div class="row-actions">
                            <a class="edit" href="#"><i class="fa-duotone fa-pen"></i> Edit</a>
                            <button name="delete" class="btn alert-filled delete"><i class="fa-duotone fa-trash"></i> Delete</button>
                        </div>
                    </td>
                    <td>১০১</td>
                    <td>ইঞ্জিঃ মমিনুল হক</td>
                    <td>ইঞ্জিঃ মমিনুল হক</td>
                    <td>চট্টগ্রাম > চাঁদপুর > হাজীগঞ্জ</td>
                    <td><button title="Send notification" class="btn" name="notification"></button></td>
                </tr>
                <tr>
                    <td><input type="checkbox" value="0000" name="select-individual-data"></td>
                    <td>
                        উপজেলা/থানা কাউন্সিল ও উপজেলা/থানা নির্বাহী কমিটি
                        <div class="row-actions">
                            <a class="edit" href="#"><i class="fa-duotone fa-pen"></i> Edit</a>
                            <button name="delete" class="btn alert-filled delete"><i class="fa-duotone fa-trash"></i> Delete</button>
                        </div>
                    </td>
                    <td>১০১</td>
                    <td>ইঞ্জিঃ মমিনুল হক</td>
                    <td>ইঞ্জিঃ মমিনুল হক</td>
                    <td>চট্টগ্রাম > চাঁদপুর > হাজীগঞ্জ</td>
                    <td><button title="Send notification" class="btn" name="notification"></button></td>
                </tr>
                <tr>
            </tbody>
        </table>
    </div>
</div>

@endsection