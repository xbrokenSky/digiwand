'use strict';

/*
    This file can be used as entry point for webpack!
 */
function o(id) {
    return document.getElementById(id);
}
// --------------------------------------------------------------Mobile UI logic section starting up here

var box = {
    tabFButtonMobile: o('main-top__tab-button-f-mobile'),
    tabFDropBlockMobile: o('drop-wrap__tab-drob-block-f-mobile'),
    tabFDropStateMobile: true,
    tabSButtonMobile: o('main-top__tab-button-s-mobile'),
    tabSDropBlockMobile: o('drop-wrap__tab-drob-block-s-mobile'),
    tabSDropStateMobile: false,
    tabTButtonMobile: o('main-top__tab-button-t-mobile'),
    tabTDropBlockMobile: o('drop-wrap__tab-drob-block-t-mobile'),
    tabTDropStateMobile: false,
    slideCtrlLeftMobile: o('drop-wrap__btn-left-mobile'),
    slideCtrlRightMobile: o('drop-wrap__btn-right-mobile'),
    slideFirstMobile: o('drop-wrap__slide-f-mobile'),
    slideSecondMobile: o('drop-wrap__slide-s-mobile'),
    slideThirdMobile: o('drop-wrap__slide-t-mobile'),
    slideCurrentMobile: 1,
    regButtonMobile: o('header__reg-button-mobile'),
    regDropBlockMobile: o('header__reg-drop-block-mobile'),
    regDropStateMobile: false,
    regConfirmBtnMobile: o('header__reg-confirm-mobile'),
    regMailInputMobile: o('header__reg-mail-mobile'),
    regPassInputMobile: o('header__reg-pass-mobile'),
    regMailMsgMobile: o('header__mail-msg-mobile'),
    regPassMsgMobile: o('header__pass-masg-mobile'),
};

// box.regButtonMobile.onclick = function(e) {
//     e.stopPropagation();
//     if(!box.regDropStateMobile) {
//         box.regDropBlockMobile.style.top = '63.5px';
//         box.regDropStateMobile = true;
//     } else {
//         box.regDropBlockMobile.style.top = '';
//         box.regDropStateMobile = false;
//     }
//     return false;
// };

// box.regConfirmBtnMobile.onclick = function(e) {
//     e.stopPropagation();
//     var mail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     var pass =/^[a-zA-Z0-9-+~@()!|{}]+$/;
//     if (box.regMailInputMobile.value.length < 8 || !mail.test(box.regMailInputMobile.value)) {
//         box.regMailMsgMobile.innerText = 'Недопустимая длина или название ящика';
//         box.regMailMsgMobile.classList.add('reg-invalid');
//         box.regMailMsgMobile.classList.remove('reg-valid');
//     } else {
//         box.regMailMsgMobile.innerText = 'Почтовый ящик указан верно';
//         box.regMailMsgMobile.classList.add('reg-valid');
//         box.regMailMsgMobile.classList.remove('reg-invalid');
//     }
//     if (box.regPassInputMobile.value.length < 8 || !pass.test(box.regPassInputMobile.value)) {
//         box.regPassMsgMobile.innerText = 'Недопустимая длина или символы пароля';
//         box.regPassMsgMobile.classList.add('reg-invalid');
//         box.regPassMsgMobile.classList.remove('reg-valid');
//     } else {
//         box.regPassMsgMobile.innerText = 'Пароль указан верно';
//         box.regPassMsgMobile.classList.add('reg-valid');
//         box.regPassMsgMobile.classList.remove('reg-invalid');
//     }
//     return false;
// };

// box.tabFButtonMobile.onclick = function(e) {
//     e.stopPropagation();
//     if (!box.tabFDropStateMobile) {
//         box.tabFButtonMobile.classList.add('active-tab-button');
//         box.tabFDropBlockMobile.style.display = 'block';
//         box.tabFDropStateMobile = true;
//         box.tabSButtonMobile.classList.remove('active-tab-button');
//         box.tabSDropBlockMobile.style.display = 'none';
//         box.tabSDropStateMobile = false;
//         box.tabTButtonMobile.classList.remove('active-tab-button');
//         box.tabTDropBlockMobile.style.display = 'none';
//         box.tabTDropStateMobile = false;
//     } else {
//         return false;
//     }
// };

