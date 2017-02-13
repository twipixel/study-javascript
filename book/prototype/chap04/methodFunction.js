//-----------------------------------------------------
// 함수와 메서드
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        document.getElementById('show1').innerHTML  = '안녕하세요';
        $('show2').innerHTML  = '좋은 하루 되세요';
        functionCall();
    }
}
function functionCall() {
    $('show3').innerHTML  = '함수 실행';
}
