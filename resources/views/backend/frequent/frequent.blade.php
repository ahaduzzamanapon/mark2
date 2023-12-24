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
                <li data-tab="member-role"><i class="fa-duotone fa-
                    user-tie"></i> Member Role</li>
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
                                <button class="btn user-access" name="add-dbdata"><i class="fas fa-plus"></i> Add
                                    Data</button>
                                <button class="btn primary filled" id="update-user-access"> <i
                                        class="fa-solid fa-rotate right"></i> Update</button>
                                <script>
                                    document.getElementById("update-user-access").addEventListener("click", function() {
                                        selectMedia();
                                    });
                                </script>
                            </div>
                            <div class="user-access-role-note note alert">
                                Note: <code>Super Admin</code> & <code>Webpage visitor</code> could't be deleted. If any
                                role deleted, the corresponding users role will be converted to <code>Webpage
                                    visitor</code>
                            </div>
                        </div>
                        <form action="{{ route('frequent.update') }}" method="post" id="update-user-access-form">
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
                                        @csrf
                                        @foreach ($roles as $role)
                                            <tr class="user-access_tr">
                                                <td></td>
                                                <td>
                                                    <div class="fields inline">
                                                        <div class="field"><input type="text" name="role[]"
                                                                placeholder="value" value="{{ $role->name }}"
                                                                readonly /></div>
                                                    </div>
                                                    <div class="user-access-list">
                                                        <span class="user-access-item"><input type="checkbox"
                                                                value="Dashboard" name="Dashboard[]"
                                                                {{ $role->permissions->pluck('name')->contains('Dashboard') ? 'checked' : '' }} />
                                                            Dashboard</span>
                                                        <span class="user-access-item"><input type="checkbox"
                                                                value="Media" name="Media[]"
                                                                {{ $role->permissions->pluck('name')->contains('Media') ? 'checked' : '' }} />
                                                            Media</span>
                                                        <span class="user-access-item"><input type="checkbox"
                                                                value="Slides" name="Slides[]"
                                                                {{ $role->permissions->pluck('name')->contains('Slides') ? 'checked' : '' }} />
                                                            Slides</span>
                                                        <span class="user-access-item"><input type="checkbox"
                                                                value="Pages" name="Pages[]"
                                                                {{ $role->permissions->pluck('name')->contains('Pages') ? 'checked' : '' }} />
                                                            Pages</span>
                                                        <span class="user-access-item"><input type="checkbox"
                                                                value="Posts & Categories" name="Posts & Categories[]"
                                                                {{ $role->permissions->pluck('name')->contains('Posts & Categories') ? 'checked' : '' }} />
                                                            Posts & Categories</span>
                                                        <span class="user-access-item"><input type="checkbox"
                                                                value="Notices" name="Notices[]"
                                                                {{ $role->permissions->pluck('name')->contains('Notices') ? 'checked' : '' }} />
                                                            Notices</span>
                                                        <span class="user-access-item"><input type="checkbox"
                                                                value="Events" name="Events[]"
                                                                {{ $role->permissions->pluck('name')->contains('Events') ? 'checked' : '' }} />
                                                            Events</span>
                                                        <span class="user-access-item"><input type="checkbox"
                                                                value="Members" name="Members[]"
                                                                {{ $role->permissions->pluck('name')->contains('Members') ? 'checked' : '' }} />
                                                            Members</span>
                                                        <span class="user-access-item"><input type="checkbox"
                                                                value="Committees" name="Committees[]"
                                                                {{ $role->permissions->pluck('name')->contains('Committees') ? 'checked' : '' }} />
                                                            Committees</span>
                                                        <span class="user-access-item"><input type="checkbox"
                                                                value="Appearances" name="Appearances[]"
                                                                {{ $role->permissions->pluck('name')->contains('Appearances') ? 'checked' : '' }} />
                                                            Appearances</span>
                                                        <span class="user-access-item"><input type="checkbox"
                                                                value="Frequent Data" name="Frequent Data[]"
                                                                {{ $role->permissions->pluck('name')->contains('Frequent Data') ? 'checked' : '' }} />
                                                            Frequent Data</span>
                                                        <span class="user-access-item"><input type="checkbox"
                                                                value="Settings" name="Settings[]"
                                                                {{ $role->permissions->pluck('name')->contains('Settings') ? 'checked' : '' }} />
                                                            Settings</span>
                                                        <span class="user-access-item"><input type="checkbox"
                                                                value="Webpage visitor" name="Webpage visitor[]"
                                                                {{ $role->permissions->pluck('name')->contains('Webpage visitor') ? 'checked' : '' }} />
                                                            Webpage visitor</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    @unless ($role->name == 'Super Admin' || $role->name == 'Webpage visitor')
                                                        <a class="delete btn only-icon" href="{{ url('frequent/delete', $role->id) }}" name="delete"><i
                                                                class="fa-solid fa-trash"></i></a>
                                                    @endunless
                                                </td>
                                            </tr>
                                        @endforeach
                                    </tbody>
                                </table>
                            </div>
                        </form>
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
{{-- address section start --}}
                <div class="tab-data-container" data-tab="addresses">
                    <div class="tab-data-wrap" aria-name="data-wrapper">
                        <div class="tab-container-heading">
                            <h2></h2>
                            <div class="buttons inline">
                                <button class="btn" name="add-dbdata"><i class="fas fa-plus"></i> Add Data </button>
                                <button onclick="handleSubmitAddress()" class="btn primary filled" id="update-addresses"> <i class="fa-solid fa-rotate right"></i> Update</button>
                            </div>
                            <div class="fields inline">
                                <div class="field"><select one id="division"><option value="">বিভাগ</option></select></div>
                                <div class="field"><select one id="district"><option value="">জেলা</option><select></div>
                                <div class="field"><select one id="upzilla"><option value="">উপজেলা/থানা</option></select></div>
                                <div class="field"><select one id="union"><option value="">ইউনিয়ন</option></select></div>
                            </div>
                        </div>
                        <div class="data-content">
                            <form action="{{ route('frequent.store') }}" method="POST" id="address-form">
                                @csrf

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
                                            <div class="field"><input type="text" name="query-value[]" placeholder="query-value" value="dhaka" disabled required /></div>
                                        </td>
                                        <td>
                                            <div class="fields inline">
                                                <div class="field"><input type="text" name="data-en[]" placeholder="English" value="Dhaka" required></div>
                                                <div class="field"><input type="text" name="data-bn[]" placeholder="বাংলা" value="ঢাকা"></div>
                                                <div class="field"><input type="number" name="mobile[]" placeholder="Mobile"/></div>
                                                <div class="field"><input type="email" name="email[]" placeholder="@"/></div>
                                            </div>
                                        </td>
                                        <td>
                                            <button class="delete btn only-icon" name="delete"><i class="fa-solid fa-trash"></i></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            </form>
                            <button class="btn info fill-hover" name="load-more-data">Load More</button>
                        </div>
                    </div>
                </div>
                {{-- address section end --}}
                <div class="tab-data-container" data-tab="committee-types">
                    <div class="tab-data-wrap" aria-name="data-wrapper">
                        <div class="tab-container-heading">
                            <h2></h2>
                            <div class="buttons inline">
                                <button  class="btn" name="add-dbdata"><i class="fas fa-plus"></i> Add Data</button>
                                <button  class="btn primary filled" id="update-committee-types"> <i class="fa-solid fa-rotate right"></i> Update</button>
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

