$(document).ready(function () {
    // ẩn modal
    $('.modal__overlay').click(function () {
        $('.modal').css("display", "none");
    });
    // form đăng nhập
    $('.login-btn').click(function () {
        $('.modal').css("display", "flex");
        $('.register__form').css("display", "none");
        $('.login__form').css("display", "block");
    })
    // stickey menu
    window.onscroll = function () { stick() };

    var menuSticky = document.querySelector('.top-menu');
    var loginStick = document.querySelector('.login-btn')
    var sticky = menuSticky.offsetTop;
    function stick() {
        if (window.pageYOffset > sticky) {
            menuSticky.classList.add("stick");
            loginStick.classList.add("btn-stick");
        } else {
            menuSticky.classList.remove("stick");
            loginStick.classList.remove("btn-stick");
        }
    }
    // show các div menu
    $('.flag-logo').click(function () {
        $(".dropdown-sub").addClass("block");
    });

    $(document).click(function (event) {
        if (!$(event.target).closest(".dropdown-sub,.flag-logo").length) {
            $("body").find(".dropdown-sub").removeClass("block");
        }
    });
    $(".flag-noti").click(function () {
        $(".sub-notify").addClass("block");
    });

    $(document).click(function (event) {
        if (!$(event.target).closest(".sub-notify,.flag-noti").length) {
            $("body").find(".sub-notify").removeClass("block");
        }
    });
    $(".flag-user").click(function () {
        $(".sub-user").addClass("block");
    });

    $(document).click(function (event) {
        if (!$(event.target).closest(".sub-user,.flag-user").length) {
            $("body").find(".sub-user").removeClass("block");
        }
    });
    // img lộ trình học tập
    $('.scale-img1').mouseover(function () {               
        $('#code-step-scale1').css("transform", "scale(1.2)")
    });
    $('.scale-img1').mouseout(function () {
        $('#code-step-scale1').css("transform", "scale(1)")
    });
    $('.scale-img2').mouseover(function () {                
        $('#code-step-scale2').css("transform", "scale(1.2)")
    });
    $('.scale-img2').mouseout(function () {
        $('#code-step-scale2').css("transform", "scale(1)")
    });
    $('.scale-img3').mouseover(function () {    
        $('#code-step-scale3').css("transform", "scale(1.2)")
    });
    $('.scale-img3').mouseout(function () {
        $('#code-step-scale3').css("transform", "scale(1)")
    });
    $('.scale-img4').mouseover(function () {
        $('#code-step-scale4').css("transform", "scale(1.2)")

    });
    $('.scale-img4').mouseout(function () {
        $('#code-step-scale4').css("transform", "scale(1)")
    });
    // validate kiểm tra user name, email, password
    $("#commentForm").validate();

    // validate signup form on keyup and submit
    $(this).validate({
        rules: {
            firstname: "required",
            lastname: "required",
            username: {
                required: true,
                minlength: 5

            },

            password: {
                required: true,
                minlength: 8
            },

            email: {
                required: true,
                email: true
            },


        }

    });
    // bắt sự kiệm click cho button đăng kí 
    $('.bt-register').click(function () {
        var user_name = $('#cname').val();
        var name_mail = $('#cemail').val();
        var pass_word = $('#password').val();
        // kiểm tra email có hợp lệ hay không
        //i là phân biệt hoa thường
        //m là có thể tìm nhiều dòng
        //g là tìm tất 
        var regex_name = /.{2,}/;
        var regex_mail = /(\.com|\.org)/i;
        // có các chữ thường hoa và số 
        var regex_pass = /([a-zA-Z0-9]).{8,}/;

        if (regex_mail.test(name_mail) && regex_pass.test(pass_word) && regex_name.test(user_name)) {
            $('.pop-block').css("display", "flex");

        }
    });
    // count number
    var i = 0;
    setInterval(function () {
        $('.counter').html(i);
        if (i < 10) +
            i++;
        else if (i < 1000)
            i += 10;
        else if (i < 60000)
            i += 999;
        if (i > 60000)
            clearInterval();
    }, 10);


    // chuyển slide
    // thêm class active cho slide
    $('.click-slide-1').click(function () {
        $('.carousel-item').removeClass("active");
        $('#slide-1').addClass("active");
        $('#why-choose-us').css("background-color", "#f4ebeb");

    });
    $('.click-slide-2').click(function () {
        $('.carousel-item').removeClass("active");
        $('#slide-2').addClass("active");
        $('#why-choose-us').css("background-color", "#f0f8ec");
    });
    $('.click-slide-3').click(function () {
        $('.carousel-item').removeClass("active");
        $('#slide-3').addClass("active");
        $('#why-choose-us').css("background-color", "#f8f4eb");
    });
    $('.click-slide-4').click(function () {
        $('.carousel-item').removeClass("active");
        $('#slide-4').addClass("active");
        $('#why-choose-us').css("background-color", "#ededf8");
    });
    $('.click-slide-5').click(function () {
        $('.carousel-item').removeClass("active");
        $('#slide-5').addClass("active");
        $('#why-choose-us').css("background-color", "#f1e5ed");
    });
    // đổi màu div 
    $('.click-color').click(function () {
        $('.click-color').css("background-color", "transparent");
        $(this).css("background-color", "white");
    });
    // thay đổi slide thì thay đổi màu div và background
    var myCarousel = document.getElementById('carouselExampleControls')
    var dem = 1;
    $('#why-choose-us').css("background-color", "#f4ebeb");
    $('.click-slide-1').css("background-color", "white");
    myCarousel.addEventListener('slide.bs.carousel', function () {
        $('.click-color').css("background-color", "transparent");
        switch ($('.active').attr('id')) {
            case "slide-1":
                $('#why-choose-us').css("background-color", "#f0f8ec");
                $('.click-slide-2').css("background-color", "white");
                break;
            case "slide-2":
                $('#why-choose-us').css("background-color", "#f8f4eb");
                $('.click-slide-3').css("background-color", "white");
                break;
            case "slide-3":
                $('#why-choose-us').css("background-color", "#ededf8");
                $('.click-slide-4').css("background-color", "white");
                break;
            case "slide-4":
                $('#why-choose-us').css("background-color", "#f8f4eb");
                $('.click-slide-5').css("background-color", "white");
                break;
            case "slide-5":
                $('#why-choose-us').css("background-color", "#f4ebeb");
                $('.click-slide-1').css("background-color", "white");
                break;
            default:
                break;
        }
    });
});