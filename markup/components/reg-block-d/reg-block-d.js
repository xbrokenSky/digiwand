var regButtonDesktop = o('header__reg-button-desktop');
var regDropBlockDesktop = o('header__reg-drop-block-desktop');
var regDropStateDesktop = false;
var regConfirmBtnDesktop = o('header__reg-confirm-desktop');

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

$(regConfirmBtnDesktop).click(function() {
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