//-----------------------------------------------------
// Enumerable.partition
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var checkValue = ['7', '', 'A', null, '#', undefined, '한글', 0, '0'];
        $('show1').innerHTML = '전체 : ' + checkValue.partition().inspect();

        var likeSport = ['농구', '탁구', '마라톤', '수영', '축구'];
        var resultSport = likeSport.partition(function(value, index) {
             return (value == '마라톤');
        });
        $('show2').innerHTML = '마라톤 : ' + resultSport[0].inspect();
        $('show3').innerHTML = '마라톤 이외 : ' + resultSport[1].inspect();
    }
}

// 455 라인
//partition: function(iterator) {
//    var trues = [], falses = [];
//    this.each(function(value, index) {
//        ((iterator || Prototype.K)(value, index) ?
//            trues : falses).push(value);
//    });
//    return [trues, falses];
//},
