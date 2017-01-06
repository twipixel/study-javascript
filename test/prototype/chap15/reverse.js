//-----------------------------------------------------
// Array.reverse
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var baseNumber = ['1', '2', '5', '4', '3'];

        var falseNumber = baseNumber.reverse(false);
        $('show1').innerHTML = 'false 설정: ' + falseNumber.inspect();
        $('show2').innerHTML = '기준 배열: ' + baseNumber.inspect();

        var trueNumber = baseNumber.reverse(true);
        $('show3').innerHTML = 'true 설정: ' + trueNumber.inspect();
        $('show4').innerHTML = '기준 배열: ' + baseNumber.inspect();
        $('show5').innerHTML = '재역순: ' + baseNumber.reverse('any').inspect();

        var baseGanada = ['가', '나', '다', '라'];
        var falseGanada = baseGanada.reverse([false]);
        $('show6').innerHTML = '[false] 변환 배열 : ' + falseGanada.inspect();
        $('show7').innerHTML = '[false] 기준 배열 : ' + baseGanada.inspect();
    }
}

// 583 라인
//reverse: function(inline) {
//    return (inline !== false ? this : this.toArray())._reverse();
//},

// 535 라인
//if (!Array.prototype._reverse)
//    Array.prototype._reverse = Array.prototype.reverse;
