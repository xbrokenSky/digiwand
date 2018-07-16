'use strict';

var tabFButtonMobile = o('main-top__tab-button-f-mobile');
var tabFDropBlockMobile = o('drop-wrap__tab-drob-block-f-mobile');
var tabFDropStateMobile = true;
var tabSButtonMobile = o('main-top__tab-button-s-mobile');
var tabSDropBlockMobile = o('drop-wrap__tab-drob-block-s-mobile');
var tabSDropStateMobile = false;
var tabTButtonMobile = o('main-top__tab-button-t-mobile');
var tabTDropBlockMobile = o('drop-wrap__tab-drob-block-t-mobile');
var tabTDropStateMobile = false;
var slideCtrlLeftMobile = o('drop-wrap__btn-left-mobile');
var slideCtrlRightMobile = o('drop-wrap__btn-right-mobile');
var slideFirstMobile = o('drop-wrap__slide-f-mobile');
var slideSecondMobile = o('drop-wrap__slide-s-mobile');
var slideThirdMobile = o('drop-wrap__slide-t-mobile');
var slideCurrentMobile = 1;

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

slideCtrlRightMobile.onclick = function(e) {
    e.stopPropagation();
    if(slideCurrentMobile >= 1 && slideCurrentMobile < 3) {
        slideCurrentMobile += 1;
    } else if(slideCurrentMobile === 3) {
        slideCurrentMobile = 1;
    }
    return slideShow(slideCurrentMobile);
};

slideCtrlLeftMobile.onclick = function(e) {
    e.stopPropagation();
    if(slideCurrentMobile > 1 && slideCurrentMobile <= 3) {
        slideCurrentMobile -= 1;
    } else if(slideCurrentMobile === 1) {
        slideCurrentMobile = 3;
    }
    return slideShow(slideCurrentMobile);
};

function slideShow(currentSlide) {
    if(currentSlide === 1) {
        slideFirstMobile.style.left = '2.5%';
        slideFirstMobile.style.opacity = '1';
        slideSecondMobile.style.left = 'calc(100% + 95vw)';
        slideSecondMobile.style.opacity = '0';
        slideThirdMobile.style.left = 'calc(100% + 95vw + 95vw)';
        slideThirdMobile.style.opacity = '0';
    } else if(currentSlide === 2) {
        slideSecondMobile.style.left = '2.5%';
        slideSecondMobile.style.opacity = '1';
        slideFirstMobile.style.left = 'calc(100% + 95vw)';
        slideFirstMobile.style.opacity = '0';
        slideThirdMobile.style.left = 'calc(100% + 95vw + 95vw)';
        slideThirdMobile.style.opacity = '0';
    } else if(currentSlide === 3) {
        slideThirdMobile.style.left= '2.5%';
        slideThirdMobile.style.opacity = '1';
        slideFirstMobile.style.left = 'calc(100% + 95vw)';
        slideFirstMobile.style.opacity = '0';
        slideSecondMobile.style.left = 'calc(100% + 95vw + 95vw)';
        slideSecondMobile.style.opacity = '0';
    }
    return false;
}

// ---------------------------------------------------------------desktop UI logic starting up here

var tabFButtonDesktop = o('main-top__tab-button-f-desktop');
var tabFDropBlockDesktop = o('drop-wrap__tab-drob-block-f-desktop');
var tabFDropStateDesktop = true;
var tabSButtonDesktop = o('main-top__tab-button-s-desktop');
var tabSDropBlockDesktop = o('drop-wrap__tab-drob-block-s-desktop');
var tabSDropStateDesktop = false;
var tabTButtonDesktop = o('main-top__tab-button-t-desktop');
var tabTDropBlockDesktop = o('drop-wrap__tab-drob-block-t-desktop');
var tabTDropStateDesktop = false;
var slideCtrlLeftDesktop = o('drop-wrap__btn-left-desktop');
var slideCtrlRightDesktop = o('drop-wrap__btn-right-desktop');
var slideFirstDesktop = o('drop-wrap__slide-f-desktop');
var slideSecondDesktop = o('drop-wrap__slide-s-desktop');
var slideThirdDesktop = o('drop-wrap__slide-t-desktop');
var slideCurrentDesktop = 1;

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

slideCtrlRightDesktop.onclick = function(e) {
    e.stopPropagation();
    if(slideCurrentDesktop >= 1 && slideCurrentDesktop < 3) {
        slideCurrentDesktop += 1;
    } else if(slideCurrentDesktop === 3) {
        slideCurrentDesktop = 1;
    }
    return slideShowD(slideCurrentDesktop);
};

slideCtrlLeftDesktop.onclick = function(e) {
    e.stopPropagation();
    if(slideCurrentDesktop > 1 && slideCurrentDesktop <= 3) {
        slideCurrentDesktop -= 1;
    } else if(slideCurrentDesktop === 1) {
        slideCurrentDesktop = 3;
    }
    return slideShowD(slideCurrentDesktop);
};

