$('.gumb').click(function(){
	$(this).toggleClass('active')
	$('.header-inner__right-part').slideToggle()
	$('.header-inner__right-part').toggleClass('active')
	$('header').toggleClass('active')
	$('html').toggleClass('hidden')
})

$(".open-password").click(function(){
	$(".open-password").hide();
    $(".closed-password").show();
    $("#input-password").attr("type","text");
});

$(".closed-password").click(function(){
    $(".closed-password").hide();
    $(".open-password").show();
    $("#input-password").attr("type","password");
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

$(function () {
	$('.open-popup').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
		modal: true,
	});
	$(document).on('click', '.popup-close', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
});

$(function () {
	$('.open-popup-registration').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
		modal: true,
	});
	$(document).on('click', '.popup-close', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
});

// if ( $('.form input')[0].valid() ) {
//     $(this).toggleClass('success')
// }