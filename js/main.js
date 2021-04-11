$(document).ready(function () {
    var fl = $('.detail-button-hoc-ngay');
    setInterval(function () {
        fl.toggleClass('color-button-2');
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
});
