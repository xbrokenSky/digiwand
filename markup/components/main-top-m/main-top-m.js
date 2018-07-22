var tabFButtonMobile = o('main-top__tab-button-f-mobile');
var tabFDropBlockMobile = o('drop-wrap__tab-drob-block-f-mobile');
var tabFDropStateMobile = true;
var tabSButtonMobile = o('main-top__tab-button-s-mobile');
var tabSDropBlockMobile = o('drop-wrap__tab-drob-block-s-mobile');
var tabSDropStateMobile = false;
var tabTButtonMobile = o('main-top__tab-button-t-mobile');
var tabTDropBlockMobile = o('drop-wrap__tab-drob-block-t-mobile');
var tabTDropStateMobile = false;

tabFButtonMobile.onclick = function(e) {
    e.stopPropagation();
    if (!tabFDropStateMobile) {
        tabFButtonMobile.classList.add('active-tab-button');
        tabFDropBlockMobile.style.display = 'block';
        tabFDropStateMobile = true;
        tabSButtonMobile.classList.remove('active-tab-button');
        tabSDropBlockMobile.style.display = 'none';
        tabSDropStateMobile = false;
        tabTButtonMobile.classList.remove('active-tab-button');
        tabTDropBlockMobile.style.display = 'none';
        tabTDropStateMobile = false;
    } else {
        return false;
    }
};

tabSButtonMobile.onclick = function(e) {
    e.stopPropagation();
    if (!tabSDropStateMobile) {
        tabSButtonMobile.classList.add('active-tab-button');
        tabSDropBlockMobile.style.display = 'block';
        tabSDropStateMobile = true;
        tabFButtonMobile.classList.remove('active-tab-button');
        tabFDropBlockMobile.style.display = 'none';
        tabFDropStateMobile = false;
        tabTButtonMobile.classList.remove('active-tab-button');
        tabTDropBlockMobile.style.display = 'none';
        tabTDropStateMobile = false;
    } else {
        tabSButtonMobile.classList.remove('active-tab-button');
        tabSDropBlockMobile.style.display = 'none';
        tabSDropStateMobile = false;
        tabFButtonMobile.classList.add('active-tab-button');
        tabFDropBlockMobile.style.display = 'block';
        tabFDropStateMobile = true;
    }
    return false;
};

tabTButtonMobile.onclick = function(e) {
    e.stopPropagation();
    if (!tabTDropStateMobile) {
        tabTButtonMobile.classList.add('active-tab-button');
        tabTDropBlockMobile.style.display = 'block';
        tabTDropStateMobile = true;
        tabFButtonMobile.classList.remove('active-tab-button');
        tabFDropBlockMobile.style.display = 'none';
        tabFDropStateMobile = false;
        tabSButtonMobile.classList.remove('active-tab-button');
        tabSDropBlockMobile.style.display = 'none';
        tabSDropStateMobile = false;
    } else {
        tabTButtonMobile.classList.remove('active-tab-button');
        tabTDropBlockMobile.style.display = 'none';
        tabTDropStateMobile = false;
        tabFButtonMobile.classList.add('active-tab-button');
        tabFDropBlockMobile.style.display = 'block';
        tabFDropStateMobile = true;
    }
    return false;
};