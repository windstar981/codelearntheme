$(document).ready(function () {
    setInterval(function () {
        $('.detail-button-hoc-ngay').toggleClass('color-button-2');
    }, 500);
    setInterval(function () {
        $('.color-btn-a').toggleClass('color-btn-a-swap');
    }, 500);
    $('.detail-button-hoc-ngay').click(function () {
        var timer2 = "20:00:00";
        var flag = 1;
        // if(flag)
        // {
        //     var interval = setInterval(function () {
        //         flag = 0;
        //         var timer = timer2.split(':');
        //         //by parsing integer, I avoid all extra string processing
        //         var minutes = parseInt(timer[0], 10);
        //         var seconds = parseInt(timer[1], 10);
        //         --seconds;
        //         minutes = (seconds < 0) ? --minutes : minutes;
        //         if (minutes < 0) clearInterval(interval);
        //         seconds = (seconds < 0) ? 59 : seconds;
        //         seconds = (seconds < 10) ? '0' + seconds : seconds;
        //         $('.countdown').html(minutes + ':' + seconds);
        //         timer2 = minutes + ':' + seconds;
        //     }, 1000);
        // }
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
    // file login
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
				
				agree: "required"
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
        //g là tìm tất cả
        // var regex_mail = /(\.com|\.org)/i; 
        var regex_pass = /^([a-zA-Z])/;
        alert(regex_pass.test(pass_word))
        if(regex_mail.test(name_mail))
        {
            alert(name_mail);
        }
    });

});
