//-----------------------------------------------------
// Enumerable.sortBy
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var gameNum = [5, 2, 50, 8, 11];
        $('show1').innerHTML = 'sortBy() 전 : ' + gameNum.inspect();

        resultValue = gameNum.sortBy(function(value) {
             return value;
        });
        $('show2').innerHTML = 'sortBy() 후 : ' + resultValue.inspect();

        resultValue = gameNum.sortBy(function(value) {
             return value * -1;
        });
        $('show3').innerHTML = 'sortBy() Descending : ' + resultValue.inspect();

        var likeSport = ['농구', '마라톤', '배드민턴', '아이스하키'];
        $('show4').innerHTML = likeSport.sortBy(function(value) {
             return value.length * -1;
        });
    }
}

// 481 라인
//sortBy: function(iterator) {
//    return this.collect(function(value, index) {
//        return {value: value, criteria: iterator(value, index)};
//    }).sort(function(left, right) {
//        var a = left.criteria, b = right.criteria;
//        return a < b ? -1 : a > b ? 1 : 0;
//    }).pluck('value');
//},