<script>
    let handleSubmitAddress = () =>{
        console.log('asi');
        let addressForm = document.getElementById('address-form');
        addressForm.submit();
    }
</script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>


<script>
function selectMedia() {
    var user_access_tr = document.querySelectorAll('.user-access_tr');
    var serializedData = {};
    
    user_access_tr.forEach(function(tr) {
        var inputValue = tr.querySelector('input').value;
        var checkbox = tr.querySelectorAll('input[type="checkbox"]');
        
        serializedData[inputValue] = [];
        
        checkbox.forEach(function(cb) {
            var checkboxValue = cb.value;
            var isChecked = cb.checked;
            
            serializedData[inputValue].push({
                checkboxValue: checkboxValue,
                isChecked: isChecked
            });
        });
    });

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "{{ route('frequent.update') }}", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
    xhr.onreadystatechange = function () {
            window.location.reload();
    };
    
    var csrfToken = "{{ csrf_token() }}";
    var data = "_token=" + encodeURIComponent(csrfToken) + "&serializedData=" + encodeURIComponent(JSON.stringify(serializedData));
    
    xhr.send(data);
}

</script>
<script>
let handleSubmitAddress = () =>{
    let addressForm = document.getElementById('address-form');
    addressForm.submit();
}
</script>
@endsection
