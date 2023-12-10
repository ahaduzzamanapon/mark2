/* 
 * App: BNP
 * Author: LX 
 * Date: 24-07-2023
 */

// Global
(async () => {
await i18next.init(await window?.init_i18next());
const locale = {
    lang: i18next.language,
    content: 'bn',
};
const LANG = 'en';
const CLANG = 'bn'; // Content Language
const locale_icon = '<i class="fa-light fa-language"></i>';
const missing_locale_icon = '<i class="fa-light fa-language missing-locale"></i>';
const default_profile_picture = SITE_URL+'/assets/images/profile-picture.jpg';
const image_placeholder = SITE_URL+'/assets/images/placeholder.png';
const loading_icon = '<i class="fas fa-cog fa-spin"></i>';
const success_icon = '<i class="fas fa-check-circle"></i>';
const error_icon = '<i class="fa-solid fa-xmark"></i>';
const info_icon = '<i class="fa-solid fa-circle-info"></i>';
const choices = [];

const parser = new DOMParser();
const XHR = new XMLHttpRequest();

// Content Language
function init_Content_Language(language_tabs_container) {
    const language_tab  = language_tabs_container?.closest('[aria-name="tab"]');
    const language_tabs = language_tab?.querySelectorAll('[aria-name="tabs"][tab-name="language"] li[data-tab]');
    language_tabs?.forEach(tab => {
        if(tab?.getAttribute('data-tab') === locale?.content){
            tab?.classList?.add('active');
        } else {
            tab?.classList?.remove('active');
        }
    });
    language_tabs_container?.querySelectorAll('[data-tab]')?.forEach(tab => {
        if(tab?.getAttribute('data-tab') === locale?.content){
            tab?.classList?.add('active');
        } else {
            tab?.classList?.remove('active');
        }
    });
}
const language_tabs_containers = document.querySelectorAll('[tab-name="language"][aria-name="tabs-container"]');
language_tabs_containers.forEach(language_tabs_container => {
    init_Content_Language(language_tabs_container);
});



let dispatch_keyup_event = document.createEvent('KeyboardEvent');
const initMethod = typeof dispatch_keyup_event.initKeyboardEvent !== 'undefined' ? 'initKeyboardEvent' : 'initKeyEvent';
dispatch_keyup_event[initMethod]('keyup', true);

function debounce(fn, delay){
    let timer;
    return () => {
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => { fn(); }, delay);
    }
}

function LoadHTML(query = null) {
    return new Promise((resolve) => {
        fetch('../html/blocks.html').then(response=> response.text()).then((html) => {
            const dom = parser.parseFromString(html, "text/html");
            resolve(query ? dom.querySelector(query) : dom);
        });
    });
}
async function wrap_popup(payload){
    let html = await LoadHTML('[aria-name="popup"]');
    if(html){
        const popup_content = html.querySelector('.popup-content');
        if(popup_content){
            popup_content.appendChild(payload);
            return html;
        }
    }
    return null;
}
async function insertPopup(payload, backgroundCss){
    const popup = await wrap_popup(payload);
    document.body.appendChild(popup);
    Blank_Screen(true, backgroundCss);

    if(popup){
        const popup_wrap = popup.querySelector('.admin-popup-wrap');
        if(popup_wrap){
            setTimeout(() => {
                popup_wrap.classList.remove('invisible');
            }, 300);
        }
    }
}
function isURL(s) {
   var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
   return regexp.test(s);
}
function isImage(img){
    img = img?.trim();
    if(img?.length > 0 && isURL(img)){
        return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(img);
    } else {
        return (
            img === 'jpg'  || img === 'image/jpg'  || 
            img === 'jpeg' || img === 'image/jpeg' || 
            img === 'png'  || img === 'image/png'  ||
            img === 'webp' || img === 'image/webp' ||
            img === 'avif' || img === 'image/avif' ||
            img === 'gif'  || img === 'image/gif'  ||
            img === 'svg'  || img === 'image/svg'
        );
    }
}
function isAllowedFile(file, allowed = []){
    if(allowed.length === 0){
        return (isImage(file)   || file === 'pdf'  || file === 'xls'  || file === 'xlxs' ||file === 'doc'  || file === 'docs');
    } else if(allowed.length === 1 && allowed.indexOf('images') >= 0){
        return isImage(file);
    } else {
        return (allowed.indexOf(file) >= 0 && isAllowedFile(file));
    }
}
function urlFileExtension(url){
    return url?.split(".")?.at(-1);
}
function isInteger(number){return /^\d+$/.test(number)}; 



let date = new Date();
function format_date(format, lang){
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    switch (format) {
        case 'DD-MM-YYYY':
            return `${day}-${month}-${year}`;
        case 'MM-DD-YYYY':
            return `${month}-${day}-${year}`;
        case 'YYYY-MM-DD':
            return `${year}-${month}-${day}`;
        case 'YYYY-DD-MM':
            return `${year}-${day}-${month}`;
        case 'DD/MM/YYYY':
            return `${day}/${month}/${year}`;
        case 'YYYY/MM/DD':
            return `${year}/${month}/${day}`;
        case 'MM/DD/YYYY':
            return `${month}/${day}/${year}`;
        case 'YYYY/DD/MM':
            return `${year}/${day}/${month}`;
        case 'Month DD, YYYY':
            return `${monthNames[date.getMonth()]} ${day}, ${year}`;
        case 'Month DD YYYY':
            return `${monthNames[date.getMonth()]} ${day} ${year}`;
        case 'DD Month, YYYY':
            return `${day} ${monthNames[date.getMonth()]}, ${year}`;
        case 'DD Month YYYY':
            return `${day} ${monthNames[date.getMonth()]} ${year}`;
        case 'DDMMYYYY':
            return `${day}${month}${year}`;
        case 'MMDDYYYY':
            return `${month}${day}${year}`;
        default:
            return false;
    }
}
function format_time(format) {
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'pm' : 'am';
    const formattedHours12 = (hours % 12 || 12).toString();
    const formattedHours24 = hours.toString().padStart(2, '0');

    const lastChar = format.charAt(format.length - 1);
    let formattedHours = formattedHours24;

    if (lastChar === 'a') {
        formattedHours = formattedHours12;
    } else if (lastChar === 'A') {
        formattedHours = formattedHours12;
    }

    switch (format) {
        case 'h:m:s':
            return `${formattedHours}:${minutes}:${seconds}`;
        case 'h-m-s':
            return `${formattedHours}-${minutes}-${seconds}`;
        case 'h:m':
            return `${formattedHours}:${minutes}`;
        case 'h-m':
            return `${formattedHours}-${minutes}`;
        case 'h:m a':
            return `${formattedHours}:${minutes} ${ampm}`;
        case 'h:m:s a':
            return `${formattedHours}:${minutes}:${seconds} ${ampm}`;
        case 'h:m A':
            return `${formattedHours}:${minutes} ${ampm.toUpperCase()}`;
        case 'h:m:s A':
            return `${formattedHours}:${minutes}:${seconds} ${ampm.toUpperCase()}`;
        case 'hms':
            return `${formattedHours}${minutes}${seconds}`;
        default:
            return false;
    }
}


const Blank_Screen = (action, classes = null) => {
    const tempScreen = 'content-blank';
    if (action === true) {
        const blurScreen = document.createElement('div');
        blurScreen.classList.add(tempScreen);
        if(classes){
            classes.forEach((css) => {
                blurScreen.classList.add(css);
            });
        }
        document.body.append(blurScreen);
    } else if (action === false) {
        const blurScreen = document.querySelector('.'+tempScreen);
        if(blurScreen) {
            if(blurScreen.classList.contains('popup')){
                setTimeout(() => {
                    blurScreen.remove();
                }, 200);
            } else {
                blurScreen.remove();
            }
        }
    }
};

const PreLoader = (action, selector = 'body', obj = {}) => {
    return new Promise((resolve) => {
        const css = 'pre-loader';

        if (action === true) {
            const preLoader = document.createElement('div');
            preLoader.classList.add('pre-loader');

            const wrap = document.createElement('div');
            wrap.classList.add('pre-loader-wrap');

            const loader = document.createElement('img');
            loader.src = `${SITE_URL}/assets/images/loading.gif`;
            loader.alt = 'Loading...';

            wrap.appendChild(loader);
            preLoader.appendChild(wrap);

            const target = (typeof selector === 'object') ? selector : document.querySelector(selector);
            if (document.body && selector === 'body') {
                document.body.appendChild(preLoader);
                resolve(true);
            } else if (target) {
                target.appendChild(preLoader);
                resolve(true);
            } else {
                resolve(false);
            }

            if(typeof obj.instantRemove !== 'undefined'){
                if(typeof obj.instantRemove.action !== 'undefined' && obj.instantRemove.action === true && obj.instantRemove.timeout !== 'undefined'){
                    setTimeout(() => {
                        preLoader.remove();
                    }, obj.instantRemove.timeout);
                }
            }
        } else if (action === false) {
            let preLoader;
            if (typeof selector === 'string' && selector.length > 0) {
                if (selector === '*') {
                    preLoader = document.querySelectorAll(`.${css}`);
                } else if (selector.length > 1 && selector[selector.length - 1] === '*') {
                    preLoader = document.querySelectorAll(`${selector.split('*')[0]} .${css}`);
                } else if (!selector.includes('*')) {
                    preLoader = document.querySelector(`${selector} .${css}`);
                } else {
                    preLoader = document.querySelector(`.${css}`);
                }
            } else {
                preLoader = document.querySelector(`.${css}`);
            }

            if (preLoader) {
                if (typeof preLoader.length === 'undefined') {
                    preLoader.remove();
                    resolve(true);
                } else if (preLoader.length > 0) {
                    preLoader.forEach((loader, i) => {
                        loader.remove();
                        if (preLoader.length - 1 === i) resolve(true);
                    });
                } else {
                    resolve(false);
                }
            } else {
                resolve(false);
            }
        } else {
            resolve(false);
        }
    });
}


document.addEventListener('DOMContentLoaded', (event) => {
    responsiveTable();
});


// Responsive
function responsive(){ 
    let device = {
        mobile: 767,
        tab: 991
    }
    device.isMobile = (window.screen.width <= device.mobile || window.innerWidth <= device.mobile) ? true : false;
    device.isTab = (window.screen.width <= device.tab || window.innerWidth <= device.tab) ? true : false;
    device.isDesktop = (window.screen.width > device.tab || window.innerWidth <= device.tab) ? true : false;
    return device;
}


// Blank screen
const tempScreen = 'content-blank';
const blurScreen = document.createElement('div');
blurScreen.classList.add(tempScreen);

window.addEventListener('resize', (event) => {
    const device = responsive();
    const expandSidebar = document.getElementById('expand_sidebar');

    const blurScreenBody = document.querySelector(`.${tempScreen}.clickable`);
    if(device.isTab && expandSidebar.checked === true){
        Blank_Screen(true, ['clickable'])
    }else if(blurScreenBody && !blurScreenBody.classList.contains('popup')){
        Blank_Screen(false);
    }
    responsiveTable(event);
});




// Nav Menu
const submenu_toggles = document.querySelectorAll('li .submenu-toggle');
submenu_toggles.forEach((toggle, i) => {
    if(toggle){
        toggle.addEventListener('click', (event) => {
            event.preventDefault();
            const menu = toggle.closest('li.has-submenu');
            const menu_classes = menu.classList;
            if(menu_classes.contains('submenu-closed')){
                menu_classes.remove('submenu-closed');
                menu_classes.add('submenu-opened');
            } else if(menu_classes.contains('submenu-opened')){
                menu_classes.remove('submenu-opened');
                menu_classes.add('submenu-closed');
            }
        });
    }
});
function hide_submenu(event){
    const expanded = document.querySelector('.admin[data-expand="true"]');    
    const expand_fold = (event.type == 'click' && (event.target == document.querySelector('label[for="expand_sidebar"]') || event.target == document.getElementById('expand_sidebar')));
    const exclude_menu = event.target.closest('li.has-submenu');
    const opened_menus = document.querySelectorAll('.submenu-opened');
    opened_menus.forEach((menu) => {
        if(
            (event.type == 'click'     && menu != exclude_menu && !expand_fold && (event.target.classList.contains('submenu-toggle') || !expanded) )     ||
            (event.type == 'mouseover' && menu != exclude_menu && !expanded)
        ){
            menu.classList.remove('submenu-opened');
            menu.classList.add('submenu-closed');
        }
    });
}
document.querySelectorAll('.admin:not([data-expand="true"]) li.has-submenu').forEach((submenu) => {
    submenu.addEventListener('mouseover', (event) => {
        hide_submenu(event);
    });
});




// Modal
function modal(action, obj = {}){
    if(action === true){
        const context = (typeof obj.context !== 'undefined' && obj.context.length > 0) ? ` data-context="${obj.context}"` : '';
        const css = (typeof obj.css !== 'undefined' && obj.css.length > 0) ? ` class="${obj.css}"` : '';

        let html = '<div class="modal"'+ context +'>';
            html += '<div class="modal-wrapper"'+ css +'>';
            html += '   <div class="pre-loader">';
            html += '       <div class="pre-loader-wrapper">';
            html += `          <img src="${SITE_URL}/assets/images/loading.gif" alt="Loading...">`;
            html += '       </div>';
            html += '   </div>';
            html += '   <button type="button" name="close-modal"></button>';
            
            if (typeof obj.heading !== 'undefined' && obj.heading.length > 0) {
                html += `<h3>${obj.heading}</h3>`;
            }
            if (typeof obj.content !== 'undefined' && obj.content) {
                html += `<div class="modal-content" id="modal-content"></div>`;
            }
            html += '</div>';
            html += '</div>';
        
        const Modal = new DOMParser().parseFromString(html, 'text/html').querySelector('.modal');
        if (Modal.querySelector('.modal-content')) {
            if(typeof obj.HTML !== 'undefined' && obj.HTML === true){
                Modal.querySelector('.modal-content').insertAdjacentHTML('beforeend', obj.content);
            } else {
                Modal.querySelector('.modal-content').append(obj.content);
            }
        }

        document.body.classList.add('no-scroll');
        blurScreen.classList.add('modalBG');
        document.body.appendChild(blurScreen);
        document.body.appendChild(Modal);

        const ModalWrapper = Modal.querySelector('.modal-wrapper');
        setTimeout(() => {
            ModalWrapper.style.transform = 'scale(1)'
            ModalWrapper.style.visibility = 'visible';
            ModalWrapper.style.opacity = 1;

            const preLoader = Modal.querySelector('.pre-loader');
            if(preLoader){
                setTimeout(() => {
                    preLoader.remove();
                }, (typeof obj.preLoaderStartTimeout !== 'undefined' && typeof obj.preLoaderStartTimeout === 'number') ? obj.preLoaderStartTimeout : 500);
            }
        }, 50);

        return Modal;
    } else if(action === false) {
        const modalBG = document.querySelector(`.${tempScreen}.modalBG`);
        let Modal = document.querySelector('.modal .modal-wrapper');

        Modal.style.transform = 'scale(0)';
        Modal.style.visibility = 'hidden';
        Modal.style.opacity = 0;
        setTimeout(() => {
            Modal = document.querySelector('.modal');
            modalBG.remove();
            Modal.remove();
            document.body.classList.remove('no-scroll');
            
            return document.querySelector('.modal');
        }, 200);
    }
}




// DOM Click Event / (From HTML elements which is loaded externally) 
document.addEventListener('click', (event) => {
    const device = responsive();
    if(device.isTab){
        if (event.target.classList.contains('clickable')) {
            document.querySelector('.' + tempScreen).remove();
            const expandSidebar = document.getElementById('expand_sidebar');
            if (expandSidebar) {
                expandSidebar.checked = false;
            }
            document.body.removeAttribute('data-expand');
        }
    }

    if(event.target.name == 'close-modal'){
        modal(false);
    }
    
    
    // Hide submenu
    const submenu = document.querySelector('.admin ul.submenu');
    if(submenu && !submenu.contains(event.target)){
        hide_submenu(event);
    } 

    // Hide/Remove Popups
    if(event.target.name == 'close-popup' || (event.target.classList.contains('content-blank') && event.target.classList.contains('clickable'))){
        Blank_Screen(false);
        document.querySelectorAll('[aria-name="popup"]').forEach((popup) => {
            const popup_wrap =  popup.querySelector('.admin-popup-wrap');
            if(popup_wrap) popup_wrap.classList.add('invisible');
            setTimeout(() => {
                popup.remove();
            }, 300);
        });
        document.querySelectorAll('[aria-name="media-selector-referrence"][media-referrence]').forEach((referrence) => {
            referrence.removeAttribute('media-referrence');
        });
    }
});


// Expand Sidebar
const expandSidebar = document.getElementById('expand_sidebar');
if (expandSidebar) {
    expandSidebar.addEventListener('change', (event) => {
        const device = responsive();
        if(event.target.checked){
            document.body.setAttribute('data-expand', true);
            if (device.isTab) {
                blurScreen.classList.add('clickable');
                document.body.append(blurScreen);
            }
        } else {
            document.body.removeAttribute('data-expand');
            const blurScreen = document.getElementsByClassName(tempScreen);
            if(blurScreen.length > 0){
                blurScreen.remove();
            }
        }
        responsiveTable(event);
    });
}


// Change Password
const confirmPassword = document.querySelectorAll('.field.confirm_passowrd')[0];
const changePassword = document.getElementById('change_password');
if (changePassword) {
    changePassword.addEventListener('change', (event) => {
        if(event.target.checked){
            confirmPassword.style.cssText = "display: flex; opacity: 1; visibility: visible;";
        } else {
            confirmPassword.removeAttribute('style');
        }
    });
}



// User
document.addEventListener('click', (event) => {
    const addUser = document.getElementById('add-user');
    const submitUser = document.getElementById('submit-user');
    
    // Add user button
    if(event?.target === addUser){
        const className = 'show-add-user-form';
        const add_user_form = document.querySelector('.content-main > .add-user');
        if(add_user_form){
            if(add_user_form.classList.contains(className)){
                add_user_form.classList.remove(className);
                addUser.classList.remove('active');
            } else {
                addUser.classList.add('active');
                add_user_form.classList.add(className);
            }
        }
    }



    // Submit user
    else if(event?.target === submitUser){
        event.preventDefault();
    }
});
// Edit User



// Action - view, delete and expand user 
const dataTable = document.querySelector('table.data-table tbody');
if (dataTable) {
    dataTable.addEventListener('click', (event) => {
        const className = 'view-data-card';
        const filled = 'filled';
        const SiblingViewStat = event.target.name === 'delete' && (typeof event.target.parentNode.children[0] !== 'undefined') ? event.target.parentNode.children[0].classList.contains(filled) : false;
        const SiblingDeleteStat = event.target.name === 'view' && (typeof event.target.parentNode.children[1] !== 'undefined') ? event.target.parentNode.children[1].classList.contains(filled) : false;

        const dataTR = event.target.closest('tr');
        const viewTR = dataTR.tagName === 'TR' && (typeof dataTR.dataset.action !== 'undefined' && dataTR.dataset.action === 'view');

        if( viewTR || (event.target.tagName === 'BUTTON' && (event.target.name === 'view' || event.target.name === 'delete' || event.target.name === 'expand'))){
            const selectedViewButton = document.querySelector('table.data-table tbody button[name=view].'+filled);
            const selectedDeleteButtonSelector = `table.data-table tbody button[name=delete].${filled}`;
            let selectedDeleteButton = document.querySelector(selectedDeleteButtonSelector);

            if(viewTR || event.target.name === 'view') {
                if(!event.target.closest('table').classList.contains('user-list')){ // no-scroll
                    document.body.classList.add('no-scroll');
                    if(event.target.closest('table').classList.contains('data-list')){
                        document.querySelector('.sd-log input#sd-log').checked = false;
                    }
                }

                if(selectedDeleteButton && SiblingDeleteStat) selectedDeleteButton.classList.remove(filled);

                if (selectedViewButton === event.target && document.body.classList.contains(className)) {
                    document.body.classList.remove(className);
                    event.target.classList.remove(filled);
                } else {
                    document.body.classList.remove(className);
                    event.target.classList.remove(filled);
                    
                    if(selectedViewButton) selectedViewButton.classList.remove(filled);
                    if(!viewTR) event.target.classList.add(filled);
                    document.body.classList.add(className);

                    // Temp preloader
                    const preLoader = document.querySelector('.data-card .pre-loader');
                    if(preLoader){
                        preLoader.removeAttribute('style');
                        setTimeout(() => {
                            preLoader.style.opacity = 0;
                            preLoader.style.visibility = 'hidden';
                        }, 500);
                    }
                }
            } else if(event.target.name === 'expand' && event.target.closest('table').classList.contains('responsive-table')){
                const expanded = 'expanded';
                if(event.target.closest('tr').classList.contains(expanded)){
                    event.target.closest('tr').classList.remove(expanded);

                    // Make default button for view & delete
                    if(selectedViewButton && selectedViewButton === event.target.closest('tr').querySelector(`button[name=view].${filled}`)) {
                        document.body.classList.remove(className)
                        selectedViewButton.classList.remove(filled);
                    }

                    if(selectedDeleteButton && selectedDeleteButton === event.target.closest('tr').querySelector(`button[name=delete].${filled}`)){
                        selectedDeleteButton.classList.remove(filled);
                    }
                } else {
                    event.target.closest('tr').classList.add(expanded);
                }
            }
            
            if(selectedViewButton && SiblingViewStat){
                document.body.classList.remove(className);
                selectedViewButton.classList.remove(filled);
            }

            responsiveTable(event);
        }
    });
}



// Close data card
const dataCardcloseBtn = document.querySelector('button[name="hide-data-card"]');
if (dataCardcloseBtn) {
    dataCardcloseBtn.addEventListener('click', (event) => {
        document.body.classList.remove('view-data-card');
        const buttons = document.querySelectorAll('table.data-table button[name=view]');
        buttons.forEach((button, i) => {
            button.classList.remove('filled');
        });
        document.body.classList.remove('no-scroll');
        responsiveTable(event);
    });
}


// Resposive Table
function responsiveTable(event = null){
    setTimeout(() => {
        // Add user form
        const addUserForm = document.querySelector('.users .add-user .fields');
        if (addUserForm) {
            if (addUserForm.offsetWidth <= 680) {
                addUserForm.closest('form')?.classList.add('gtc-3');
            } else {
                addUserForm.closest('form')?.classList.remove('gtc-3');
            }
        }


        const rt = 'responsive-table';
        // User list
        const userList = document.querySelector('.users table.user-list');
        if (userList) {
            if(userList.offsetWidth <= 580){
                userList.mobileView = true;
                // PreLoader(true, '.data-content-card > .data-content', {instantRemove: {action: true, timeout: 500}})
                userList.classList.add(rt);
            } else {
                userList.mobileView = false;
                userList.classList.remove(rt);
            }
        }

        // Submission list
        // ...

        // Common action for mobile view
        if((userList && userList.mobileView === true)){
            document.body.classList.add(rt);

            const selectedViewButton = document.querySelector('table.data-table tbody button[name=view].filled');
            const selectedDeleteButton = document.querySelector('table.data-table tbody button[name=delete].filled');

            if(selectedViewButton) {
                selectedViewButton.closest('tr').classList.add('expanded');
            } else if (selectedDeleteButton) {
                selectedDeleteButton.closest('tr').classList.add('expanded');
            }
        } else if ((userList && userList.mobileView === false)) {
            document.body.classList.remove(rt);
            
            const trs = document.querySelectorAll('.users table.user-list tr');
            trs.forEach((tr, i) => {
                tr.classList.remove('expanded');
            });
        }
    }, 200);
}

// Responsive Table Cell Title
document.querySelectorAll('table.data-table').forEach((table) => {
    table.querySelectorAll('tbody tr').forEach((tr) => {
       Object.values(tr.children).forEach((td, i) => {
           const title = table.querySelector('thead th:nth-child('+(i+1)+')').innerText;
           td.setAttribute('data-title', title);
       });
    });
});


// Delete data from the table
function deletingRow(tr, className = '', SLCheck = false){
    tr.classList.add(className);
    setTimeout(() => { tr.remove(); }, 500);
    if(SLCheck === true){
        const table = tr?.closest('table.data-table');
        const th_sl = table?.querySelectorAll('thead tr th[data-col="sl"]');
        if(th_sl){
            let child = 0;
            table.querySelectorAll('thead tr:first-child th')?.forEach((th, i) => {
                if(th === th_sl) child = i+1;
            });
            const trs = Array.from(table?.querySelectorAll('tbody tr'));
            if(trs.length > 0){
                trs.map((tr, i) => {
                    const td_sl = tr.querySelector('th:nth-child('+child+')');
                    if(td_sl) td_sl.innerHTML = i+1;
                });
            }
        }
    }
}
document.addEventListener('click', (event) => {
    if(event.target.tagName == 'BUTTON' && event.target.name === 'delete'){
        const deleting = 'deleting';
        if(event.target.classList.contains(deleting)){
            // event.target.classList.remove(deleting);
        } else {
            event.target.classList.add(deleting);
            selectedDeleteButton = event.target;

            let notification = {};
            notification.closeWith = ['click', 'button'];
            notification.action = false;
            notification.progress = true;
            notification.stay = 10000;
            notification.button = true;
            
            const table = event.target.closest('table.data-table');
            const tr = event.target.closest('tr');
            if(table && tr) {
                const data_single = table.getAttribute('data-single');
                const data_basecol = table.getAttribute('data-basecol');
                let data_basecol_optional = table.getAttribute('data-basecol-optional');
                if(tr && data_single && data_basecol){
                    let data_name_col = tr.querySelector('td:nth-child('+data_basecol+')');
                    data_name_col = data_name_col ? data_name_col : tr.querySelector('th:nth-child('+data_basecol+')');
                    let item = 0;
                    if(!(data_name_col?.firstChild)){
                        table.querySelectorAll('tbody tr')?.forEach((el, i) => {
                            if(el == tr){
                                return item = i+1;
                            }
                        });
                    }
                    if(data_name_col?.firstChild || item > 0){
                        if(data_single == 'user' && data_name_col.querySelector('a')?.getAttribute('href')?.includes('/profile') ){ // If current user
                            notification.action = true;
                            notification.stay = 3000;
                            notification.progress = false;
                            notification.button = false;
        
                            notification.options = {
                                title: 'Sorry!',
                                description: 'You can\'t delete yourself account.'
                            }
                        } else {
                            const data_single_title = data_single.charAt(0).toUpperCase() + data_single.slice(1);
                            data_basecol_optional = data_basecol_optional ? tr.querySelector('td:nth-child('+data_basecol_optional+')')?.firstChild.data : null;
                            let html = '<div class="field inline"><label>Assign user activity to: </label><select one name="assign-user"><option value="">Select user</option></select></div>';
                            notification.action = true; 
                            notification.stay = false;
                            notification.closeWith = 'button',
                            notification.options = {
                                title: 'Deleting ' + data_single_title,
                                description: `Are you sure to delete the ${data_single}: <strong>${data_name_col?.firstChild ? data_name_col.firstChild.data : item}</strong> ${data_basecol_optional ? '('+data_basecol_optional+')' : ''} <br> ${html}`
                            }
                            
                        }
                    }
                } else {
                    deletingRow(tr, deleting);
                }
            }
            
            // Notification
            if (typeof notification.action !== 'undefined' && notification.action === true && typeof notification.stay !== 'undefined' && typeof notification.options !== 'undefined') {
                notification.triggered = GrowlNotification.notify({
                    type: 'default',
                    showProgress: notification.progress,
                    closeTimeout: notification.stay,
                    closeWith: notification?.closeWith ? notification?.closeWith : [],
                    title: notification.options.title,
                    description: notification.options.description,
                    position: 'top-right',
                    showButtons: notification.button,
                    buttons: {
                        action: {
                            text: 'Yes',
                            callback: () => {
                                deletingRow(tr, deleting);
                            }
                        },
                        cancel: {
                            callback: () => {
                                event.target.classList.remove(deleting);
                            }
                        }
                    }
                });   

                notification.triggered.notification.nodes[0].addEventListener('click', (event) => {
                    if (!event.target.classList.contains('growl-notification__button')) {
                        selectedDeleteButton.classList.remove(deleting);
                    }
                });


                // Delete & Assign user
                const assign_user = Choice(notification?.triggered?.notification?.nodes[0].querySelector('select[name="assign-user"]'), [
                    {value: 'naiem', label: "Naiem"}
                ], {search: true, i18next: i18next});
            }

            setTimeout(() => {
                event.target.classList.remove(deleting);
            }, notification.stay);
        }
        // if(selectedDeleteButton) selectedDeleteButton.classList.remove(deleting);
    }
    
});




// Add data
const addData = document.querySelector('.admin #add-data');
if (addData) {
    addData.addEventListener('click', function() {
        XHR.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200) {
                const DOM = new DOMParser().parseFromString(xhr.responseText, 'text/html');
                const form = DOM.querySelector('form.doc-form');
                if (form) {
                    const signature = form.querySelector('.field.signature');
                    if (signature) signature.remove();
                    const tos = form.querySelector('.field.tos');
                    if (tos) tos.remove();
                    const submit = form.querySelector('.field button[type=submit]');
                    if (submit){
                        submit.classList.remove('link');
                        submit.classList.add('main');
                    }

                    form.action = 'submissions.php';
                    const Modal = modal(true, {heading: 'Add Data', content: form});
                }
            }
        }
        XHR.open('GET', `${SITE_URL}/page/form.php`, true);
        XHR.send();
    });
}










