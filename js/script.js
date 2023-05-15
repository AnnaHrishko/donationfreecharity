$('.gumb').click(function(){
	$(this).toggleClass('active')
	$('.header-inner__right-part').slideToggle()
	$('.header-inner__right-part').toggleClass('active')
	$('header').toggleClass('active')
	$('html').toggleClass('hidden')
})

$(".open-password").click(function(){
    $('.input-password').addClass('change-color')
	$(".open-password").hide();
    $(".closed-password").show();
    $(".input-password").attr("type","text");
});

$(".closed-password").click(function(){
    $('.input-password').removeClass('change-color')
    $(".closed-password").hide();
    $(".open-password").show();
    $(".input-password").attr("type","password");
});

$(function() {
    $.validator.addMethod("emailRegex", function(value, element) {
        return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i.test(value);
    }, "");
});

$(function() {
    $(".form-registration").validate({
        rules: {
        	"name": {
                required: true,
            },
            "charity": {
                required: true,
            },
            "email": {
                required: true,
                emailRegex: true,
            },
            "password": {
                required: true,
            },
        },
        messages: {
        	"name": {
                required: "Обов'язкове поле",
            },
            "charity": {
                required: "Обов'язкове поле",
            },
            "email": {
                required: "Введіть вашу електронну адресу",
                emailRegex: "Формат електронної пошти невірний",
            },
            "password": {
                required: "Обов'язкове поле",
            },
        },
    });
});

$(function() {
    $(".form-login").validate({
        rules: {
            "email": {
                required: true,
                emailRegex: true,
            },
            "password": {
                required: true,
            },
        },
        messages: {
            "email": {
                required: "Введіть вашу електронну адресу",
                emailRegex: "Формат електронної пошти невірний",
            },
            "password": {
                required: "Обов'язкове поле",
            },
        },
    });
});

$(function() {
    $(".form-restore-password").validate({
        rules: {
            "email": {
                required: true,
                emailRegex: true,
            },
            "password": {
                required: true,
            },
        },
        messages: {
            "email": {
                required: "Введіть вашу електронну адресу",
                emailRegex: "Формат електронної пошти невірний",
            },
            "password": {
                required: "Обов'язкове поле",
            },
        },
    });
});


$('.popup-close').click(function(){
    $('.main-popup-wrap').fadeOut(200);
    $('body').removeClass('hidden');
    return false
})
$('.popup-closer').click(function(){
    $('.main-popup-wrap').fadeOut(200);
    $('body').removeClass('hidden');
    return false
})

$('.open-popup-login').click(function(){
    $('.popupLogin').fadeIn(300);
     $('body').addClass('hidden');
     return false
})

$('.open-popup-registration').click(function(){
    $('.popupRegistration').fadeIn(300);
     $('body').addClass('hidden');
     return false
})

$('.have-account').click(function(){
    $('.popupLogin').fadeIn(300);
    $('body').addClass('hidden');
     return false
})

$('.have-account').click(function(){
    $('.popupRegistration').fadeOut()
    $('.popupLogin').fadeIn()   
})

$('.registration-link-open').click(function(){
    $('.popupRegistration').fadeIn(300);
    $('body').addClass('hidden');
     return false
})

$('.registration-link-open').click(function(){
    $('.popupLogin').fadeOut()
    $('.popupRestorePassword').fadeOut()
    $('.popupRegistration').fadeIn()   
})

$('.restore-password-link-open').click(function(){
    $('.popupRestorePassword').fadeIn(300);
    $('body').addClass('hidden');
     return false
})

$('.restore-password-link-open').click(function(){
    $('.popupLogin').fadeOut()
    $('.popupRestorePassword').fadeIn()   
})

$('.login-link-open').click(function(){
    $('.popupLogin').fadeIn(300);
    $('body').addClass('hidden');
     return false
})

$('.login-link-open').click(function(){
    $('.popupRestorePassword').fadeOut()
    $('.popupLogin').fadeIn()   
})

