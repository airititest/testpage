$(document).ready(function () {
    //TopicContent-generate
    TopicName('SDGs與永續發展', 'SDGs_scyeh', '01');
    TopicName('SDG1 消除貧窮', 'SDG1-no-poverty_ytwang', '02');
    //Function-Setting
    function TopicName(name, linkName, interviewNumber) {
        $('.header-topic-menu').append('<li><a href='+ linkName +'.html class=topic-content-title data-number="interview-'+ interviewNumber +'">' + name + '</a></li>');
    }
});