// START - Choices
// Update Choice Placeholder
function updateChoiceData(items, obj = {}, group = false){
    if(typeof items === 'object' && items?.length > 0){
        items?.forEach(item => {
            if(item?.placeholder === true && obj?.placeholder?.trim()?.length > 0){
                if(item?.value?.trim().length > 0) item.value = obj.placeholder;
                item.label = obj.placeholder;
            } else if(typeof obj?.i18next !== 'undefined') {
                const {i18next} = obj;
                const props = item?.customProperties;
                let value = props?.i18next;
                if(value?.length > 0){
                    const t_label = i18next.t(value);
                    item.label = (t_label === value && item?.value?.length > 0) ? item?.value + ' ' + missing_locale_icon : t_label;
                    // item.label = i18next.t(value);
                }
                value = props?.locale?.[i18next.language];
                if(value?.length > 0){
                    item.label = value;
                }

                // Update Group
                if(typeof obj.group !== 'undefined'){
                    item.value = i18next.t(obj.group[item.id]);
                }
                
            }
        });
    }
}
function updateChoiceSearchPlaceholder(choice, placeholder){
    let search = choice?.passedElement?.element?.closest('.choices');
    search = search.querySelector('input[type="search"]');
    if(search && placeholder) search.placeholder = placeholder;
}
function getChoiceGroups(choices){
    let obj = {};
    choices?.forEach(group => {
        if(group?.choices?.length > 0){
            obj[group.id] = group?.customProperties?.i18next;
        }
    });
    return obj;
}
function updateChoice(choice, obj = {}){
    if(Object.keys(obj).length > 0){
        // updateChoiceData(choice.config.choices, obj, true);
        updateChoiceData(choice?._currentState?.items, obj); // ***
        updateChoiceData(choice?._currentState?.choices, obj); // ***
        obj.group = getChoiceGroups(choice?.config?.choices)
        updateChoiceData(choice?._currentState?.groups, obj); // *** (for group)
        // updateChoiceData(choice._prevState.items, obj);
        // updateChoiceData(choice._prevState.choices, obj);
        // updateChoiceData(choice._presetChoices, obj);
        if(choice?._placeholderValue && obj?.placeholder) choice._placeholderValue = obj?.placeholder;

        // Update Choice Config Text
        const {i18next} = obj;
        if(i18next && choice?.config){
            const obj_i18n = choice?.config?.classNames?.i18next;
            Object.keys(obj_i18n).forEach(t => choice.config[t] = i18next.t(obj_i18n[t]));
        }

        choice?._renderItems();
        choice?._renderChoices();

        // Update Value
        let value = choice?.getValue()?.value;
        if(value?.length > 0 && value != ''){
            choice?.setChoiceByValue(value);
        } else {
            value = obj?.value?.trim();
            if(value?.length > 0) choice?.setChoiceByValue(value);
        }
        // Update Choice Placeholder
        updateChoiceSearchPlaceholder(choice, choice?.config?.searchPlaceholderValue);
    }
}
function transformLocales(choices, lang, dynamic = false){
    choices.forEach(choice => {
        const props = choice?.customProperties;
        let prev_level = '';
        let label = '';
        if(dynamic === true){
            prev_level = choice?.label;
            label = props?.locale?.[lang];
        } else if(dynamic === false && props?.i18next?.length > 0) {
            prev_level = props?.i18next;
            // label = i18next.t(props?.i18next);
        }
        choice.label = (label !== prev_level) ? label : choice?.label ? choice?.label : choice?.value;
    });
    return choices;
}



