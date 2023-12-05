<body class="admin">
  <header>
      <div class="topbar">
          <div class="topbar-wrapper">
              <div class="expand-sidebar">
                  <input type="checkbox" id="expand_sidebar"/>
                  <label for="expand_sidebar"><i class="fa-regular fa-arrow-right-long"></i></label>
              </div>
              <div class="search-box">
                  <input type="search" name="" placeholder="Type in to search..."/>
              </div>
              <ul class="topbar-right">
                  <li class="settings">
                      <a href="settings.php"><i class="fa-regular fa-gear"></i></a>
                  </li>
                  <li class="notification">
                      <input data="true" type="checkbox" id="notification"/>
                      <label for="notification"><i class="fa-regular fa-bell"></i></label>
                      <ul class="notification-panel dropdown caret top">
                          <li class="pending">Your request is being reviewed.</li>
                          <li class="success">Your service has been completed</li>
                      </ul>
                  </li>
                  <li class="user-navigation">
                      <div class="profile-picture">
                          <img src="../assets/images/profile-picture.jpg" alt="F. Last Name"/>
                      </div>
                      <div class="user">
                          <input type="checkbox" id="user"/>
                          <label for="user">{{ Auth::user()->name }}</label>
                          <ul class="user-panel dropdown">
                              <li class="logout">
                                <form method="POST" action="{{ route('logout') }}">
                                    @csrf
                                    <x-dropdown-link :href="route('logout')"
        
                                            onclick="event.preventDefault();
        
                                                        this.closest('form').submit();">
        
                                        {{ __('Log Out') }}
                                    </x-dropdown-link>
                                </form>
                              </li>
                          </ul>
                      </div>
                  </li>
              </ul>
          </div>
      </div>
  </header>
  <div class="container">
      @include('includes.sidebar')
      <main>



 