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

$(document).ready(function() {
    $('#header__reg-form-mobile').validate({
        rules: {
            mail: {
                required: true,
                minlength: 5,
                maxlength: 16,
                email: true
            },
            password: {
                required: true,
                minlength: 8,
                maxlength: 16,
            }
        },
        messages: {
            mail: {
                required: "Это поле обязательно для заполнения",
                minlength: "Логин должен быть минимум 5 символов",
                maxlength: "Максимальное число символов - 16",
                email: "Введите корректный адрес электронной почты"
            },
            password: {
                required: "Это поле обязательно для заполнения",
                minlength: "Логин должен быть минимум 8 символов",
                maxlength: "Максимальное число символов - 16",
            }
        }
    });
    $('#header__reg-form-desktop').validate({
        rules: {
            mail: {
                required: true,
                minlength: 5,
                maxlength: 16,
                email: true
            },
            password: {
                required: true,
                minlength: 8,
                maxlength: 16,
            }
        },
        messages: {
            mail: {
                required: "Это поле обязательно для заполнения",
                minlength: "Логин должен быть минимум 5 символов",
                maxlength: "Максимальное число символов - 16",
                email: "Введите корректный адрес электронной почты"
            },
            password: {
                required: "Это поле обязательно для заполнения",
                minlength: "Логин должен быть минимум 8 символов",
                maxlength: "Максимальное число символов - 16",
            }
        }
    });
});

// regConfirmBtnMobile.onclick = function(e) {
//     e.stopPropagation();
//     var mail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     var pass =/^[a-zA-Z0-9-+~@()!|{}]+$/;
//     if (regMailInputMobile.value.length < 8 || !mail.test(regMailInputMobile.value)) {
//         regMailMsgMobile.innerText = 'Недопустимая длина или название ящика';
//         regMailMsgMobile.classList.add('reg-invalid');
//         regMailMsgMobile.classList.remove('reg-valid');
//     } else {
//         regMailMsgMobile.innerText = 'Почтовый ящик указан верно';
//         regMailMsgMobile.classList.add('reg-valid');
//         regMailMsgMobile.classList.remove('reg-invalid');
//     }
//     if (regPassInputMobile.value.length < 8 || !pass.test(box.regPassInputMobile.value)) {
//         regPassMsgMobile.innerText = 'Недопустимая длина или символы пароля';
//         regPassMsgMobile.classList.add('reg-invalid');
//         regPassMsgMobile.classList.remove('reg-valid');
//     } else {
//         regPassMsgMobile.innerText = 'Пароль указан верно';
//         regPassMsgMobile.classList.add('reg-valid');
//         regPassMsgMobile.classList.remove('reg-invalid');
//     }
//     return false;
// };

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

// regConfirmBtnDesktop.onclick = function(e) {
//     e.stopPropagation();
//     var mail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     var pass =/^[a-zA-Z0-9-+~@()!|{}]+$/;
//     if (regMailInputDesktop.value.length < 8 || !mail.test(regMailInputDesktop.value)) {
//         regMailMsgDesktop.innerText = 'Недопустимая длина или название ящика';
//         regMailMsgDesktop.classList.add('reg-invalid');
//         regMailMsgDesktop.classList.remove('reg-valid');
//     } else {
//         regMailMsgDesktop.innerText = 'Почтовый ящик указан верно';
//         regMailMsgDesktop.classList.add('reg-valid');
//         regMailMsgDesktop.classList.remove('reg-invalid');
//     }
//     if (regPassInputDesktop.value.length < 8 || !pass.test(desk.regPassInputDesktop.value)) {
//         regPassMsgDesktop.innerText = 'Недопустимая длина или символы пароля';
//         regPassMsgDesktop.classList.add('reg-invalid');
//         regPassMsgDesktop.classList.remove('reg-valid');
//     } else {
//         regPassMsgDesktop.innerText = 'Пароль указан верно';
//         regPassMsgDesktop.classList.add('reg-valid');
//         regPassMsgDesktop.classList.remove('reg-invalid');
//     }
//     return false;
// };