// await i18next.init(await window?.init_i18next());
// User Access role
const user_access_roles_list = [
    {value: 'sadmin', label: 'Super Admin'},
    {value: 'wpvisitor', label: 'Webpage visitor'}
];
const user_access_roles = document.getElementById('user-access-role');
if(user_access_roles) choices.push(Choice(user_access_roles, user_access_roles_list, {i18next: i18next}));
const filter_user_access_roles = document.getElementById('filter-role');
if(filter_user_access_roles) choices.push(Choice(filter_user_access_roles, user_access_roles_list, {i18next: i18next}));



// Address Dynamic Selection
function addressDynamicSelection(division = null, district = null, upzilla = null, union = null, ward = null){
    division?.passedElement?.element?.addEventListener('change', event => {
        if(event?.target?.value?.trim()?.length > 0){ district?.enable(); }
        else { district?.setChoiceByValue(''); district?.disable(); upzilla?.setChoiceByValue(''); upzilla?.disable(); union?.setChoiceByValue(''); union?.disable();  ward?.setChoiceByValue(''); ward?.disable(); }
    });
    district?.passedElement?.element?.addEventListener('change', event => {
        if(event?.target?.value?.trim()?.length > 0){ upzilla?.enable(); }
        else { upzilla?.setChoiceByValue(''); upzilla?.disable(); union?.setChoiceByValue(''); union?.disable();  ward?.setChoiceByValue(''); ward?.disable(); }
    });
    upzilla?.passedElement?.element?.addEventListener('change', event => {
        if(event?.target?.value?.trim()?.length > 0){ union?.enable(); }
        else { union?.setChoiceByValue(''); union?.disable();  ward?.setChoiceByValue(''); ward?.disable(); }
    });
    union?.passedElement?.element?.addEventListener('change', event => {
        if(event?.target?.value?.trim()?.length > 0){ ward?.enable(); }
        else { ward?.setChoiceByValue(''); ward?.disable(); }
    });
}
const divisions = document.querySelectorAll('#division:not([data-select="import-column"])');
divisions.forEach((address) => {
    const fields    = address.closest('.fields');
    let division    = fields.querySelector('select#division');
    if(division){
        division    = Choice(division, transformLocales([
            {value: 'dhaka', customProperties: {locale: {en: 'Dhaka', bn: 'ঢাকা'}}},
            {value: 'chittagong', customProperties: {locale: {en: 'Chittagong', bn: 'চট্টগ্রাম'}}},
            {value: 'rajshahi', customProperties: {locale: {en: 'Rajshahi', bn: 'রাজশাহী'}}},
            {value: 'khulna', customProperties: {locale: {en: 'Khulna', bn: 'খুলনা'}}},
            {value: 'jessore', customProperties: {locale: {en: 'Jessore', bn: 'যশোর'}}},
            {value: 'barishal', customProperties: {locale: {en: 'Barishal', bn: 'বরিশাল'}}},
            {value: 'sylhet', customProperties: {locale: {en: 'Sylhet', bn: 'সিলেট'}}},
            {value: 'rangpur', customProperties: {locale: {en: 'Rangpur', bn: 'রংপুর'}}},
        ], locale?.lang, true), {search: true, i18next: i18next});
        choices.push(division);
    }
    let district    = fields.querySelector('select#district');
    if(district){
        district    = Choice(district, [
            {value: 'chandpur', label: 'চাঁদপুর'},
            {value: 'cumilla', label: 'কুমিল্লা'},
            {value: 'lakshmipur', label: 'লক্ষ্মীপুর'},
            {value: 'brahmanbaria', label: 'ব্রাহ্মণবাড়িয়া'},
        ], {search: true, i18next: i18next}).disable();
        choices.push(district);
    }

    let upzilla     = fields.querySelector('select#upzilla');
    if(upzilla){
        upzilla     = Choice(upzilla, [
            {value: 'chandpur_s', label: 'চাঁদপুর সদর'},
            {value: 'hajigonj', label: 'হাজীগঞ্জ'},
            {value: 'matlab', label: 'মতলব'},
            {value: 'shahrasti', label: 'শাহ্রাস্তি'},
            {value: 'kachua', label: 'কচুয়া'},
            {value: 'faridganj', label: 'ফরিদগঞ্জ'}
        ], {search: true, i18next: i18next}).disable();
        choices.push(upzilla);
    }

    let union       = fields.querySelector('select#union');
    if(union){
        union       = Choice(union, [
            {value: 'hajigonj', label: 'হাজীগঞ্জ'},
            {value: 'hajigonj_p', label: 'হাজীগঞ্জ পৌরসভা'}
        ], {search: true, i18next: i18next}).disable();
        choices.push(union);
    }

    let ward        = fields.querySelector('select#ward');
    if(ward){
        ward        = Choice(ward, [
            {value: '1', label: '১'},
            {value: '2', label: '২'},
            {value: '3', label: '৩'},
            {value: '4', label: '৪'},
            {value: '5', label: '৫'},
            {value: '6', label: '৬'},
            {value: '7', label: '৭'},
            {value: '8', label: '৮'},
            {value: '9', label: '৯'},
            {value: '10', label: '১০'},
        ], {search: true, i18next: i18next}).disable();
        choices.push(ward);
    }
    addressDynamicSelection(division, district, upzilla, union, ward);
});





