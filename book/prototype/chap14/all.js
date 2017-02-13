//-----------------------------------------------------
// Enumerable.all
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        likeSport = ['농구', '탁구', '마라톤', '수영', '축구'];
        $('show1').innerHTML = '전부 정상: ' + likeSport.all();

        Show.check('수영', false, true);
        $('show2').innerHTML = 'false/true 비교: ' + resultValue + ', 인덱스: ' + indexCount;

        Show.check('수영', true, false);
        $('show3').innerHTML = 'true/false 비교: ' + resultValue + ', 인덱스: ' + indexCount;

        Show.check('휴식', false, true);
        $('show4').innerHTML = '없는 항목: ' + resultValue + ', 인덱스: ' + indexCount;

        var faultList = ['농구', '탁구', , , '축구'];
        $('show5').innerHTML = '항목 누락: ' + faultList.all();

        $('show6').innerHTML = '누락 + 항목 존재: ' + faultList.all(function(value) {
            return (value == '축구') ? false : true;
        });
    },
    check: function(text, first, second) {
        resultValue = likeSport.all(function(value, index) {
            indexCount = index;
            return (value == text) ? first : second;
        });
    }
}
// 346 라인
//all: function(iterator) {
//    var result = true;
//    this.each(function(value, index) {
//        result = result && !!(iterator || Prototype.K)(value, index);
//        if (!result) throw $break;
//    });
//    return result;
//},
