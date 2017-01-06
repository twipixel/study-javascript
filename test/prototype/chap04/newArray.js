//-----------------------------------------------------
// Array 클래스로 배열 생성
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var SportArray = new Array(2);

        SportArray[2] = '농구';
        SportArray[7] = '마라톤';
        SportArray[11] = '수영';

        $('show1').innerHTML  = SportArray.toString();
    }
}
