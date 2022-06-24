$(document).ready(function () {
    //BodyDataValue
    var ThisPageData = $('body').data('number');
    var HeaderListLength = $('.header-topic-menu li').length;
    for (let index = 0; index < HeaderListLength; index++) {
        var HeaderListLinkNumber = $('.header-topic-menu li').eq(index).children('a').data('number');
        if (ThisPageData == HeaderListLinkNumber) {
            $('.header-topic-menu li').eq(index).children('a').addClass('topic-content-title-active');
        }
    }
    //RemoveClickEvent
    $('.topic-content-title-active').bind('click', function(e) {
        return false;
    });
});