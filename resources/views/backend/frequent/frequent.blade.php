@extends('layouts.default')
@section('content')


<div class="content-header">
    <div class="breadcrumb">
        <a class="page current" href="frequent-data.php">Frequent Data</a>
    </div>
    <div class="content-header-right">
        <div class="data-bulk-action" aria-name="bulk-action" action-type="button-updater">
            <select one id="data-bulk-options"><option value="">Bulk action</option></select>
            <button class="btn" id="data-bulk-action" disabled>Apply</button>
        </div>
    </div>
</div>
<div class="content-main frequent-data tabbed-page">
    <div class="row" aria-name="tab">
        <div class="col col-left">
            <ul aria-name="tabs" class="vertical-tabs" tab-name="main">
                <li data-tab="user-access-role" class="active"><i class="fa-solid fa-user-unlock"></i> User Access Role</li>
                <li data-tab="member-role"><i class="fa-duotone fa-user-tie"></i> Member Role</li>
                <li data-tab="addresses"><i class="fa-solid fa-location-dot"></i> Addresses</li>
                <li data-tab="committee-types"><i class="fa-duotone fa-users-viewfinder"></i> Committee Types</li>
                <li data-tab="wing-types"><i class="fa-duotone fa-sitemap"></i> Wing Types</li>
            </ul>
        </div>

        <div class="col col-right">
            <div aria-name="tabs-container" tab-name="main">
                <div class="tab-data-container active" data-tab="user-access-role">
                    <div class="tab-data-wrap" aria-name="data-wrapper">
                        <div class="tab-container-heading">
                            <h2><i class="fa-solid fa-user-unlock"></i> User Access Role</h2>
                            <div class="buttons inline">
                                <button class="btn user-access" name="add-dbdata"><i class="fas fa-plus"></i> Add Data</button>
                                <button class="btn primary filled" id="update-user-access"> <i class="fa-solid fa-rotate right"></i> Update</button>
                            </div>
                            <div class="user-access-role-note note alert">
                                Note: <code>Super Admin</code> & <code>Webpage visitor</code> could't be deleted. If any role deleted, the corresponding users role will be converted to <code>Webpage visitor</code>
                            </div>
                        </div>
                        <div class="data-content">
                            <table class="data-table valign-top" id="table">
                                <thead>
                                    <tr>
                                        <th><input type="checkbox" id="select-all-data"></th>
                                        <th>Data</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <div class="fields inline">
                                                <div class="field"><input type="text" placeholder="value" value="sadmin" disabled/></div>
                                                <div class="field"><input type="text" placeholder="Role name" value="Super Admin" disabled/></div>
                                            </div>
                                            <div class="user-access-list">
                                                <span class="user-access-item"><input type="checkbox" checked/> Everything</span>
                                            </div>
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <div class="fields inline">
                                                <div class="field"><input type="text" placeholder="value" value="wpvisitor" disabled/></div>
                                                <div class="field"><input type="text" placeholder="Role name" value="Webpage visitor" disabled/></div>
                                            </div>
                                            <div class="user-access-list">
                                                <span class="user-access-item"><input type="checkbox" checked/> Webpage visitor</span>
                                            </div>
                                        </td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="tab-data-container" data-tab="member-role">
                    <div class="tab-data-wrap" aria-name="data-wrapper">
                        <div class="tab-container-heading">
                            <h2></h2>
                            <div class="buttons inline">
                                <button class="btn" name="add-dbdata"><i class="fas fa-plus"></i> Add Data</button>
                                <button class="btn primary filled" id="update-member-role"> <i class="fa-solid fa-rotate right"></i> Update</button>
                            </div>
                        </div>
                        <div class="data-content">
                            <table class="data-table last-child-action" id="table" aria-name="qdata">
                                <thead>
                                    <tr>
                                        <th><input type="checkbox" id="select-all-data"></th>
                                        <th>Query Value</th>
                                        <th>Data</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td drag><input type="checkbox" value="0000" name="select-individual-data"></td>
                                        <td>
                                            <div class="field"><input type="text" name="query-value" placeholder="query-value" disabled required /></div>
                                        </td>
                                        <td>
                                            <div class="fields inline">
                                                <div class="field"><input type="text" name="data-en" placeholder="English" required/></div>
                                                <div class="field"><input type="text" name="data-bn" placeholder="বাংলা"/></div>
                                            </div>
                                        </td>
                                        <td>
                                            <button class="delete btn only-icon" name="delete"><i class="fa-solid fa-trash"></i></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="tab-data-container" data-tab="addresses">
                    <div class="tab-data-wrap" aria-name="data-wrapper">
                        <div class="tab-container-heading">
                            <h2></h2>
                            <div class="buttons inline">
                                <button class="btn" name="add-dbdata"><i class="fas fa-plus"></i> Add Data</button>
                                <button class="btn primary filled" id="update-addresses"> <i class="fa-solid fa-rotate right"></i> Update</button>
                            </div>
                            <div class="fields inline">
                                <div class="field"><select one id="division"><option value="">বিভাগ</option></select></div>
                                <div class="field"><select one id="district"><option value="">জেলা</option><select></div>
                                <div class="field"><select one id="upzilla"><option value="">উপজেলা/থানা</option></select></div>
                                <div class="field"><select one id="union"><option value="">ইউনিয়ন</option></select></div>
                            </div>
                        </div>
                        <div class="data-content">
                            <table class="data-table last-child-action" id="table" aria-name="qdata">
                                <thead>
                                    <tr>
                                        <th><input type="checkbox" id="select-all-data"></th>
                                        <th>Query Value</th>
                                        <th>Data</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input type="checkbox" name="select-individual-data"></td>
                                        <td>
                                            <div class="field"><input type="text" name="query-value" placeholder="query-value" value="dhaka" disabled required /></div>
                                        </td>
                                        <td>
                                            <div class="fields inline">
                                                <div class="field"><input type="text" name="data-en" placeholder="English" value="Dhaka" required></div>
                                                <div class="field"><input type="text" name="data-bn" placeholder="বাংলা" value="ঢাকা"></div>
                                                <div class="field"><input type="number" name="mobile" placeholder="Mobile"/></div>
                                                <div class="field"><input type="email" name="email" placeholder="@"/></div>
                                            </div>
                                        </td>
                                        <td>
                                            <button class="delete btn only-icon" name="delete"><i class="fa-solid fa-trash"></i></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <button class="btn info fill-hover" name="load-more-data">Load More</button>
                        </div>
                    </div>
                </div>
                <div class="tab-data-container" data-tab="committee-types">
                    <div class="tab-data-wrap" aria-name="data-wrapper">
                        <div class="tab-container-heading">
                            <h2></h2>
                            <div class="buttons inline">
                                <button class="btn" name="add-dbdata"><i class="fas fa-plus"></i> Add Data</button>
                                <button class="btn primary filled" id="update-committee-types"> <i class="fa-solid fa-rotate right"></i> Update</button>
                            </div>
                        </div>
                        <div class="data-content">
                            <table class="data-table last-child-action" id="table" aria-name="qdata">
                                <thead>
                                    <tr>
                                        <th><input type="checkbox" id="select-all-data"></th>
                                        <th>Query Value</th>
                                        <th>Data</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td drag><input type="checkbox" value="0000" name="select-individual-data"></td>
                                        <td>
                                            <div class="field"><input type="text" name="query-value" placeholder="query-value" disabled required /></div>
                                        </td>
                                        <td>
                                            <div class="fields inline">
                                                <div class="field"><input type="text" name="data-en" placeholder="English" required/></div>
                                                <div class="field"><input type="text" name="data-bn" placeholder="বাংলা"/></div>
                                            </div>
                                        </td>
                                        <td>
                                            <button class="delete btn only-icon" name="delete"><i class="fa-solid fa-trash"></i></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="tab-data-container" data-tab="wing-types">
                    <div class="tab-data-wrap" aria-name="data-wrapper">
                        <div class="tab-container-heading">
                            <h2></h2>
                            <div class="buttons inline">
                                <button class="btn" name="add-dbdata"><i class="fas fa-plus"></i> Add Data</button>
                                <button class="btn primary filled" id="update-wing-types"> <i class="fa-solid fa-rotate right"></i> Update</button>
                            </div>
                        </div>
                        <div class="data-content">
                            <table class="data-table last-child-action" id="table" aria-name="qdata">
                                <thead>
                                    <tr>
                                        <th><input type="checkbox" id="select-all-data"></th>
                                        <th>Query Value</th>
                                        <th>Data</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td drag><input type="checkbox" value="0000" name="select-individual-data"></td>
                                        <td>
                                            <div class="field"><input type="text" name="query-value" placeholder="query-value" disabled required /></div>
                                        </td>
                                        <td>
                                            <div class="fields inline">
                                                <div class="field"><input type="text" name="data-en" placeholder="English" required/></div>
                                                <div class="field"><input type="text" name="data-bn" placeholder="বাংলা"/></div>
                                            </div>
                                        </td>
                                        <td>
                                            <button class="delete btn only-icon" name="delete"><i class="fa-solid fa-trash"></i></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script>
    document.querySelectorAll('table.data-table').forEach(table => {
        tableDragger(table, {
            mode: "row",
            onlyBody: true
        });
    });
</script>

@endsection
