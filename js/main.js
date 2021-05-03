$(document).ready(function () {
    // khi sự kiện click cho dropdown
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
    // Sự khiện setInterval đổi màu background cho button
    // setInterval(function () {
    //     $('.detail-button-hoc-ngay').toggleClass('color-button-2');
    // }, 500);
    // Sự kiện setInterval đổi màu cho font 
    setInterval(function () {
        $('.color-btn-a').toggleClass('color-btn-a-swap');
    }, 500);
    // Sự kiện click đếm ngược thời gian 
    $('.detail-button-hoc-ngay').click(function () {
        var timer2 = "20:00:00";  
        var interval = setInterval(function () {
            flag = 0;
            var timer = timer2.split(':');
            var hour = parseInt(timer[0], 10);
            var minutes = parseInt(timer[1], 10);
            var seconds = parseInt(timer[2], 10);
            --seconds;
            minutes = (seconds < 0) ? --minutes : minutes;
            hour = (minutes < 0) ? --hour : hour;
            if (hour < 0) clearInterval(interval);
            minutes = (minutes < 0) ? 59 : minutes;
            minutes = (minutes < 10) ? '0' + minutes : minutes;
            seconds = (seconds < 0) ? 59 : seconds;
            seconds = (seconds < 10) ? '0' + seconds : seconds;
            $('.countdown').html(hour + ':' + minutes + ':' + seconds);
            timer2 = hour + ':' + minutes + ':' + seconds;
        }, 1000);
    });
});
