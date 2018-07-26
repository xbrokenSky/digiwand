function o(id) {
    return document.getElementById(id);
}

var regButtonMobile = o('header__reg-button-mobile');
var regDropBlockMobile = o('header__reg-drop-block-mobile');
var regDropStateMobile = false;
var regConfirmBtnMobile = o('header__reg-confirm-mobile');

$(regButtonMobile).click(function() {
    $('[data-remodal-id=modal-m]').remodal().open();
});

$(regConfirmBtnMobile).click(function() {
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
});