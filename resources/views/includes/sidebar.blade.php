<aside>
    <div class="aside-wrapper">
        <div class="pointed-corner">
            <a href="#"><img src="{{ asset('') }}assets/images/logo.png" alt="Logo"><!-- <i class="fa-solid fa-street-view"></i><span class="label">Admin Panel</span> --></a>
        </div>
        <ul class="main-menu">
            <li>
                <a href="dashboard.php"><i class="fa-duotone fa-grid-horizontal" style="font-size: 20px;"></i><span class="label">Dashboard</span></a>
            </li>
            <li class="has-submenu submenu-closed">
                <a href="{{ url('/media') }}"><i class="fa-duotone fa-photo-film-music"></i><span class="label">Media Library</span> <span class="submenu-toggle"><i class="fa-solid fa-caret-down"></i></span></a>
                <ul class="submenu">
                    <li><a href="{{ url('/media') }}"><i class="fa-light fa-photo-film-music"></i> Library</a></li>
                    <li><a href="{{ url('/media-add-new') }}"><i class="fa-light fa-plus"></i> Add new</a></li>
                </ul>
            </li>
            <li>
                <a href="{{ url('slider') }}"><i class="fa-duotone fa-layer-group"></i><span class="label">Slides</span></a>
            </li>
            <li class="has-submenu submenu-closed">
                <a href="{{ url('pages') }}"><i class="fa-duotone fa-file"></i><span class="label">Pages</span><span class="submenu-toggle"><i class="fa-solid fa-caret-down"></i></span></a>
                <ul class="submenu">
                    <li><a href="{{ url('pages') }}"><i class="fa-light fa-file"></i> Pages</a></li>
                    <li><a href="{{ url('add_page') }}"><i class="fa-light fa-plus"></i> Add new</a></li>
                </ul>
            </li>
            <li class="has-submenu submenu-closed">
                <a href="{{ url('posts') }}"><i class="fa-duotone fa-file-lines"></i><span class="label">Posts</span><span class="submenu-toggle"><i class="fa-solid fa-caret-down"></i></span></a>
                <ul class="submenu">
                    <li><a href="{{ url('posts') }}"><i class="fa-light fa-file"></i> Posts</a></li>
                    <li><a href="{{ url('add_new_post') }}"><i class="fa-light fa-plus"></i> Add new</a></li>
                    <li><a href="{{ url('post_category') }}"><i class="fa-light fa-sitemap"></i> Categories</a></li>
                </ul>
            </li>
            <li class="has-submenu submenu-closed">
                <a href="{{ url('notices') }}"><i class="fa-duotone fa-clipboard"></i><span class="label">Notices</span><span class="submenu-toggle"><i class="fa-solid fa-caret-down"></i></span></a>
                <ul class="submenu">
                    <li><a href="{{ url('notices') }}"><i class="fa-light fa-clipboard"></i> Notices</a></li>
                    <li><a href="{{ url('add_new_notice') }}"><i class="fa-light fa-plus"></i> Add new</a></li>
                </ul>
            </li>
            <li class="has-submenu submenu-closed">
                <a href="{{ url('events') }}"><i class="fa-duotone fa-calendars"></i><span class="label">Events</span><span class="submenu-toggle"><i class="fa-solid fa-caret-down"></i></span></a>
                <ul class="submenu">
                    <li><a href="{{ url('events') }}"><i class="fa-light fa-users"></i> Events</a></li>
                    <li><a href="{{ url('add_new_event') }}"><i class="fa-light fa-calendar-plus"></i> Add new</a></li>
                </ul>
            </li>
            <li>
                <a href="{{ url('user_access') }}"><i class="fa-duotone fa-user-unlock"></i><span class="label">User Access</span></a>
            </li>
            <li class="has-submenu submenu-closed">
                <a href="{{ url('members') }}"><i class="fa-duotone fa-user-tie"></i><span class="label">Members</span><span class="submenu-toggle"><i class="fa-solid fa-caret-down"></i></span></a>
                <ul class="submenu">
                    <li><a href="{{ url('members') }}"><i class="fa-light fa-user-tie"></i> Members</a></li>
                    <li><a href="{{ url('add_new_member') }}"><i class="fa-light fa-user-plus"></i> Add new</a></li>
                </ul>
            </li>
            <li class="has-submenu submenu-closed">
                <a href="{{ url('committeess') }}"><i class="fa-duotone fa-users-viewfinder"></i><span class="label">Committees</span><span class="submenu-toggle"><i class="fa-solid fa-caret-down"></i></span></a>
                <ul class="submenu">
                    <li><a href="{{ url('committeess') }}"><i class="fa-light fa-users-viewfinder"></i> Committees</a></li>
                    <li><a href="{{ url('add_new_committee') }}"><i class="fa-light fa-plus"></i> Add new</a></li>
                </ul>
            </li>
            <li>
                <a href="{{ url('frequent') }}"><i class="fa-duotone fa-database"></i><span class="label">Frequent Data</span></a>
            </li>
            <li>
                <a href="{{ url('settings') }}"><i class="fa-regular fa-gear"></i><span class="label">Settings & Tools</span></a>
            </li>
        </ul>
    </div>
</aside>