// Committee Types
const committee_types = [
    {value: 'union-ward-executive', label: 'Union Ward Executive', customProperties: {locale: {bn: 'ইউনিয়ন ওয়ার্ড নির্বাহী কমিটি'}}},
    {value: 'union-municipal-executive', label: 'Union Municipal Executive', customProperties: {locale: {bn: 'ইউনিয়ন এবং মহানগর/পৌরসভা ওয়ার্ড নির্বাহী কমিটি'}}},
    {value: 'union-council-executive', label: 'Union Council Executive', customProperties: {locale: {bn: 'ইউনিয়ন কাউন্সিল ও ইউনিয়ন নির্বাহী কমিটি'}}},
    {value: 'upzilla-executive', label: 'Upzilla Executive', customProperties: {locale: {bn: 'উপজেলা/মহানগর থানা/পৌর নির্বাহী কমিটি'}}},
    {value: 'municipal-council-executive', label: 'Municipal Council Executive', customProperties: {locale: {bn: 'পৌরসভা কাউন্সিল ও পৌরসভা নির্বাহী কমিটি'}}},
    {value: 'metropolitan-executive', label: 'Metropolitan Executive', customProperties: {locale: {bn: 'মহানগর নির্বাহী কমিটি'}}},
    {value: 'distrcit-executive', label: 'Distrcit Executive', customProperties: {locale: {bn: 'জেলা নির্বাহী কমিটি'}}},
    {value: 'national-council', label: 'National Council', customProperties: {locale: {bn: 'জাতীয় কাউন্সিল'}}},
    {value: 'national-standing', label: 'National Standing', customProperties: {locale: {bn: 'জাতীয় স্থায়ী কমিটি'}}},
    {value: 'national-exectuive', label: 'National Exectuive', customProperties: {locale: {bn: 'জাতীয় নির্বাহী কমিটি'}}},
    {value: 'chairman-advisor-council', label: 'Chairman Advisor Council', customProperties: {locale: {bn: 'চেয়ারম্যানের উপদেষ্টা কাউন্সিল'}}},
    {value: 'thematic-sub-committee', label: 'Thematic Sub Committee', customProperties: {locale: {bn: 'বিষয়ভিত্তিক উপ-কমিটি'}}},
    {value: 'parliamentary-board', label: 'arliamentary Board', customProperties: {locale: {bn: 'পার্লামেন্টারি বোর্ড'}}},
    {value: 'parliamentary-party', label: 'Parliamentary Party', customProperties: {locale: {bn: 'পার্লামেন্টারি পার্টি'}}},
    {value: 'abroad', label: 'Abroad Organization', customProperties: {locale: {bn: 'প্রবাসে সংগঠন'}}},
    {value: 'special-assistant', label: '', customProperties: {locale: {bn: 'চেয়ারম্যানের বিশেষ সহকারী'}}},
];
// Wing Types
const wing_types = [
    {value: 'student-wing', label: 'Student Wing'},
    {value: 'youth-wing', label: 'Youth Wing'},
    {value: 'women-wing', label: 'Women Wing'},
    {value: 'trade-wing', label: 'Trade Wing'},
];
let committee_type = document.getElementById('committee-type');
if(committee_type){
    committee_type = Choice(committee_type, committee_types, {search: true, i18next: i18next});
    choices.push(committee_type);
}



// Committee Types
let committee_category = document.getElementById('committee-category');
if(committee_category){
    committee_category = Choice(committee_category, [
        {value: 'general', label: 'General'},
        {value: 'wing', label: 'Wing'}
    ], {i18next: i18next});
    choices.push(committee_category);

    const select = committee_category?.passedElement?.element;
    select.addEventListener('change', event => {
        const val = event?.target?.value;
        committee_type.setChoices(val === 'general' ? committee_types : wing_types, 'value', 'label', val === 'general' ? wing_types : committee_types);
    });
}




// Member Roles
const member_roles = [
    {value: 'president', label: 'President', customProperties: {locale: {bn: 'প্রেসিডেন্ট'}}},
    {value: 'vice-president', label: 'Vice President', customProperties: {locale: {bn: 'ভাইস প্রেসিডেন্ট'}}},
    {value: 'chairperson', label: 'Chairperson', customProperties: {locale: {bn: 'চেয়ারপার্সন'}}},
    {value: 'secretary-general', label: 'Secretary General', customProperties: {locale: {bn: 'মহাসচিব'}}},
    {value: 'chairman', label: 'Chairman', customProperties: {locale: {bn: 'সভাপতি'}}},
    {value: 'vice-chairman', label: 'Vice Chairman', customProperties: {locale: {bn: 'সহ-সভাপতি'}}},
    {value: 'general-secretary', label: 'General Secretary', customProperties: {locale: {bn: 'সাধারণ সম্পাদক'}}},
    {value: 'joint-editor', label: 'Joint Editor', customProperties: {locale: {bn: 'যুগ্ম সম্পাদক'}}},
];
const roles = document.querySelectorAll('#role');
roles.forEach(role => {
    choices.push(Choice(role, member_roles, {search: true, i18next: i18next}));
});




// Date Format and Time Format
function DateTimeSettings(selector){
    selector.addEventListener('change', event => {
        const field = event?.target?.closest('.field');
        const input = field.querySelector('input[data-dependecy="'+event.target?.tagName?.toLowerCase()+'"]');
        if(input){
            if(event?.target?.value?.trim()?.length > 0){
                if(event?.target?.value === 'other'){
                    input.value = null;
                    input.disabled = false;
                } else {
                    input.value = event?.target?.value;
                    input.disabled = true;
                }
            } else {
                input.value = null;
                input.disabled = true;
            }
        }
    });
}
const select_date_formats = document.querySelectorAll('select[name="select-date-format"]');
select_date_formats.forEach(select_date_format => {
    choices.push(Choice(select_date_format, [
        {value: 'F j, Y', label: format_date('Month DD, YYYY')},
        {value: 'Y-m-d', label: format_date('YYYY-MM-DD')},
        {value: 'm/d/Y', label: format_date('MM/DD/YYYY')},
        {value: 'm/d/Y', label: format_date('DD/MM/YYYY')},
    ], {i18next: i18next}));
    DateTimeSettings(select_date_format);
});
const select_time_formats = document.querySelectorAll('select[name="select-time-format"]');
select_time_formats.forEach(select_time_format => {
    choices.push(Choice(select_time_format, [
        {value: 'g:i a', label: format_time('h:m a')},
        {value: 'g:i A', label: format_time('h:m A')},
        {value: 'H:i', label: format_time('h:m')},
    ], {i18next: i18next}));
    DateTimeSettings(select_time_format);
});
// END - Choices



// START - TinyMCE
const content_bn = document.getElementById('content-bn');
if(content_bn){
    const placeholder = content_bn.getAttribute('placeholder'); 
    tinymce.init({
        selector: '#content-bn',
        placeholder: placeholder ? placeholder : 'কন্টেন্ট',
        plugins: 'quickbars table image link lists media autoresize help',
        toolbar: 'undo redo | formatselect | bold italic | alignleft aligncentre alignright alignjustify | indent outdent | bullist numlist',
        content_style: 'body { font-family: "Nunito", "Arial", sans-serif; font-size:14px }'
    });
}

const content_en = document.getElementById('content-en');
if(content_en){
    const placeholder = content_en.getAttribute('placeholder'); 
    tinymce.init({
        selector: '#content-en',
        placeholder: placeholder ? placeholder : 'Content',
        plugins: 'quickbars table image link lists media autoresize help',
        toolbar: 'undo redo | formatselect | bold italic | alignleft aligncentre alignright alignjustify | indent outdent | bullist numlist',
        content_style: 'body { font-family: "Nunito", "Arial", sans-serif; font-size:14px }'
    });
}
// END - TinyMCE


























// START - Committee
// Profile Picture
let members_data = [];
function findPairOfMember(members, choice, element){
    let data = null;
    members.some(member => {
        if(member[choice]?.passedElement?.element === element){
            data = member[choice];
        }
    });
    return data;
}
document.addEventListener('addItem', (event) => {
    const committee_member  = event.target.closest('[aria-name="committee-member"]');
    const member_name       = committee_member?.querySelector('select[one][name="committee-member-name"]');
    const this_role         = committee_member?.querySelector('select[one][name="committee-member-role"]');
    if(committee_member && (event.target === member_name || event.target === this_role)){
        const target_img      = committee_member?.querySelector('.source-file');
        const this_img       = target_img?.querySelector('.content-placeholder');
        
        const member            = event?.detail?.customProperties;
        const this_choice_role  = findPairOfMember(members_data, 'role', this_role);
        const this_mobile       = committee_member.querySelector('input[type=number][name="committee-member-mobile"]');
        const this_email        = committee_member.querySelector('input[type=email][name="committee-member-email"]');
        
        if(event.target === member_name){
            if(this_img){
                if(member?.img?.trim()?.length > 0){this_img.style.backgroundImage = 'url('+member.img+')'; target_img?.classList?.add('visible'); }
                else {target_img?.classList?.remove('visible'); setTimeout(() => { this_img?.style?.removeProperty('background-image'); }, 350);}
                
                // Unlisted member
                const unlisted_member_name_en = committee_member.querySelector('input[name="unlisted-member-name-en"]');
                if(member?.unlisted === true && unlisted_member_name_en){
                    committee_member?.classList.add('unlisted-member');
                    unlisted_member_name_en.disabled = false;
                } else {
                    committee_member?.classList.remove('unlisted-member');
                    unlisted_member_name_en.value = '';
                    unlisted_member_name_en.disabled = true;
                }
            }
            if(this_choice_role){
                if(member_name?.value.trim()?.length === 0) this_choice_role.disable();
                else this_choice_role.enable();
                if(typeof(member?.role) !== 'undefined') this_choice_role.setChoiceByValue(member.role);
                else this_choice_role?.setChoiceByValue('');
            }
        }
        if(this_mobile){
            this_mobile.disabled = (typeof(member?.mobile) !== 'undefined' || this_role?.value?.length > 0) ? false : true;   
            this_mobile.value = typeof(member?.mobile) !== 'undefined' ? member.mobile : null;
        }
        if(this_email){
            this_email.disabled = (typeof(member?.email) !== 'undefined' || this_role?.value?.length > 0) ? false : true;
            this_email.value = typeof(member?.email) !== 'undefined' ? member.email : null;
        }
    }
});



// Add committee member
function countCommitteeMemberSL(){
    const committee_members = document.querySelectorAll('.committee-members > .committee-member:not(#add-member)');
    if(committee_members.length > 0){
        committee_members.forEach((committee_member, i) => {
            const sl = committee_member.querySelector('.count-sl')
            if(sl) sl.innerText = (i+1);
        });
    }
}
const add_member = document.getElementById('add-member');
const member_list = [
    {value: 'member-id', label: '<img src="../assets/images/users/fakhrul.jpg" alt="Mirza Fakhrul Islam Alamgir"> Mirza Fakhrul Islam Alamgir', customProperties: {img: '../assets/images/users/fakhrul.jpg', role: 'secretary-general', mobile: '01780000009', email: 'mail@bnpbd.org'}},
    {value: 'member-id', label: '<img src="'+default_profile_picture+'" alt="Mirza Fakhrul Islam Alamgir"> Mirza Fakhrul Islam Alamgir'},
]
if(add_member){
    add_member.addEventListener('click', async (event) => {
        const committee_members = document.querySelector('.committee-members');
        const members  = committee_members.querySelectorAll('.committee-member:not(#add-member)');
        const html =  await LoadHTML('ul.committee-members > .committee-member');
        if(html){
            const count = html.querySelector('.committee-member > .count-sl');
            if(count) count.innerText = members.length+1;
            committee_members.insertBefore(html, add_member);
            const member        = html.querySelector('select[one][name="committee-member-name"]');
            const member_role   = html.querySelector('select[one][name="committee-member-role"]');
            const member_mobile = html.querySelector('input[name="committee-member-mobile"]');
            const member_email  = html.querySelector('input[name="committee-member-email"]');
            
            if(LANG === 'bn'){
                if(member?.querySelector('option[value=""]')) member.querySelector('option[value=""]').innerHTML = 'সদস্যের নাম';
                if(member_role?.querySelector('option[value=""]')) member_role.querySelector('option[value=""]').innerHTML = 'পদবী';
                if(member_mobile) member_mobile.placeholder = 'মোবাইল';
                if(member_email) member_email.placeholder = 'ইমেইল @';
            }

            if(member && member_role && member_list && member_roles){
                const name = Choice(member, member_list, {disabled: false, add_data: true, search: true, reset: true, i18next: i18next});
                const role = Choice(member_role, member_roles, {add_data: true, search: true, reset: true, i18next: i18next}).disable();
                members_data.push({
                    'name': name,
                    'role': role
                });
                choices.push(...[name, role]);
            }
            if(typeof DragNDrop === 'function') DragNDrop(countCommitteeMemberSL);
        }
    });
}


