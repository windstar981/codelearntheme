
$(document).ready(function () {
    $('.modal__overlay').click(function()
    {
        $('.modal').css("display","none");
    });
    $('.login-btn').click(function()
    {
        $('.modal').css("display","flex");
        $('.register__form').css("display","none");
        $('.login__form').css("display","block");
    })
    window.onscroll = function() {stick()};
    
    var menuSticky = document.querySelector('.top-menu');
    var loginStick = document.querySelector('.login-btn')
    var sticky = menuSticky.offsetTop;
    function stick(){
        if(window.pageYOffset > sticky){
            menuSticky.classList.add("stick");
            loginStick.classList.add("btn-stick");
        }else {
            menuSticky.classList.remove("stick");
            loginStick.classList.remove("btn-stick");
        }
    }
    $('.flag-logo').click(function(){
        $(".dropdown-sub").addClass("block");
        });

    $(document).click(function(event) {
    if (!$(event.target).closest(".dropdown-sub,.flag-logo").length) {
        $("body").find(".dropdown-sub").removeClass("block");
    }
    });
    $(".flag-noti").click(function(){
        $(".sub-notify").addClass("block");
        });

    $(document).click(function(event) {
    if (!$(event.target).closest(".sub-notify,.flag-noti").length) {
        $("body").find(".sub-notify").removeClass("block");
    }
    });
    $(".flag-user").click(function(){
        $(".sub-user").addClass("block");
        });

    $(document).click(function(event) {
    if (!$(event.target).closest(".sub-user,.flag-user").length) {
        $("body").find(".sub-user").removeClass("block");
    }
    });
    setInterval(function () {
        $('.detail-button-hoc-ngay').toggleClass('color-button-2');
    }, 500);
    setInterval(function () {
        $('.color-btn-a').toggleClass('color-btn-a-swap');
    }, 500);
    $('.detail-button-hoc-ngay').click(function () {
        var timer2 = "20:00:00";
        var flag = 1;
        if(flag)
        {
            var interval = setInterval(function () {
                flag = 0;
                var timer = timer2.split(':');
                //by parsing integer, I avoid all extra string processing
                var minutes = parseInt(timer[0], 10);
                var seconds = parseInt(timer[1], 10);
                --seconds;
                minutes = (seconds < 0) ? --minutes : minutes;
                if (minutes < 0) clearInterval(interval);
                seconds = (seconds < 0) ? 59 : seconds;
                seconds = (seconds < 10) ? '0' + seconds : seconds;
                $('.countdown').html(minutes + ':' + seconds);
                timer2 = minutes + ':' + seconds;
            }, 1000);
        }
        var interval = setInterval(function () {
            flag = 0;
            var timer = timer2.split(':');
            //by parsing integer, I avoid all extra string processing
            var hour = parseInt(timer[0], 10);
            var minutes = parseInt(timer[1], 10);
            var seconds = parseInt(timer[2], 10);
            // alert(hour+':'+minutes+':'+seconds)
            --seconds;
            minutes = (seconds < 0) ? --minutes : minutes;
            hour = (minutes < 0) ? --hour : hour;
            if (hour < 0) clearInterval(interval);
            minutes = (minutes < 0) ? 59 : minutes;
            minutes = (minutes < 10) ? '0' + minutes :minutes; 
            seconds = (seconds < 0) ? 59 : seconds;
            seconds = (seconds < 10) ? '0' + seconds : seconds;
            $('.countdown').html(hour + ':' + minutes + ':' + seconds);
            timer2 = hour + ':' +minutes + ':' + seconds;
        }, 1000);
    });
    
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
    $('.bt-register').click(function()
    {
        var user_name = $('#cname').val();
        var name_mail = $('#cemail').val(   );
        var pass_word = $('#password').val();
        // kiểm tra email có hợp lệ hay không
        //i là phân biệt hoa thường
        //m là có thể tìm nhiều dòng
        //g là tìm tất 
        var regex_name = /.{2,}/;
        var regex_mail = /(\.com|\.org)/i; 
        // có các chữ thường hoa và số 
        var regex_pass = /([a-zA-Z0-9]).{8,}/;
        
        if(regex_mail.test(name_mail) && regex_pass.test(pass_word) && regex_name.test(user_name))
        {
            $('.pop-block').css("display","flex");
            
        }
    });
    var i = 0;
    setInterval(function()
    {
        $('.counter').html(i);
        if(i<10)+
            i++;
        else if(i<1000)
            i += 10  ;
        else if(i<60000)
            i+=999;
        if(i>60000)
            clearInterval();
    }, 10);
    
    
    // var count = 1;
    // setInterval(() => {
    //     if(count == 1)
    //     {
    //         $('#why-choose-us').css("background-color","#ededf8");
    //     }
    //     if(count == 2)
    //     {
    //         $('#why-choose-us').css("background-color","#f4ebeb");
    //     }
    //     if(count == 3)
    //     {
    //         $('#why-choose-us').css("background-color","#f0f8ec");
    //         count = 0;
    //     }
    //     count++;
    // }, 1000);
    
    // thêm class active cho slide
    $('.click-slide-1').click(function()
    {
        $('.carousel-item').removeClass("active");
        $('#slide-1').addClass("active");
        $('#why-choose-us').css("background-color","#f4ebeb")

    });
    $('.click-slide-2').click(function()
    {
        $('.carousel-item').removeClass("active");
        $('#slide-2').addClass("active");
        $('#why-choose-us').css("background-color","#f0f8ec")
    });
    $('.click-slide-3').click(function()
    {
        $('.carousel-item').removeClass("active");
        $('#slide-3').addClass("active");
        $('#why-choose-us').css("background-color","#f8f4eb");
    });
    $('.click-slide-4').click(function()
    {
        $('.carousel-item').removeClass("active");
        $('#slide-4').addClass("active");
        $('#why-choose-us').css("background-color","#ededf8");
    });
    $('.click-slide-5').click(function()
    {
        $('.carousel-item').removeClass("active");
        $('#slide-5').addClass("active");
        $('#why-choose-us').css("background-color","#f1e5ed");
    });

    $('.click-color').click(function()
    { 
        $('.click-color').css("background-color","transparent");
        $(this).css("background-color","white");
    })
    // if($('.carousel-inner').childrent().hasClass("active"))
    // {
    //     if($('.active').childrent().hasClass("color-slide-1"))
    //     {
    //         $('#why-choose-us').css("background-color","red")
    //     }
    //     if($('.active').childrent().hasClass("color-slide-2"))
    //     {
    //         $('#why-choose-us').css("background-color","black")
    //     }
    //     if($('.active').childrent().hasClass("color-slide-3"))
    //     {
    //         $('#why-choose-us').css("background-color","#f4ebeb")
    //     }
    //     if($('.active').childrent().hasClass("color-slide-4"))
    //     {
    //         $('#why-choose-us').css("background-color","#f4ebeb")
    //     }
    //     if($('.active').childrent().hasClass("color-slide-5"))
    //     {
    //         $('#why-choose-us').css("background-color","#f4ebeb")
    //     }
    //     alert("oke");
    // }
    
});
