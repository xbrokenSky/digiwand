var tabFButtonDesktop = o('main-top__tab-button-f-desktop');
var tabFDropBlockDesktop = o('drop-wrap__tab-drob-block-f-desktop');
var tabFDropStateDesktop = true;
var tabSButtonDesktop = o('main-top__tab-button-s-desktop');
var tabSDropBlockDesktop = o('drop-wrap__tab-drob-block-s-desktop');
var tabSDropStateDesktop = false;
var tabTButtonDesktop = o('main-top__tab-button-t-desktop');
var tabTDropBlockDesktop = o('drop-wrap__tab-drob-block-t-desktop');
var tabTDropStateDesktop = false;

tabFButtonDesktop.onclick = function(e) {
    e.stopPropagation();
    if (!tabFDropStateDesktop) {
        tabFButtonDesktop.classList.add('active-tab-button');
        tabFDropBlockDesktop.style.display = 'block';
        tabFDropStateDesktop = true;
        tabSButtonDesktop.classList.remove('active-tab-button');
        tabSDropBlockDesktop.style.display = 'none';
        tabSDropStateDesktop = false;
        tabTButtonDesktop.classList.remove('active-tab-button');
        tabTDropBlockDesktop.style.display = 'none';
        tabTDropStateDesktop = false;
    } else {
        return false;
    }
};

tabSButtonDesktop.onclick = function(e) {
    e.stopPropagation();
    if (!tabSDropStateDesktop) {
        tabSButtonDesktop.classList.add('active-tab-button');
        tabSDropBlockDesktop.style.display = 'block';
        tabSDropStateDesktop = true;
        tabFButtonDesktop.classList.remove('active-tab-button');
        tabFDropBlockDesktop.style.display = 'none';
        tabFDropStateDesktop = false;
        tabTButtonDesktop.classList.remove('active-tab-button');
        tabTDropBlockDesktop.style.display = 'none';
        tabTDropStateDesktop = false;
    } else {
        tabSButtonDesktop.classList.remove('active-tab-button');
        tabSDropBlockDesktop.style.display = 'none';
        tabSDropStateDesktop = false;
        tabFButtonDesktop.classList.add('active-tab-button');
        tabFDropBlockDesktop.style.display = 'block';
        tabFDropStateDesktop = true;
    }
    return false;
};

tabTButtonDesktop.onclick = function(e) {
    e.stopPropagation();
    if (!tabTDropStateDesktop) {
        tabTButtonDesktop.classList.add('active-tab-button');
        tabTDropBlockDesktop.style.display = 'block';
        tabTDropStateDesktop = true;
        tabFButtonDesktop.classList.remove('active-tab-button');
        tabFDropBlockDesktop.style.display = 'none';
        tabFDropStateDesktop = false;
        tabSButtonDesktop.classList.remove('active-tab-button');
        tabSDropBlockDesktop.style.display = 'none';
        tabSDropStateDesktop = false;
    } else {
        tabTButtonDesktop.classList.remove('active-tab-button');
        tabTDropBlockDesktop.style.display = 'none';
        tabTDropStateDesktop = false;
        tabFButtonDesktop.classList.add('active-tab-button');
        tabFDropBlockDesktop.style.display = 'block';
        tabFDropStateDesktop = true;
    }
    return false;
};