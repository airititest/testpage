$(document).ready(function () {
    //TopicContent-generate
    TopicName('SDGs與永續發展', 'SDGs_scyeh', '01');
    TopicName('SDG1 消除貧窮', 'SDG1-no-poverty_ytwang', '02');
    TopicName('SDG1 消除貧窮', 'SDG1-no-poverty_ytwang', '03');
    TopicName('SDG1 消除貧窮', 'SDG1-no-poverty_ytwang', '04');
    TopicName('SDG1 消除貧窮', 'SDG1-no-poverty_ytwang', '05');
    TopicName('SDG1 消除貧窮', 'SDG1-no-poverty_ytwang', '06');
    TopicName('SDG1 消除貧窮', 'SDG1-no-poverty_ytwang', '07');
    TopicName('SDG1 消除貧窮', 'SDG1-no-poverty_ytwang', '08');
    TopicName('SDG1 消除貧窮', 'SDG1-no-poverty_ytwang', '09');
    TopicName('SDG1 消除貧窮', 'SDG1-no-poverty_ytwang', '10');
    TopicName('SDG1 消除貧窮', 'SDG1-no-poverty_ytwang', '11');
    TopicName('SDG1 消除貧窮', 'SDG1-no-poverty_ytwang', '12');
    TopicName('SDG1 消除貧窮', 'SDG1-no-poverty_ytwang', '13');
    TopicName('SDG1 消除貧窮', 'SDG1-no-poverty_ytwang', '14');
    TopicName('SDG1 消除貧窮', 'SDG1-no-poverty_ytwang', '15');
    TopicName('SDG1 消除貧窮', 'SDG1-no-poverty_ytwang', '16');
    TopicName('SDG1 消除貧窮', 'SDG1-no-poverty_ytwang', '17');
    TopicName('SDG1 消除貧窮', 'SDG1-no-poverty_ytwang', '18');
    TopicName('SDG1 消除貧窮', 'SDG1-no-poverty_ytwang', '19');
    TopicName('SDG1 消除貧窮', 'SDG1-no-poverty_ytwang', '20');
    //Function-Setting
    function TopicName(name, linkName, interviewNumber) {
        $('.header-topic-menu').append('<li><a href='+ linkName +'.html class=topic-content-title data-number="interview-'+ interviewNumber +'">' + name + '</a></li>');
    }
});