// Event Leader
const event_leader = document.getElementById('event-leader');
if(event_leader) choices.push(Choice(event_leader, member_list, {search: true, reset: true, i18next: i18next}));


// Add choice manually - Choices
document.addEventListener('click', (event) => {
    const add_choice_manually = document.getElementById('add-choice-manually');
    if(event.target == add_choice_manually){
        const choice_list = event.target.closest('.choices');
        if(choice_list){
            const select = choice_list.querySelector('select[one]');
            const choices_item = choice_list.querySelector('.choices__item');
            if(select && choices_item){
                const data = event.target.getAttribute('data-value');
                if(data.length > 0){
                    // Reset search
                    const search = choice_list.querySelector('.choices__list--dropdown input[type="search"]');
                    search.value = '';
                    search.dispatchEvent(new Event('keyup', {bubbles: true}));

                    // Manual Data to <option>
                    let member_name = choice_list.querySelector('select[one]');
                        member_name = findPairOfMember(members_data, 'name', member_name);
                    member_name.setChoices([{value: data, label: '<img src="'+default_profile_picture+'" alt="'+data+'" class="unlisted"> ' + data, customProperties: {unlisted: true}}]);
                    member_name.setChoiceByValue(data);
                    member_name.hideDropdown();
                }
            }
        }
    }
});
document.addEventListener("keyup", (event) => {
    if(event.key === "Enter") {
        const choices_list_dropdown = event.target.closest('.choices__list--dropdown'); 
        if(choices_list_dropdown){
            const search = choices_list_dropdown.querySelector('input[type="search"]');
            const add_choice_manually = choices_list_dropdown.querySelector('#add-choice-manually');
            if(event.target == search && add_choice_manually){
                add_choice_manually.click();
            }
        }
    }
});




// Remove member
document.addEventListener('click', (event) => {
    const committee_members = event.target.closest('.committee-members');
    const committee_member = event.target.closest('.committee-member');
    if(committee_member && event.target.tagName == 'SPAN' && event.target.classList.contains('remove')){
        committee_member.remove();
        countCommitteeMemberSL();
    }
});







// Filter Button
const filter_btn = document.querySelector('button.filter');
const filter_otpions = document.querySelector('.data-filter.buttoned-filter');
if(filter_btn && filter_otpions){
    filter_btn.addEventListener('click', (event) => {
        if(filter_btn.classList.contains('active')){
            event.target.classList.remove('active');
            filter_otpions.classList.remove('show-filter');
        } else {
            event.target.classList.add('active');
            filter_otpions.classList.add('show-filter');
        }
    });
}





// Media Selector - Popup
document.addEventListener('click', async (event) => {
    if(event.target.tagName === 'BUTTON' && event.target.name === 'media-selector'){
        const media_selector_referrence = event.target.closest('[aria-name="media-selector-referrence"]');
        if(media_selector_referrence){
            media_selector_referrence.setAttribute('media-referrence', 'active')
            
            const media_selector = await LoadHTML('[aria-name="media-selector"]');
            const allowedFiles   = event.target.getAttribute('allowed-files');
            const url            = event.target.getAttribute('url');
            const unknownSource  = event.target.getAttribute('unknown-source');

            if(allowedFiles?.length > 1)            media_selector.setAttribute('allowed-files', allowedFiles);
            if(JSON.parse(unknownSource) === true)  media_selector?.querySelector('[aria-name="API"]')?.setAttribute('unknown-source', unknownSource);
            if(JSON.parse(url) !== true)            media_selector?.querySelector('[aria-name="API"]')?.remove();

            const add_media = media_selector.querySelector('.col-right.add-media');
            if(add_media){
                PreLoader(true, add_media);
                setTimeout(() => {
                    PreLoader(false, add_media);
                }, 1500);
            }
            insertPopup(media_selector, ['popup', 'white', 'clickable']);
       }
    }
});


// Select media
const select_media = document.getElementById('select-media-item');
const select_all_media = document.getElementById('select-all-media');
if(select_media){
    select_media.addEventListener('click', (event) => {
        if(select_media == event.target){
            if(event.target.classList.contains('active') && event.target.getAttribute('data-select-media') == 'true'){
                event.target.classList.remove('active');
                event.target.removeAttribute('data-select-media');
                select_all_media?.classList?.remove('active');
                const medias = document.querySelectorAll('ul.medias > li[data-id]');
                medias.forEach((media) => {
                    media.setAttribute('aria-checked', false);
                });
            } else {
                event.target.classList.add('active');
                event.target.setAttribute('data-select-media', true);
            }
        }
    });
}

// Select all media
if(select_all_media){
    select_all_media.addEventListener('click', (event) => {
        console.log('here');
        if(select_all_media == event.target && (select_media?.getAttribute('data-select-media') === 'true' && select_media?.classList.contains('active'))){
            const medias = document.querySelectorAll('ul.medias > li[data-id]');
            if(event.target.classList.contains('active')){
                event.target.classList.remove('active');
                medias.forEach((media) => {
                    media.setAttribute('aria-checked', false);
                });
            } else {
                event.target.classList.add('active');
                medias.forEach((media) => {
                    media.setAttribute('aria-checked', true);
                });
            }
        }
    });
}


// Select media individual & Insert media
document.addEventListener('click', (event) => {
    // Media individual
    if(event.target.tagName == 'LI' && event.target.closest('ul') && event.target.getAttribute('data-id')){
        const media_selector = event.target.closest('div[aria-name="media-selector"]');
        const media_selector_url = document?.querySelector('[aria-name="media-selector"] #media-selector-url');
        if(media_selector_url){
            media_selector_url.value = '';
            media_selector_url.dispatchEvent(dispatch_keyup_event);
        }
        
        // Media Page
        if(select_media?.getAttribute('data-select-media') === 'true' && select_media?.classList.contains('active')){
            if(event.target.getAttribute('aria-checked') === 'true'){
                event.target.setAttribute('aria-checked', false);
            } else if(event.target.getAttribute('aria-checked') === 'false'){
                event.target.setAttribute('aria-checked', true);
            }
    
            // Check if all selected
            const medias = document.querySelectorAll('ul.medias > li');
            const selected_medias = document.querySelectorAll('ul.medias > li[data-id][aria-checked="true"]');
            if(select_all_media){
                if(medias.length === selected_medias.length){
                    select_all_media.classList.add('active');
                } else {
                    select_all_media.classList.remove('active');
                }
            }
        }
        // Media Selector Page
        else if(media_selector){
            const insert_btn = media_selector.querySelector('#insert-selected-media');
            if(insert_btn){
                const selected_medias = media_selector.querySelectorAll('ul.medias > li[data-id][aria-checked="true"]');
                selected_medias.forEach((media) => {
                    if(media !== event.target) media.setAttribute('aria-checked', false);
                });
                if(event.target.getAttribute('aria-checked') === 'true'){
                    event.target.setAttribute('aria-checked', false);
                    insert_btn.setAttribute('disabled', '');
                    // insert_btn.classList.remove(['primary', 'filled']);
                } else if(event.target.getAttribute('aria-checked') === 'false'){
                    event.target.setAttribute('aria-checked', true);
                    // insert_btn.classList.add(['primary', 'filled']);
                    insert_btn.removeAttribute('disabled');
                }
            }
        }
    }
    
    // Insert media
    else if(event.target.tagName == 'BUTTON' && event.target.id == 'insert-selected-media' && !event.target.disabled){
        const refference_active_aria = document.querySelector('[aria-name="media-selector-referrence"][media-referrence="active"]');
        if(refference_active_aria){
            const media_selector = event.target.closest('[aria-name="media-selector"]');
            const medias = media_selector?.querySelector('ul.medias');
            const selected_items = medias.querySelectorAll('li[aria-checked="true"]');
            const selected_item = medias.querySelector('li[aria-checked="true"]');
            const source_file = selected_item?.querySelector('.source-file');
            
            const url_source_file = media_selector?.querySelector('[aria-name="media-selector-footer"] input[type="url"]#media-selector-url');
            const url_source_file_value = url_source_file?.value?.trim();

            const isURLSelected = (selected_items.length === 0 && url_source_file_value?.length > 0) ? true : false;
            const isMediaSelected = !isURLSelected;

            let selected_media = {
                id: isMediaSelected ? selected_item?.getAttribute('data-id') : url_source_file_value, 
                source: isMediaSelected ? source_file?.getAttribute('data-source') : url_source_file_value,
                'file-ext': isMediaSelected ? source_file?.getAttribute('file-ext') : media_selector?.querySelector('[aria-name="media-selector-footer"] div[file-ext]')?.getAttribute('file-ext'),
            };
            if(isMediaSelected){
                if(!(selected_media?.source)) selected_media.source = source_file?.getAttribute('src');
                if(!(selected_media?.['file-ext'])) selected_media['file-ext'] = urlFileExtension(selected_media?.source);
            }
            
            const input_media_id = refference_active_aria.querySelector('input[name="media-id"]');
            const to_source_file = refference_active_aria.querySelector('.source-file');
            const placeholder    = to_source_file?.querySelector('.content-placeholder');
                  placeholder?.style?.removeProperty('background-image');

            if(placeholder){
                const allowedFiles = media_selector?.getAttribute('allowed-files')?.split(' ');
                if(isAllowedFile(selected_media?.['file-ext'], allowedFiles)){
                    if(
                        ((isMediaSelected && isInteger(selected_media?.id)) || isURLSelected) && 
                        selected_media?.id && selected_media?.source && selected_media?.['file-ext'] && input_media_id && to_source_file)
                    {
                        input_media_id.value = selected_media.id;
                        to_source_file.setAttribute('file-ext', selected_media?.['file-ext']);
                        // to_source_file.setAttribute('data-src', selected_media.source);
                        if(isImage(selected_media?.['file-ext'])){
                            if(placeholder?.tagName === 'INPUT'){
                                placeholder.value = selected_media.source;
                                placeholder?.dispatchEvent(new Event('change', {bubbles: true}));
                            } else {
                                placeholder.style.backgroundImage = 'url('+selected_media.source+')';
                            }
                        }
                        to_source_file.classList.add('visible');
                        
                        // Close popup
                        const cancel_btn = event.target.closest('div')?.querySelector('button[name="close-popup"]');
                        cancel_btn?.click();
                    }
                } else {
                    GrowlNotification.notify({ type: 'default', showProgress: true, closeTimeout: 2000,
                        title: selected_media?.['file-ext']?.toUpperCase(),
                        description: 'File format not allowed',
                        position: 'top-right',
                        showButtons: false
                    });
                }
            } else {
                GrowlNotification.notify({ type: 'error', showProgress: true, closeTimeout: 10000,
                    title: 'Error',
                    description: 'Media selection referrence not found',
                    position: 'top-right',
                    showButtons: false
                });
            }
        }
    }

    // Reset media
    else if(event.target.tagName === 'BUTTON' && (event.target.name === 'reset-media-selector' || event.target.name === 'reset-media-selector-default')){
        const media_selector_refference = event.target.closest('[aria-name="media-selector-referrence"]');
        const input_media_id            = media_selector_refference?.querySelector('input[name="media-id"]');
        const to_source_file            = media_selector_refference?.querySelector('.source-file');
        const placeholder               = to_source_file?.querySelector('.content-placeholder');
        
        if(input_media_id && placeholder){
            input_media_id.value = null;
            if(event.target.name === 'reset-media-selector'){
                to_source_file.classList.remove('visible');
                to_source_file.removeAttribute('data-src');
                to_source_file.removeAttribute('file-ext');
                if(placeholder?.tagName === 'INPUT'){
                    placeholder.value = null;
                } else {
                    setTimeout(() => {
                        placeholder.style.removeProperty('background-image');
                    }, 300);
                }
            } else if(event.target.name === 'reset-media-selector-default'){
                const file_ext = event.target?.getAttribute('file-ext');
                const source_value = event.target?.getAttribute('source-value');
                const media_value = event.target?.getAttribute('media-id');
                input_media_id.value = media_value;

                to_source_file?.setAttribute('file-ext', file_ext);
                if(placeholder?.tagName === 'INPUT'){
                    placeholder.value = source_value;
                } else {
                    placeholder.style.backgroundImage = 'url('+source_value+')';
                }
            }
            placeholder?.dispatchEvent(new Event('change', {bubbles: true}));
        }
    }



    // Clear Media Selector URL 
    else if(event.target.tagName === 'BUTTON' && event.target.name === 'clear-media-selector-url'){
        const media_selector_footer = event.target.closest('div[aria-name="media-selector-footer"]');
        const media_selector_url    = media_selector_footer?.querySelector('#media-selector-url');
        const external_source_view  = media_selector_footer?.querySelector('.external-source-view'); 
        if(media_selector_url){
            media_selector_url.value = null;
            media_selector_url?.dispatchEvent(new Event('change', {bubbles: true}));
            external_source_view?.removeAttribute('file-ext');
        }
    }



    // Media Grid view / List View
    else if(event.target.tagName === 'BUTTON' && event.target.closest('.grid-list-view') && (event.target.id === 'media-grid' || event.target.id === 'media-list')){
        if(!event.target.classList.contains('active')){
            const grid_list_view = event.target.closest('.grid-list-view');
            const list_btn = grid_list_view?.querySelector('#media-list');
            const grid_btn = grid_list_view?.querySelector('#media-grid');
            const medias = document.querySelector('ul.medias');
            if(medias?.getAttribute('data-view') !== 'list' && event.target.id === 'media-list' && event.target == list_btn){
                list_btn?.classList.add('active');
                grid_btn?.classList.remove('active');
                medias.setAttribute('data-view', 'list');
            } else if(medias?.getAttribute('data-view') === 'list' && event.target.id === 'media-grid' && event.target == grid_btn){
                grid_btn?.classList.add('active');
                list_btn?.classList.remove('active');
                medias.removeAttribute('data-view');
            }
        }
    }


    // Delete Media (single)
    else if(event.target.tagName === 'SPAN' && event.target.closest('li[data-id]') && event.target.closest('ul.medias') && event.target.getAttribute('data-action') === 'delete'){
        const li = event.target.closest('li[data-id]');
        li?.classList?.add('deleting');
        setTimeout(() => {
            li?.remove();
        }, 800);
    }


    // Delete Media (multiple)
    else if(event.target.tagName === 'BUTTON' && event.target?.id === 'delete-media'){
        const medias = document.querySelectorAll('ul.medias > li[aria-checked=true]');
        if(medias.length > 0){
            medias.forEach((li, i) => {
                setTimeout(() => {
                    li?.classList?.add('deleting');
                    setTimeout(() => {
                        const media = li?.closest('.media');
                        li?.remove();

                        const cnf = media.querySelector('.content-not-found');
                        if(media?.querySelector('ul.medias')?.childElementCount === 0){
                            cnf?.classList.remove('hidden');
                        } else {
                            cnf?.classList.add('hidden');
                        }
                    }, 800);
                }, 800*(i+1), true);
            });
        } else {
            GrowlNotification.notify({ type: 'default', showProgress: true, closeTimeout: 3000,
                title: i18next.t('media.media'),
                description: i18next.t('media.alert.delete-media-not-selected'),
                position: 'top-right',
                showButtons: false
            });
        }
    }
});


