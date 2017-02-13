//-----------------------------------------------------
// Object 클래스로 배열 생성
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var SportObject = new Object();

        SportObject[0] = '농구';
        SportObject[1] = '마라톤';

        $('show1').innerHTML  = SportObject[0];
        $('show2').innerHTML  = SportObject[1];

        SportObject['swim'] = '수영';
        $('show3').innerHTML  = SportObject['swim'];

        $('show4').innerHTML  = SportObject['notDefine'];
    }
}
