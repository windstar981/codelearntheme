$(document).ready(function () {
    var availableTags = [
        "BASIC",
        "C",
        "Cơ bản",
        "C++",
        "Cấu trúc dữ liệu và giải thuật",
        "Lập trình hướng đối tượng Java",
        "Thuật toán nâng cao",
        "Thuật toán cơ bản",
        "Điện toán đám mây",
        "Thư viện chuẩn C++",
        "Phần mềm máy tính",
        "Phần cứng máy tính",
        "Truyền thông và mạng máy tính",
        "Làm quen với SQL",
        "Javascrip cơ bản",
        "Python cơ bản"
    ];
    // $('input[name="name"]').autocomplete({
    //     source: availableTags
    // });
    $('#search-course').autocomplete({
        source: availableTags
    });
    $('.wrap-course-item').mouseover(function (e) {
        e.preventDefault();
        //get with of popover div
        let wd_pop = $(this).children('.popover-course').width();
        var wd_width = $(window).width();
        let offsetCourse = $(this).offset();
        let right_cor = wd_width - offsetCourse.left;
        if (right_cor < 700) {
            $(this).children('.popover-course').css('right', 'calc(100% + 10px)');
            $(this).children('.popover-course').css('left', 'unset');
            $(this).children('.popover-course').addClass('arrow-right');
        } else {
            $(this).children('.popover-course').css('left', 'calc(100% + 10px)');
            $(this).children('.popover-course').css('right', 'unset');
            $(this).children('.popover-course').addClass('arrow-left');
        }
    });

    $('.pop-exit').click(function () {
        $('.pop-block').css("display", "none");
    });
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
});