// Media Selector (External source)
function API_Error(status, delay, error_text){
    status.innerHTML = error_text;
    status?.classList?.add('error');
    setTimeout(() => {
        status.innerHTML = null;
        status?.classList?.remove('error');
    }, delay);
}
function APIRequest(event, req = {}){
    return new Promise((resolve, reject) => {
        req['method'] = req?.method ? req.method : 'GET';
        if(!(req?.files)) req['files'] = [];

        const url_init = req?.URL;
        if(req?.URL) req.URL = req.URL.trim();
        
        const API = event.target.closest('[aria-name="API"]');
        const requst_status = API.querySelector('[aria-name="api-request-status"]'); 
        const XHR = new XMLHttpRequest();

        
        if(requst_status && req?.URL?.length > 0){
            requst_status.innerHTML = null;
            requst_status?.classList.remove('success');
            requst_status?.classList.remove('error');
            
            let API_Error_Content = error_icon;
            
            requst_status.innerHTML = loading_icon;
            XHR.open(req?.method, req?.URL);
            XHR.send();
            XHR.onload = () => {
                const content_type = XHR.getResponseHeader('Content-Type');
                let file_extension = urlFileExtension(req?.URL);
                if(file_extension.includes('drive')) file_extension = content_type?.split('/')?.at(-1);
                
                if(XHR.status < 400){
                    if(isAllowedFile(file_extension, req?.files)){                        
                        requst_status?.classList?.add('success');
                        requst_status.innerHTML = success_icon;
                        setTimeout(() => {
                            requst_status.innerHTML = null;
                            requst_status?.classList?.remove('success');
                        }, 1000);
                        resolve({
                            success: true,
                            XHR: XHR,
                            data: {
                                'content-type': content_type,
                                'file-ext': file_extension,
                            }
                        });
                    } else {
                        API_Error(requst_status, 1000, API_Error_Content + ' File-type not allowed');
                        reject({success: false, XHR: XHR, data: null, reason: 'invalid-file'});
                    }
                } else {
                    API_Error(requst_status, 1000, ' Err');
                    reject({success: false, XHR: XHR, data: null, reason: (XHR.status === 404 ? 'unreachable-url' : 'error')});
                }
            }
            XHR.onerror = () => {
                const allowedURLS = {
                    drive: 'https://drive.google.com/file/',
                };
                const isAllowed = Object.keys(allowedURLS).filter(key => req?.URL?.includes(allowedURLS[key]));
                if(req?.unknsource === true && XHR.readyState === 4 && isAllowed.length > 0){
                    requst_status?.classList?.add('pending');
                    requst_status.innerHTML = info_icon;
                    // Wait for the confirmation
                    const notification = GrowlNotification.notify({ type: 'default', showProgress: true, closeTimeout: 10000,
                        title: 'External link',
                        description: 'You\'re trying to add unverified source, would you agree with this?',
                        position: 'top-right',
                        showButtons: true,
                        buttons: {
                            action: {
                                text: 'Yes',
                                callback: () => {
                                    requst_status.innerHTML = null;
                                    requst_status?.classList?.remove('pending');
                                    resolve({
                                        success: true,
                                        XHR: XHR,
                                        data: {
                                            'content-type': isAllowed[0]+'/'+isAllowed[0],
                                            'file-ext': isAllowed[0],
                                        }
                                    });
                                }
                            },
                            cancel: {
                                text: 'No',
                                callback: () => {
                                    requst_status.innerHTML = null;
                                    requst_status?.classList?.remove('pending');
                                    reject({success: false, XHR: XHR, data: null, reason: 'cancel-by-user'});
                                }
                            }
                        }
                    });
                    if(notification){
                        notification.addEventListener('click', (event) => {
                            // console.log(event);
                        });
                    }
                } else {
                    API_Error(requst_status, 1000, API_Error_Content + ' Invalid URL');
                    reject({success: false, XHR: XHR, data: null, reason: 'error'});
                }
            }
        } else {
            if(req?.URL?.length !== url_init.length){
                API_Error(requst_status, 1000, error_icon + 'Invalid URL');
            }
            reject({status: false, XHR: XHR, data: null, reason: 'invalid-url'});
        }
    });
}

// Media selector url
document.addEventListener('keyup', async (event) => {
    if(event.target.id === 'media-selector-url'){
        let req = {};
        req.URL = event.target?.value;
        req.error_text = ' Invalid URL';
        
        const media_selector        = event.target.closest('[aria-name="media-selector"]');
        const insert_btn            = media_selector.querySelector('#insert-selected-media');
        const API                   = event.target.closest('[aria-name="API"]');
        const unknownSource         = API?.getAttribute('unknown-source');
              req['unknsource']     = JSON.parse(unknownSource);
        const external_source_view  = API?.querySelector('.external-source-view'); 
        const placeholder           = external_source_view?.querySelector('.content-placeholder'); 
        const allowedFiles          = media_selector?.getAttribute('allowed-files');
              req['files']          = allowedFiles.split(' ');

        APIRequest(event, req)
        .then((response) => {
            if(response?.success === true){
                if(external_source_view && placeholder){
                    const file_extension = response?.data?.['file-ext'];
                    external_source_view?.setAttribute('file-ext', file_extension);
                    insert_btn?.removeAttribute('disabled');
                    if(isImage(file_extension))
                    placeholder.style.backgroundImage = 'url('+req?.URL+')';
                }
            }
        })
        .catch((response) => {
            if(response?.success === false){
                external_source_view?.removeAttribute('file-ext', 'image');
                placeholder.style.removeProperty('background-image');
                const selected_medias = media_selector.querySelectorAll('ul.medias > li[data-id][aria-checked="true"]');
                if(selected_medias.length === 0){
                    insert_btn?.setAttribute('disabled', '');
                }
            }
        });
    }
});






// Table Data - Bulk Action
function multipleTableBulkSelection(tables, table = null){
    tables.forEach((this_table) => {
        if(this_table !== table || table === null){
            const selected_checkbox = this_table.querySelectorAll('thead tr th:nth-child(1) input[type=checkbox], tbody tr td:nth-child(1) input[type=checkbox]');
            selected_checkbox.forEach((checkbox) => {
                if(checkbox?.checked) checkbox.checked = false;
            });
        }
    });
}
document.addEventListener('click', (event) => {
    const table = event.target.closest('table.data-table');
    if(table){
        const select_all_data = table.querySelector('#select-all-data');
        const rows = table?.querySelectorAll('tbody tr');
        const column = 1; // In which checkbox is available
        if(event.target === select_all_data || event.target.name === 'select-individual-data'){
            // Check if the page contains multiple data tables
            const tables = document.querySelectorAll('table.data-table');
            multipleTableBulkSelection(tables, table);

            let select_individuals = table?.querySelectorAll('tbody tr td:nth-child('+ column +') input[type=checkbox]:checked');
            if(event.target == select_all_data){
                rows.forEach((row) => {
                    const checkbox = row.querySelector('td:nth-child('+ column +') input[type=checkbox]');
                    if(event.target.checked && checkbox){
                        checkbox.checked = true;
                    } else {
                        checkbox.checked = false;
                    }
                });
                select_individuals = table?.querySelectorAll('tbody tr td:nth-child('+ column +') input[type=checkbox]:checked');
            }
            // Select individual
            else if(event.target.name === 'select-individual-data'){
                if(select_all_data){
                    select_all_data.checked = rows.length === select_individuals.length ? true : false;
                }
            }

            const bulk_action_btn = document.querySelector('button#data-bulk-action');
            if(select_individuals.length > 0){
                bulk_action_btn?.removeAttribute('disabled');
            } else {
                bulk_action_btn?.setAttribute('disabled', '');
            }
        }
    }

    // Bulk Action
    if(event.target.tagName === 'BUTTON' && event.target.id === 'data-bulk-action') {
        const aria_bulk_action    = event.target.closest('.data-bulk-action');
        const action              = aria_bulk_action?.querySelector('#data-bulk-options')?.value;
        if(action?.trim()?.length === 0){
            GrowlNotification.notify({ type: 'default', showProgress: true, closeTimeout: 3000,
                title: 'Bulk action',
                description: 'No action selected',
                position: 'top-right',
                showButtons: false
            });
        } else {
            // START - Bulk Actions
            // Delete
            if(action === 'delete'){
                const deleting = 'deleting';
                const tables = document.querySelectorAll('table.data-table');
                if(tables.length > 0){
                    tables.forEach(table => {
                        const checkboxes = table.querySelectorAll('tbody tr td:first-child input[type="checkbox"]:checked');
                        if(checkboxes.length > 0){
                            checkboxes.forEach((checkbox, i) => {
                                if(checkbox?.checked === true){
                                    const tr = checkbox.closest('tr');
                                    const transition = 350*(i+1);
                                    setTimeout(() => {
                                        tr.classList.add(deleting);
                                        setTimeout(() => {
                                            tr.remove();
                                        }, transition);
                                    }, transition);
                                }
                            });
                        }
                    });
                    document.querySelectorAll('#select-all-data').forEach(select_all => select_all.checked = false);
                }
            } 

            // Category - (Edit category for the post)
            else if(action === 'edit'){
                const bulk_module = document.querySelector('[aria-name=bulk-module]');
                if(bulk_module){
                    bulk_module?.classList?.add('visible');
                    const tables = document.querySelectorAll('table.data-table');
                    if(tables.length > 0){
                        tables.forEach(table => {
                            const column = table?.getAttribute('data-basecol'); // td:nth-child(column) of title
                            if(column){
                                const checkboxes = table.querySelectorAll('tbody tr td:first-child input[type="checkbox"]:checked');
                                if(checkboxes.length > 0){
                                    let html = "";
                                    checkboxes.forEach((checkbox, i) => {
                                        if(checkbox?.checked === true){
                                            const tr = checkbox.closest('tr');
                                            const base_col = tr?.querySelector('td:nth-child(' + column + ')')
                                            const title = base_col?.innerText;
                                            const data_id = base_col?.querySelector('input[name=data-id]')?.value;
                                            if(data_id){
                                                html += '<li><button name="clear-bulk-item"></button> '+ title +' <input type="hidden" name="data-id" value="'+ data_id +'"/></li>';
                                            }
                                        }
                                    });
                                    const dom = parser.parseFromString(html, "text/html");
                                    const get_list = dom.querySelectorAll('li');
                                    const bulk_list = bulk_module?.querySelector('.bulk-list ul');
                                    if(bulk_list) bulk_list.innerHTML = '';
                                    get_list.forEach(item => {
                                        bulk_list.append(item);
                                    });
                                }
                            }
                        });
                        document.querySelectorAll('#select-all-data').forEach(select_all => select_all.checked = false);
                    }
                }
            }
            // END - Bulk Actions
        }
    }


    // Clear Bulk Action
    else if(event.target.tagName === 'BUTTON' && event.target?.name === 'clear-bulk-item') {
        const li = event.target?.closest('li');
        li?.classList?.add('deleting');
        setTimeout(() => {
            const ul = li?.closest('ul');
            li?.remove();

            // Check if there is no item available in the bulk section
            const items = ul?.querySelectorAll('li');
            if(items.length < 1){
                const cancel_bulk_action = ul?.closest('[aria-name=bulk-module]')?.querySelector('#cancel-bulk-action');
                if(cancel_bulk_action){
                    cancel_bulk_action?.click();
                }
            }
        }, 500);
    }



    // Cancel Bulk Action
    else if(event.target.tagName === 'BUTTON' && event.target?.id === 'cancel-bulk-action') {
        const bulk_module = document.querySelector('[aria-name=bulk-module]');
        if(bulk_module){
            bulk_module?.classList?.remove('visible');
            let bulk_post_category  = null, bulk_status = null, bulk_visibilty = null;
            const post_category     = bulk_module.querySelector('#post-category'); 
            if(post_category)       bulk_post_category = getChoice(post_category);
            const select_status     = bulk_module.querySelector('#select-status'); 
            if(select_status)       bulk_status = getChoice(select_status);
            const visiblity         = bulk_module.querySelector('#post-page-visiblity'); 
            if(visiblity)           bulk_visibilty = getChoice(visiblity);
    
            bulk_post_category?.setChoiceByValue('-1');
            bulk_status?.setChoiceByValue('-1');
            bulk_visibilty?.setChoiceByValue('-1');
        }
    }


    // Submit Bulk Action
    else if(event.target.tagName === 'BUTTON' && event.target?.id === 'submit-bulk-action') {
        const html = `<span class="loading"><img src="${SITE_URL}/assets/images/loading.gif" alt="Loading..."></span>`;
        const dom = parser.parseFromString(html, "text/html");
        const loading = dom.querySelector('.loading');
        event.target?.after(loading);
        
        // Update to database - >>>>>>>>>>>>>>>>>>>>>
        setTimeout(() => {
            const loading = event.target?.closest('[aria-name=bulk-module]').querySelector('.loading');
            loading?.remove();
            GrowlNotification.notify({ type: 'success', showProgress: true, closeTimeout: 3000,
                title: 'Success',
                description: 'Selected items were updated',
                position: 'top-right',
                showButtons: false
            });
        }, 2000);
    }

});