// box.tabSButtonMobile.onclick = function(e) {
//     e.stopPropagation();
//     if (!box.tabSDropStateMobile) {
//         box.tabSButtonMobile.classList.add('active-tab-button');
//         box.tabSDropBlockMobile.style.display = 'block';
//         box.tabSDropStateMobile = true;
//         box.tabFButtonMobile.classList.remove('active-tab-button');
//         box.tabFDropBlockMobile.style.display = 'none';
//         box.tabFDropStateMobile = false;
//         box.tabTButtonMobile.classList.remove('active-tab-button');
//         box.tabTDropBlockMobile.style.display = 'none';
//         box.tabTDropStateMobile = false;
//     } else {
//         box.tabSButtonMobile.classList.remove('active-tab-button');
//         box.tabSDropBlockMobile.style.display = 'none';
//         box.tabSDropStateMobile = false;
//         box.tabFButtonMobile.classList.add('active-tab-button');
//         box.tabFDropBlockMobile.style.display = 'block';
//         box.tabFDropStateMobile = true;
//     }
//     return false;
// };

// box.tabTButtonMobile.onclick = function(e) {
//     e.stopPropagation();
//     if (!box.tabTDropStateMobile) {
//         box.tabTButtonMobile.classList.add('active-tab-button');
//         box.tabTDropBlockMobile.style.display = 'block';
//         box.tabTDropStateMobile = true;
//         box.tabFButtonMobile.classList.remove('active-tab-button');
//         box.tabFDropBlockMobile.style.display = 'none';
//         box.tabFDropStateMobile = false;
//         box.tabSButtonMobile.classList.remove('active-tab-button');
//         box.tabSDropBlockMobile.style.display = 'none';
//         box.tabSDropStateMobile = false;
//     } else {
//         box.tabTButtonMobile.classList.remove('active-tab-button');
//         box.tabTDropBlockMobile.style.display = 'none';
//         box.tabTDropStateMobile = false;
//         box.tabFButtonMobile.classList.add('active-tab-button');
//         box.tabFDropBlockMobile.style.display = 'block';
//         box.tabFDropStateMobile = true;
//     }
//     return false;
// };

// box.slideCtrlRightMobile.onclick = function(e) {
//     e.stopPropagation();
//     if(box.slideCurrentMobile >= 1 && box.slideCurrentMobile < 3) {
//         box.slideCurrentMobile += 1;
//     } else if(box.slideCurrentMobile === 3) {
//         box.slideCurrentMobile = 1;
//     }
//     return slideShow(box.slideCurrentMobile);
// };

// box.slideCtrlLeftMobile.onclick = function(e) {
//     e.stopPropagation();
//     if(box.slideCurrentMobile > 1 && box.slideCurrentMobile <= 3) {
//         box.slideCurrentMobile -= 1;
//     } else if(box.slideCurrentMobile === 1) {
//         box.slideCurrentMobile = 3;
//     }
//     return slideShow(box.slideCurrentMobile);
// };

// function slideShow(currentSlide) {
//     if(currentSlide === 1) {
//         box.slideFirstMobile.style.left = '2.5%';
//         box.slideFirstMobile.style.opacity = '1';
//         box.slideSecondMobile.style.left = 'calc(100% + 95vw)';
//         box.slideSecondMobile.style.opacity = '0';
//         box.slideThirdMobile.style.left = 'calc(100% + 95vw + 95vw)';
//         box.slideThirdMobile.style.opacity = '0';
//     } else if(currentSlide === 2) {
//         box.slideSecondMobile.style.left = '2.5%';
//         box.slideSecondMobile.style.opacity = '1';
//         box.slideFirstMobile.style.left = 'calc(100% + 95vw)';
//         box.slideFirstMobile.style.opacity = '0';
//         box.slideThirdMobile.style.left = 'calc(100% + 95vw + 95vw)';
//         box.slideThirdMobile.style.opacity = '0';
//     } else if(currentSlide === 3) {
//         box.slideThirdMobile.style.left= '2.5%';
//         box.slideThirdMobile.style.opacity = '1';
//         box.slideFirstMobile.style.left = 'calc(100% + 95vw)';
//         box.slideFirstMobile.style.opacity = '0';
//         box.slideSecondMobile.style.left = 'calc(100% + 95vw + 95vw)';
//         box.slideSecondMobile.style.opacity = '0';
//     }
//     return false;
// }

// ---------------------------------------------------------desktop UI logic starting up here

