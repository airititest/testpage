$(document).ready(function () {
    //HeaderMeun-Position
    HeaderMenuWidth();
    //menu-open
    $('.header-menu-btn a').bind('click', function (e) {
        $('body').addClass('scroll-off');
        $('header').addClass('meun-open');
        HeaderMenuWidth();
        return false;
    });
    //menu-close
    $('.header-topic-btn li a img').bind('click', function (e) {
        $('body').removeClass('scroll-off');
        $('header').removeClass('meun-open');
        return false;
    });
    //Function-setting
    function HeaderMenuWidth() {
        var HeaderMenuWidth = $('.header-topic').width();
        $('.header-topic').css({ 'right': HeaderMenuWidth * -1 });
    }
});