// Post and Page and Event
const data_bulk_options = document.getElementById('data-bulk-options');
if(data_bulk_options){
    let options = [];
    const page = document.querySelector('.content-main');
    if(page.classList.contains('posts')){
        options.push({value: 'edit', customProperties: {i18next: 'action.edit'}});
    }
    options.push({value: 'delete', customProperties: {i18next: 'action.delete'}});
    choices.push(Choice(data_bulk_options, options, {i18next: i18next}));
}


// START - Event
mdtimepicker('#event-start-time', { format: 'h:mm tt'});
mdtimepicker('#event-end-time', { format: 'h:mm tt'});
// END - Event


// START - Choices
function getChoice(element){
    let data = null;
    choices.some(choice => {
        if(choice.passedElement?.element === element){
            data = choice;
        }
    });
    return data;
}
// Filter Category
const filter_category = document.getElementById('filter-category');
if(filter_category){
    choices.push(Choice(filter_category, [
        {value: 'default', label: i18next.t('post.category.default')}
    ], {i18next: i18next}));
}



const filter_post_page_status = document.getElementById('filter-post-page-status');
if(filter_post_page_status){
    choices.push(Choice(filter_post_page_status, [
        {
            label: 'Status',
            id: 1,
            customProperties: {i18next: 'status.title'},
            choices: [
                {value: 'published', customProperties: {i18next: 'status.published'}},
                {value: 'draft', customProperties: {i18next: 'status.draft'}},
                {value: 'scheduled', customProperties: {i18next: 'status.scheduled'}},   
            ]
        }, {
            label: 'Visiblity',
            id: 2,
            customProperties: {i18next: 'visibility.title'},
            choices: [
                {value: 'public', customProperties: {i18next: 'visibility.public'}},
                {value: 'private', customProperties: {i18next: 'visibility.private'}},
                {value: 'protected', customProperties: {i18next: 'visibility.protected'}}
            ],
        },
    ], {i18next: i18next}));
}

const filter_event_status = document.getElementById('filter-event-status');
if(filter_event_status){
    choices.push(Choice(filter_event_status, [
        {value: 'upcoming', label: 'Upcoming'},
        {value: 'happening', label: 'Happening'},
        {value: 'ended', label: 'Ended'},
    ], {i18next: i18next}));
}

const filter_order = document.getElementById('filter-order');
if(filter_order){
    choices.push(Choice(filter_order, [
        {value: 'name-asc', label: 'Name ASC'},
        {value: 'name-dsc', label: 'Name DSC'},
        {value: 'date-asc', label: 'Date ASC'},
        {value: 'date-dsc', label: 'Date DSC'},
    ], {i18next: i18next}));
}

const select_status = document.getElementById('select-status');
if(select_status){
    choices.push(Choice(select_status, [
        {value: 'published', customProperties: {i18next: 'status.published'}},
        {value: 'draft', customProperties: {i18next: 'status.draft'}},
        {value: 'scheduled', customProperties: {i18next: 'status.scheduled'}},
    ], {reset: false, i18next: i18next}));


    select_status.addEventListener('change', (event) => {
        const scheduled_aria = event.target.closest('[aria-name="status-visibility"]')?.querySelector('[aria-name="scheduled"]');
        if(event.target.value === 'scheduled' && scheduled_aria){
            scheduled_aria?.classList.add('show-field');
        } else {
            scheduled_aria?.classList.remove('show-field');
        }
    });
}

const visibiltiy = document.getElementById('post-page-visiblity');
if(visibiltiy){
    choices.push(Choice(visibiltiy, [
        {value: 'public', customProperties: { i18next: 'visibility.public'}},
        {value: 'private', customProperties: { i18next: 'visibility.private'}},
        {value: 'password-protected', customProperties: { i18next: 'visibility.password-protected'}},
    ], {reset: false, i18next: i18next}));

    visibiltiy.addEventListener('change', (event) => {
        const protected_aria = event.target.closest('[aria-name="status-visibility"]')?.querySelector('[aria-name="password-protected"]');
        if(event.target.value === 'password-protected' && protected_aria){
            protected_aria?.classList.add('show-field');
        } else {
            protected_aria?.classList.remove('show-field');
        }
    });
}
// END - Choices






// Category Page
const category_list = [
    {value: 'default', customProperties: {locale: {en: 'Default', bn: 'ডিফল্ট'}}}
];
let parent_category = document.getElementById('parent-category');
if(parent_category){
    parent_category = Choice(parent_category, category_list, {search: true, i18next: i18next});
    choices.push(parent_category);
}
let post_categories = document.getElementById('post-category');
if(post_categories){
    post_categories = Choice(post_categories, category_list, {search: true, i18next: i18next});
    choices.push(post_categories);
    // post_categories.setChoiceByValue('default');
}

// Edit Category
document.addEventListener('click', (event) => {
    if(event.target.tagName === 'BUTTON'){
        let tr = event.target?.closest('tr');
            tr = tr ? tr : document.querySelectorAll('.data-content table tbody tr');
        const target_data_id    = event.target?.getAttribute('data-id');
        const category_name_bn  = event.target?.getAttribute('data-name-bn');
        const category_name_en  = event.target?.getAttribute('data-name-en');
        const category_slug     = event.target?.getAttribute('data-slug');
        const category_parent   = event.target?.getAttribute('data-parent');
        
        let category_aria   = event.target?.closest('[aria-name="add-category"]');
            category_aria   = category_aria ? category_aria : event.target?.closest('[aria-name="edit-category"]');
        const category_form = category_aria?.querySelector('[aria-name="category-form"]');
        
        const input_category_name_bn    = category_form?.querySelector('#category-name-bn');
        const input_category_name_en    = category_form?.querySelector('#category-name-en');
        const input_category_slug       = category_form?.querySelector('#category-slug');
        const input_category_parent     = parent_category;
        const input_edit_category_id    = category_form?.querySelector('#input-edit-category');
        const btn_main                  = category_form?.querySelector('button.main');
        const btn_field                 = category_form?.querySelector('.cancel-onpage-action');
    
        const action_edit_verification = (tr && target_data_id && (category_name_bn || category_name_en) && category_slug && category_parent && category_aria && (input_category_name_bn || input_category_name_en) && input_category_slug && input_category_parent && input_edit_category_id && btn_main && btn_field);
        const action_cancel_verification = (tr?.length > 0 && input_category_slug && input_category_parent && input_edit_category_id && btn_main);
        if(event.target.name === 'edit-category' && action_edit_verification){
            tr.setAttribute('disabled', '');
            category_aria.setAttribute('aria-name', 'edit-category');
            input_category_name_bn.value    = category_name_bn;
            input_category_name_en.value    = category_name_en;
            input_category_slug.value       = category_slug;
            input_category_parent.setChoiceByValue(category_parent);
            
            input_edit_category_id.value = target_data_id;
            btn_main.innerText = 'Edit Category';
            btn_field.classList.remove('hide-field-no-transition');
        }
        // Cancel edit category action
        else if(event.target.name === 'cancel-onpage-action' && action_cancel_verification){
            tr.forEach((row) => {
                row.removeAttribute('disabled');
            });
            category_aria.setAttribute('aria-name', 'add-category');
            input_category_name_bn.value = '';
            input_category_name_en.value = '';
            input_category_slug.value = '';
            input_category_parent.setChoiceByValue('');
            input_edit_category_id.value = '';
            btn_main.innerText = 'Add Category';
            btn_field.classList.add('hide-field-no-transition');
        }
    }
});



// Slide image
document.addEventListener('change', (event) => {
    if(event.target.closest('.slides')){
        if(event.target.tagName === 'INPUT' && event.target.name === 'content-placeholder'){
            const tr = event.target.closest('tr');
            if(event.target?.classList?.contains('background')){
                const slide_preview_wrap  = tr?.querySelector('td .slide-preview-wrap');
                if(slide_preview_wrap){
                    event.target.value = event.target.value?.trim();
                    if(event.target?.value?.length > 0){
                        slide_preview_wrap.style.backgroundImage = 'url('+event.target.value+')';
                    } else {
                        slide_preview_wrap?.style?.removeProperty('background-image');
                    }
                }
            } else if(event.target?.classList?.contains('logo')){
                const slide_preview_logo  = tr?.querySelector('td .slide-preview-logo');
                if(slide_preview_logo){
                    event.target.value = event.target.value?.trim();
                    if(event.target?.value?.length > 0){
                        slide_preview_logo.style.backgroundImage = 'url('+event.target.value+')';
                        slide_preview_logo?.classList?.add('visible');
                    } else {
                        slide_preview_logo?.classList?.remove('visible');
                        slide_preview_logo?.style?.removeProperty('background-image');
                    }
                }
            }
        }
    }
});

// Slide Content
document.addEventListener('keyup', (event) => {
    const slide_content_input = event.target.closest('.slide-content-input');
    if(event.target.tagName === 'INPUT' && event.target.closest('.slides') && slide_content_input && (event.target.name === 'slide-title' || event.target.name === 'slide-description' || event.target.name === 'slide-url' || event.target.name === 'slide-overlay-opacity')){
        const tr = event.target.closest('tr');
        const slide_preview_content = tr.querySelector('.slide-preview-content');
        if(slide_preview_content) slide_preview_content.innerHTML = null;

        const slide_title       = slide_content_input?.querySelector('input[name="slide-title"]')?.value?.trim();
        const slide_url         = slide_content_input?.querySelector('input[name="slide-url"]')?.value?.trim();
        const slide_description = slide_content_input?.querySelector('input[name="slide-description"]')?.value?.trim();

        const a  = document.createElement('a');
        const h2 = document.createElement('h2');
        const title_color = slide_content_input.querySelector('input[name="title-color"]');
        const p  = document.createElement('p');
        const description_color = slide_content_input.querySelector('input[name="description-color"]');

        if(slide_title.length > 0){
            h2.innerText = slide_title;
            slide_preview_content.appendChild(h2);
            if(title_color?.dataset?.currentColor) h2.style.color = title_color?.dataset?.currentColor;
            const td_slide_title = tr.querySelector('td:nth-child(2)');
            if(td_slide_title) td_slide_title.innerText = slide_title;
        }
        if(slide_title.length > 0 && slide_url.length > 0){
            slide_preview_content.innerHTML = null;
            h2.style.removeProperty('color');
            a.href = slide_url;
            a.appendChild(h2);
            slide_preview_content.appendChild(a);
            if(title_color?.dataset?.currentColor) a.style.color = title_color?.dataset?.currentColor;
        }
        if(slide_description.length > 0){
            p.innerText = slide_description;
            slide_preview_content.appendChild(p);
            if(description_color?.dataset?.currentColor) p.style.color = description_color?.dataset?.currentColor;
        }
    }
});