var desk = {
    tabFButtonDesktop: o('main-top__tab-button-f-desktop'),
    tabFDropBlockDesktop: o('drop-wrap__tab-drob-block-f-desktop'),
    tabFDropStateDesktop: true,
    tabSButtonDesktop: o('main-top__tab-button-s-desktop'),
    tabSDropBlockDesktop: o('drop-wrap__tab-drob-block-s-desktop'),
    tabSDropStateDesktop: false,
    tabTButtonDesktop: o('main-top__tab-button-t-desktop'),
    tabTDropBlockDesktop: o('drop-wrap__tab-drob-block-t-desktop'),
    tabTDropStateDesktop: false,
    slideCtrlLeftDesktop: o('drop-wrap__btn-left-desktop'),
    slideCtrlRightDesktop: o('drop-wrap__btn-right-desktop'),
    slideFirstDesktop: o('drop-wrap__slide-f-desktop'),
    slideSecondDesktop: o('drop-wrap__slide-s-desktop'),
    slideThirdDesktop: o('drop-wrap__slide-t-desktop'),
    slideCurrentDesktop: 1,
    regButtonDesktop: o('header__reg-button-desktop'),
    regDropBlockDesktop: o('header__reg-drop-block-desktop'),
    regDropStateDesktop: false,
    regConfirmBtnDesktop: o('header__reg-confirm-desktop'),
    regMailInputDesktop: o('header__reg-mail-desktop'),
    regPassInputDesktop: o('header__reg-pass-desktop'),
    regMailMsgDesktop: o('header__mail-msg-desktop'),
    regPassMsgDesktop: o('header__pass-masg-desktop'),
};

// desk.regButtonDesktop.onclick = function(e) {
//     e.stopPropagation();
//     if(!desk.regDropStateDesktop) {
//         desk.regDropBlockDesktop.style.top = '45px';
//         desk.regDropStateDesktop = true;
//     } else {
//         desk.regDropBlockDesktop.style.top = '';
//         desk.regDropStateDesktop = false;
//     }
//     return false;
// };

// desk.regConfirmBtnDesktop.onclick = function(e) {
//     e.stopPropagation();
//     var mail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     var pass =/^[a-zA-Z0-9-+~@()!|{}]+$/;
//     if (desk.regMailInputDesktop.value.length < 8 || !mail.test(desk.regMailInputDesktop.value)) {
//         desk.regMailMsgDesktop.innerText = 'Недопустимая длина или название ящика';
//         desk.regMailMsgDesktop.classList.add('reg-invalid');
//         desk.regMailMsgDesktop.classList.remove('reg-valid');
//     } else {
//         desk.regMailMsgDesktop.innerText = 'Почтовый ящик указан верно';
//         desk.regMailMsgDesktop.classList.add('reg-valid');
//         desk.regMailMsgDesktop.classList.remove('reg-invalid');
//     }
//     if (desk.regPassInputDesktop.value.length < 8 || !pass.test(desk.regPassInputDesktop.value)) {
//         desk.regPassMsgDesktop.innerText = 'Недопустимая длина или символы пароля';
//         desk.regPassMsgDesktop.classList.add('reg-invalid');
//         desk.regPassMsgDesktop.classList.remove('reg-valid');
//     } else {
//         desk.regPassMsgDesktop.innerText = 'Пароль указан верно';
//         desk.regPassMsgDesktop.classList.add('reg-valid');
//         desk.regPassMsgDesktop.classList.remove('reg-invalid');
//     }
//     return false;
// };

desk.tabFButtonDesktop.onclick = function(e) {
    e.stopPropagation();
    if (!desk.tabFDropStateDesktop) {
        desk.tabFButtonDesktop.classList.add('active-tab-button');
        desk.tabFDropBlockDesktop.style.display = 'block';
        desk.tabFDropStateDesktop = true;
        desk.tabSButtonDesktop.classList.remove('active-tab-button');
        desk.tabSDropBlockDesktop.style.display = 'none';
        desk.tabSDropStateDesktop = false;
        desk.tabTButtonDesktop.classList.remove('active-tab-button');
        desk.tabTDropBlockDesktop.style.display = 'none';
        desk.tabTDropStateDesktop = false;
    } else {
        return false;
    }
};