function slideShowD(currentSlide) {
    if(currentSlide === 1) {
        slideFirstDesktop.style.left = '2.5%';
        slideFirstDesktop.style.opacity = '1';
        slideSecondDesktop.style.left = 'calc(100% + 95vw)';
        slideSecondDesktop.style.opacity = '0';
        slideThirdDesktop.style.left = 'calc(100% + 95vw + 95vw)';
        slideThirdDesktop.style.opacity = '0';
    } else if(currentSlide === 2) {
        slideSecondDesktop.style.left = '2.5%';
        slideSecondDesktop.style.opacity = '1';
        slideFirstDesktop.style.left = 'calc(100% + 95vw)';
        slideFirstDesktop.style.opacity = '0';
        slideThirdDesktop.style.left = 'calc(100% + 95vw + 95vw)';
        slideThirdDesktop.style.opacity = '0';
    } else if(currentSlide === 3) {
        slideThirdDesktop.style.left= '2.5%';
        slideThirdDesktop.style.opacity = '1';
        slideFirstDesktop.style.left = 'calc(100% + 95vw)';
        slideFirstDesktop.style.opacity = '0';
        slideSecondDesktop.style.left = 'calc(100% + 95vw + 95vw)';
        slideSecondDesktop.style.opacity = '0';
    }
    return false;
}
'use strict';
function o(id) {
    return document.getElementById(id);
}

var regButtonMobile = o('header__reg-button-mobile');
var regDropBlockMobile = o('header__reg-drop-block-mobile');
var regDropStateMobile = false;
var regConfirmBtnMobile = o('header__reg-confirm-mobile');
var regMailInputMobile = o('header__reg-mail-mobile');
var regPassInputMobile = o('header__reg-pass-mobile');
var regMailMsgMobile = o('header__mail-msg-mobile');
var regPassMsgMobile = o('header__pass-masg-mobile');

regButtonMobile.onclick = function(e) {
    e.stopPropagation();
    if(!regDropStateMobile) {
        regDropBlockMobile.style.top = '63.5px';
        regDropStateMobile = true;
    } else {
        regDropBlockMobile.style.top = '';
        regDropStateMobile = false;
    }
    return false;
};

regConfirmBtnMobile.onclick = function(e) {
    e.stopPropagation();
    var mail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var pass =/^[a-zA-Z0-9-+~@()!|{}]+$/;
    if (regMailInputMobile.value.length < 8 || !mail.test(regMailInputMobile.value)) {
        regMailMsgMobile.innerText = 'Недопустимая длина или название ящика';
        regMailMsgMobile.classList.add('reg-invalid');
        regMailMsgMobile.classList.remove('reg-valid');
    } else {
        regMailMsgMobile.innerText = 'Почтовый ящик указан верно';
        regMailMsgMobile.classList.add('reg-valid');
        regMailMsgMobile.classList.remove('reg-invalid');
    }
    if (regPassInputMobile.value.length < 8 || !pass.test(box.regPassInputMobile.value)) {
        regPassMsgMobile.innerText = 'Недопустимая длина или символы пароля';
        regPassMsgMobile.classList.add('reg-invalid');
        regPassMsgMobile.classList.remove('reg-valid');
    } else {
        regPassMsgMobile.innerText = 'Пароль указан верно';
        regPassMsgMobile.classList.add('reg-valid');
        regPassMsgMobile.classList.remove('reg-invalid');
    }
    return false;
};

// ------------------------------------------------desktop UI logic starts up here

var regButtonDesktop = o('header__reg-button-desktop');
var regDropBlockDesktop = o('header__reg-drop-block-desktop');
var regDropStateDesktop = false;
var regConfirmBtnDesktop = o('header__reg-confirm-desktop');
var regMailInputDesktop = o('header__reg-mail-desktop');
var regPassInputDesktop = o('header__reg-pass-desktop');
var regMailMsgDesktop = o('header__mail-msg-desktop');
var regPassMsgDesktop = o('header__pass-masg-desktop');

regButtonDesktop.onclick = function(e) {
    e.stopPropagation();
    if(!regDropStateDesktop) {
        regDropBlockDesktop.style.top = '45px';
        regDropStateDesktop = true;
    } else {
        regDropBlockDesktop.style.top = '';
        regDropStateDesktop = false;
    }
    return false;
};

regConfirmBtnDesktop.onclick = function(e) {
    e.stopPropagation();
    var mail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var pass =/^[a-zA-Z0-9-+~@()!|{}]+$/;
    if (regMailInputDesktop.value.length < 8 || !mail.test(regMailInputDesktop.value)) {
        regMailMsgDesktop.innerText = 'Недопустимая длина или название ящика';
        regMailMsgDesktop.classList.add('reg-invalid');
        regMailMsgDesktop.classList.remove('reg-valid');
    } else {
        regMailMsgDesktop.innerText = 'Почтовый ящик указан верно';
        regMailMsgDesktop.classList.add('reg-valid');
        regMailMsgDesktop.classList.remove('reg-invalid');
    }
    if (regPassInputDesktop.value.length < 8 || !pass.test(desk.regPassInputDesktop.value)) {
        regPassMsgDesktop.innerText = 'Недопустимая длина или символы пароля';
        regPassMsgDesktop.classList.add('reg-invalid');
        regPassMsgDesktop.classList.remove('reg-valid');
    } else {
        regPassMsgDesktop.innerText = 'Пароль указан верно';
        regPassMsgDesktop.classList.add('reg-valid');
        regPassMsgDesktop.classList.remove('reg-invalid');
    }
    return false;
};