// Slide colors
function updateSlideColor(event){
    const el = event.target;
    const preview_element = el?.closest('tr')?.querySelector('.slide-preview-wrap');
    if((el?.name == 'title-color' || el?.name == 'description-color' || el?.name == 'overlay-bg-left' || el?.name == 'overlay-bg-right')){
        const a  = preview_element.querySelector('.slide-preview-content a');
        const h2 = preview_element.querySelector('.slide-preview-content h2');
        const p  = preview_element.querySelector('.slide-preview-content p');
        if(el?.name == 'title-color'){
            if(a?.style) a.style.color = el?.value;
            if(!a && h2?.style) h2.style.color = el?.value;
        } if(el?.name == 'description-color'){
            if(p?.style) p.style.color = el?.value;
        } else if(el?.name == 'overlay-bg-left' || el?.name == 'overlay-bg-right'){
            const slide_content_input = el.closest('.slide-content-input');
            const overlay_bg_left  = slide_content_input.querySelector('input[name="overlay-bg-left"]');
            const overlay_bg_right = slide_content_input.querySelector('input[name="overlay-bg-right"]');
            preview_element.style.backgroundImage = 'linear-gradient(to right, '+overlay_bg_left?.value+', '+overlay_bg_right?.value+')';
        }
    }
}
document.addEventListener('input', (event) => {
    updateSlideColor(event);
});
document.addEventListener('change', (event) => {
    updateSlideColor(event);
});



// Add new slide
const add_new_slide = document.getElementById('add-new-slide');
if(add_new_slide){
    add_new_slide.addEventListener('click', async (event) => {
        let html = await LoadHTML('[aria-name="slide-row"]');
        html = html?.querySelector('tbody tr');
        
        init_Content_Language(html?.querySelector('[aria-name="tabs-container"][tab-name="language"]'));
        if(typeof i18nTranslate === 'function') i18nTranslate(html);
        
        const slides_table = document.querySelector('.slides table.data-table tbody');
        const tr = slides_table.querySelectorAll('tbody tr');
        const count = html.querySelector('span.count-sl');
        if(count) count.innerText = tr.length+1;
        slides_table.appendChild(html);
    
        const title_color = html.querySelector('.slide-content-input input[name="title-color"]');
        const description_color = html.querySelector('.slide-content-input input[name="description-color"]');
        const overlay_bg_left = html.querySelector('.slide-content-input input[name="overlay-bg-left"]');
        const overlay_bg_right = html.querySelector('.slide-content-input input[name="overlay-bg-right"]');
        if(typeof jscolor === 'function'){
            new jscolor(title_color);
            new jscolor(description_color);
            new jscolor(overlay_bg_left);
            new jscolor(overlay_bg_right);
        }
    });
}





// Tabs && DB Data
document.addEventListener('click', async (event) => {
    if(event.target.tagName === 'LI' || event.target.tagName === 'DIV'){
        const tab_aria = event.target?.closest('[aria-name="tab"]');
        const tab_name = event.target?.closest('[tab-name]')?.getAttribute('tab-name');
        const tabs = event.target.closest('[aria-name="tabs"]');
        if(tab_aria && tab_name && tabs){
            const tables = document.querySelectorAll('table.data-table');
            multipleTableBulkSelection(tables);
            tabs?.children.forEach(tab => {
                if(event.target === tab){
                    tab?.classList.add('active');
                } else {
                    tab?.classList.remove('active');
                }
            });

            const selected_tab  = event.target?.getAttribute('data-tab');
            const data_tabs     = document.querySelectorAll('[aria-name="tabs-container"][tab-name="'+tab_name+'"] > [data-tab]');
            data_tabs.forEach(data_tab => {
                if(data_tab?.getAttribute('data-tab') === selected_tab){
                    const tab_heading = data_tab.querySelector('.tab-container-heading h2');
                    if(tab_heading?.innerHTML.trim()?.length === 0){
                        tab_heading.innerHTML = event?.target?.innerHTML;
                    }
                    data_tab?.classList.add('active');
                } else {
                    data_tab?.classList.remove('active');
                }
            });


            // Special Tabs ([Language Tab])
            if(tab_aria?.classList.contains('language-tabs')){
                const language_tabs = document.querySelectorAll('.language-tabs');
                language_tabs.forEach(language_tab => {
                    if(language_tab !== tab_aria){
                        const target_language_tab_cotainer  = language_tab.querySelector('[aria-name="tabs-container"][aria-name="'+tab_name+'"] > [data-tab="'+selected_tab+'"]');
                        const language_tab_containers       = language_tab.querySelectorAll('[aria-name="tabs-container"][aria-name="'+tab_name+'"] > [data-tab]');
                        language_tab_containers.forEach(container => {
                            if(container === target_language_tab_cotainer){
                                container?.classList.add('active');
                            } else {
                                container?.classList.remove('active');
                            }
                        });
                    }
                });
            }
        }
    } else if(event.target.tagName === 'BUTTON' && event.target.name === 'add-dbdata'){
        const data_wrapper  = event.target.closest('[aria-name="data-wrapper"]'); 
        const data_content  = data_wrapper?.querySelector('.data-content');
        const table         = data_wrapper?.querySelector('table.data-table');
        const tbody         = table?.querySelector('tbody');
        const html          = await LoadHTML();
        const dbdata_row    = html?.querySelector('[aria-name="dbdata-row"] tbody');
        let   tr_default    = dbdata_row?.querySelector('tr.common');

        // Address row
        const active_address = document.querySelector('.frequent-data .tab-data-container[data-tab=addresses].active');
        if(active_address){
            tr_default    = dbdata_row?.querySelector('tr.address');
        }
        console.log(tr_default);
        
        if(data_content && tbody && tr_default){
            tr_default?.classList.add('new');
            if(event.target?.classList.contains('user-access')){
                const user_access_td = html?.querySelector('[aria-name="dbdata-user-access"] tbody tr td');
                const col_2          = tr_default.querySelector('td:nth-child(2)');
                const col_3          = tr_default.querySelector('td:nth-child(3)');
                if(user_access_td && col_2){
                    col_2.replaceWith(user_access_td);
                    col_3?.remove();
                }
            }
            tbody.appendChild(tr_default);
            data_content.scrollTo({top: tr_default.offsetTop, behavior: 'smooth'});
            if(typeof tableDragger === 'function'){
                tableDragger(table, {
                    mode: "row",
                    onlyBody: true
                });
            }
        }
    }
});



// Query Value (Frequent Data)
document.addEventListener('keyup', (event) => {
    if(event.target.tagName === 'INPUT' && event.target?.name === 'data-en'){
        const tr    = event.target.closest('tr');
        const qval  = tr?.querySelector('input[name="query-value"]');
        let data_en = event.target?.value;
            data_en = data_en?.toLowerCase().replaceAll(' ', '-');
        if(qval) qval.value = data_en;
    }
});
document.addEventListener('change', (event) => {
    if(event.target.tagName === 'INPUT' && event.target?.name === 'data-en'){
        event.target.value = event.target?.value?.trim();
        event.target?.dispatchEvent(new Event('keyup', {bubbles: true}));
    }
});





// Send Notification
document.addEventListener('click', async (event) => {
    if(event.target?.tagName === 'BUTTON' && event.target?.name === 'notification'){
        const send_notification = await LoadHTML('[aria-name="send-notification"]');
        await insertPopup(send_notification, ['popup', 'white', 'clickable']);

        const email_content = send_notification.querySelector('[name="email-content"]');
        if(email_content){
            const placeholder = email_content.getAttribute('placeholder'); 
            await tinymce.init({
                selector: '[aria-name="send-notification"] textarea[name="email-content"]',
                plugins: 'quickbars table image link lists media autoresize help',
                toolbar: 'undo redo | formatselect | bold italic | alignleft aligncentre alignright alignjustify | indent outdent | bullist numlist',
                content_style: 'body { font-family: "Nunito", "Arial", sans-serif; font-size:14px }',
                init_instance_callback: function (editor) {
                    const email_template = email_content?.closest('.email-template')?.querySelector('table tbody td');
                    console.log(email_template);
                    editor.on('keyup', function (e) {
                        if(email_template){
                            email_template.innerHTML = editor.getContent();
                        }
                    });
                }
            });
        }
    }
});



document.addEventListener('keyup', event => {
    // SMS Content
    if(event.target?.tagName === 'TEXTAREA' && event.target?.name === 'sms-content'){
        const fields = event.target?.closest('.fields');
        const p = fields.querySelector('.sms-template p');
        if(p) p.innerText = event?.target?.value;
    }


    // Site title (Settings Page)
    else if(event.target?.tagName === 'INPUT' && event.target.name === 'site-title'){
        const settings = event.target?.closest('.settings');
        const favicon_tab_title = settings.querySelector('.favicon-browser-tab .site-title');
        if(event.target?.value.trim().length > 0){
            favicon_tab_title.innerHTML = event.target.value;
        } else {
            favicon_tab_title.innerHTML = 'Site title';
        }
    }
});












// Export/Import Selection
const exim_submit = document.getElementById('export-import-submit');
let export_import_action = document.querySelector('select[one]#export-import-action');
let export_import_data_type = document.querySelector('select[one]#export-import-data-type');
const import_steps = document.querySelector('[aria-name="import-steps"]'); 
if(export_import_data_type){
    export_import_data_type = Choice(export_import_data_type, [
        {value: 'member',   label: '<i class="fa-duotone fa-user-tie"></i> Member(s)'},
        {value: 'committe', label: '<i class="fa-duotone fa-users-viewfinder"></i> Committe(s)'}
    ], {i18next: i18next}).disable();
    choices.push(export_import_data_type);
    export_import_data_type?.passedElement?.element.addEventListener('change', event => {
        const action = export_import_action?.passedElement?.element?.value;
        if(event.target?.value?.trim()?.length > 0 ){
            exim_submit?.style?.removeProperty('display');
            exim_submit.disabled = false;
            if(action === 'export'){
                exim_submit.innerText = 'Export';
            } else if(action === 'import'){
                exim_submit.innerText = 'Import';
                import_steps?.style?.removeProperty('display');
            }
        } else {
            if(exim_submit){
                exim_submit.style.display = 'none';
                exim_submit.disabled = true;
                exim_submit.innerText = '&nbsp;';
            }
        }


        const data_imports = import_steps.querySelectorAll('[data-import]');
        data_imports.forEach(data_import => {
            if(action === 'import' && data_import.getAttribute('data-import') === event.target.value){
                data_import?.classList.add('active');
            } else {
                data_import?.classList.remove('active');
            }
        });
    });
}
if(export_import_action){
    export_import_action = Choice(export_import_action, [
        {value: 'export', label: '<i class="fa-duotone fa-cloud-arrow-up"></i> Export'},
        {value: 'import', label: '<i class="fa-duotone fa-cloud-arrow-down"></i> Import'}
    ], {i18next: i18next});
    choices.push(export_import_action);
    export_import_action?.passedElement?.element.addEventListener('change', event => {
        export_import_data_type.setChoiceByValue('');
        if(event.target?.value?.trim()?.length > 0 && export_import_data_type){
            export_import_data_type.enable();
        } else {
            export_import_data_type.disable();
        }
        if(exim_submit){
            exim_submit.style.display = 'none';
            exim_submit.disabled = true;
            exim_submit.innerText = '&nbsp;';
        }
        if(import_steps) import_steps.style.display = 'none'; 
    });
}
            
// Export/Import Address
const exim_address = {};
const import_columns = document.querySelectorAll('select[one][data-select="import-column"]');
import_columns.forEach(import_data => {
    const column = choices.push(Choice(import_data, [
        // Choice values (Import file columns)
    ], {search: true, i18next: i18next}));
    choices.push(column);
    const select = column?.passedElement?.element;
    if(select?.classList.contains('import-address')){
        if(select.id !== 'division') column.disable();
        exim_address[select.id] = column;
    }
});
if(Object.keys(exim_address).length > 0){
    addressDynamicSelection(exim_address?.division, exim_address?.district, exim_address?.upzilla, exim_address?.union, exim_address?.ward);
}

















function reloadChoiceTranslations(choices, i18next) {
    if(typeof choices === 'object' && typeof updateChoice === 'function'){
        choices.forEach(async (choice) => {
            const placeholder = choice?.passedElement?.element?.getAttribute('place-i18n')?.trim();
            if(typeof i18next !== 'undefined'){
                updateChoice(choice, {placeholder: i18next.t(placeholder), i18next: i18next});
            }
        });
    }
}
reloadChoiceTranslations(choices, i18next);
window.choices = choices;
})();