desk.tabSButtonDesktop.onclick = function(e) {
    e.stopPropagation();
    if (!desk.tabSDropStateDesktop) {
        desk.tabSButtonDesktop.classList.add('active-tab-button');
        desk.tabSDropBlockDesktop.style.display = 'block';
        desk.tabSDropStateDesktop = true;
        desk.tabFButtonDesktop.classList.remove('active-tab-button');
        desk.tabFDropBlockDesktop.style.display = 'none';
        desk.tabFDropStateDesktop = false;
        desk.tabTButtonDesktop.classList.remove('active-tab-button');
        desk.tabTDropBlockDesktop.style.display = 'none';
        desk.tabTDropStateDesktop = false;
    } else {
        desk.tabSButtonDesktop.classList.remove('active-tab-button');
        desk.tabSDropBlockDesktop.style.display = 'none';
        desk.tabSDropStateDesktop = false;
        desk.tabFButtonDesktop.classList.add('active-tab-button');
        desk.tabFDropBlockDesktop.style.display = 'block';
        desk.tabFDropStateDesktop = true;
    }
    return false;
};

desk.tabTButtonDesktop.onclick = function(e) {
    e.stopPropagation();
    if (!desk.tabTDropStateDesktop) {
        desk.tabTButtonDesktop.classList.add('active-tab-button');
        desk.tabTDropBlockDesktop.style.display = 'block';
        desk.tabTDropStateDesktop = true;
        desk.tabFButtonDesktop.classList.remove('active-tab-button');
        desk.tabFDropBlockDesktop.style.display = 'none';
        desk.tabFDropStateDesktop = false;
        desk.tabSButtonDesktop.classList.remove('active-tab-button');
        desk.tabSDropBlockDesktop.style.display = 'none';
        desk.tabSDropStateDesktop = false;
    } else {
        desk.tabTButtonDesktop.classList.remove('active-tab-button');
        desk.tabTDropBlockDesktop.style.display = 'none';
        desk.tabTDropStateDesktop = false;
        desk.tabFButtonDesktop.classList.add('active-tab-button');
        desk.tabFDropBlockDesktop.style.display = 'block';
        desk.tabFDropStateDesktop = true;
    }
    return false;
};

desk.slideCtrlRightDesktop.onclick = function(e) {
    e.stopPropagation();
    if(desk.slideCurrentDesktop >= 1 && desk.slideCurrentDesktop < 3) {
        desk.slideCurrentDesktop += 1;
    } else if(desk.slideCurrentDesktop === 3) {
        desk.slideCurrentDesktop = 1;
    }
    return slideShowD(desk.slideCurrentDesktop);
};

desk.slideCtrlLeftDesktop.onclick = function(e) {
    e.stopPropagation();
    if(desk.slideCurrentDesktop > 1 && desk.slideCurrentDesktop <= 3) {
        desk.slideCurrentDesktop -= 1;
    } else if(desk.slideCurrentDesktop === 1) {
        desk.slideCurrentDesktop = 3;
    }
    return slideShowD(desk.slideCurrentDesktop);
};

function slideShowD(currentSlide) {
    if(currentSlide === 1) {
        desk.slideFirstDesktop.style.left = '2.5%';
        desk.slideFirstDesktop.style.opacity = '1';
        desk.slideSecondDesktop.style.left = 'calc(100% + 95vw)';
        desk.slideSecondDesktop.style.opacity = '0';
        desk.slideThirdDesktop.style.left = 'calc(100% + 95vw + 95vw)';
        desk.slideThirdDesktop.style.opacity = '0';
    } else if(currentSlide === 2) {
        desk.slideSecondDesktop.style.left = '2.5%';
        desk.slideSecondDesktop.style.opacity = '1';
        desk.slideFirstDesktop.style.left = 'calc(100% + 95vw)';
        desk.slideFirstDesktop.style.opacity = '0';
        desk.slideThirdDesktop.style.left = 'calc(100% + 95vw + 95vw)';
        desk.slideThirdDesktop.style.opacity = '0';
    } else if(currentSlide === 3) {
        desk.slideThirdDesktop.style.left= '2.5%';
        desk.slideThirdDesktop.style.opacity = '1';
        desk.slideFirstDesktop.style.left = 'calc(100% + 95vw)';
        desk.slideFirstDesktop.style.opacity = '0';
        desk.slideSecondDesktop.style.left = 'calc(100% + 95vw + 95vw)';
        desk.slideSecondDesktop.style.opacity = '0';
    }
    return false;
}