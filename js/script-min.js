$(".gumb").click(function(){$(this).toggleClass("active"),$(".header-inner__right-part").slideToggle(),$(".header-inner__right-part").toggleClass("active"),$("header").toggleClass("active"),$("html").toggleClass("hidden")}),$(".open-password").click(function(){$(".open-password").hide(),$(".closed-password").show(),$("#input-password").attr("type","text")}),$(".closed-password").click(function(){$(".closed-password").hide(),$(".open-password").show(),$("#input-password").attr("type","password")}),$(function(){$.validator.addMethod("emailRegex",function(e,i){return this.optional(i)||/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i.test(e)},"")}),$(function(){$(".form-registration").validate({rules:{name:{required:!0},charity:{required:!0},email:{required:!0,emailRegex:!0},password:{required:!0}},messages:{name:{required:"Обов'язкове поле"},charity:{required:"Обов'язкове поле"},email:{required:"Введіть вашу електронну адресу",emailRegex:"Формат електронної пошти невірний"},password:{required:"Обов'язкове поле"}}})}),$(function(){$(".form-login").validate({rules:{email:{required:!0,emailRegex:!0},password:{required:!0}},messages:{email:{required:"Введіть вашу електронну адресу",emailRegex:"Формат електронної пошти невірний"},password:{required:"Обов'язкове поле"}}})}),$(function(){$(".form-restore-password").validate({rules:{email:{required:!0,emailRegex:!0},password:{required:!0}},messages:{email:{required:"Введіть вашу електронну адресу",emailRegex:"Формат електронної пошти невірний"},password:{required:"Обов'язкове поле"}}})}),$(function(){$(".open-popup").magnificPopup({type:"inline",preloader:!1,focus:"#username",modal:!0}),$(document).on("click",".popup-close",function(e){e.preventDefault(),$.magnificPopup.close()})}),$(function(){$(".open-popup-registration").magnificPopup({type:"inline",preloader:!1,focus:"#username",modal:!0}),$(document).on("click",".popup-close",function(e){e.preventDefault(),$.magnificPopup.close()})});