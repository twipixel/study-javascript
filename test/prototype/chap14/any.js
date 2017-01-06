//-----------------------------------------------------
// Enumerable.any
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var likeSport = ['농구', '탁구', '마라톤', '수영', '축구'];
        $('show1').innerHTML = '전부 정상 : ' + likeSport.any();

        var faultList = [null, false, , 0];
        $('show2').innerHTML = 'null/false : ' + faultList.any();

        var middleNull = ['농구', '탁구', null, '수영', '축구'];
        $('show3').innerHTML = '중간 null : ' + middleNull.any();

        resultValue = likeSport.any(function(value, index) {
            indexCount = index;
            return (value == '탁구') ? false : true;
        });
        $('show4').innerHTML = '항목 있음: ' + resultValue + ', 인덱스: ' + indexCount;

        $('show5').innerHTML = '항목 없음 : ' + likeSport.any(function(value, index) {
            return (value == '휴식') ? true : false;
        });
    }
}

// 355 라인
//any: function(iterator) {
//    var result = false;
//    this.each(function(value, index) {
//        if (result = !!(iterator || Prototype.K)(value, index))
//        throw $break;
//    });
//    return result;
//},
