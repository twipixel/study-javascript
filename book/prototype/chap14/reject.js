//-----------------------------------------------------
// Enumerable.reject
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var likeSport = ['농구', '탁구', '마라톤', '수영', '축구'];
        var falseValue = likeSport.reject(function(value) {
             return (value == '탁구' || value == '수영');
        });
        $('show1').innerHTML = falseValue.inspect();

        var selectList = $R('A', 'K').reject(function(value) {
            return value > 'E';
        });
        $('show2').innerHTML = 'E 보다 큰 값 : ' + selectList.inspect();
    }
}

// 472 라인
//reject: function(iterator) {
//    var results = [];
//    this.each(function(value, index) {
//        if (!iterator(value, index))
//            results.push(value);
//    });
//    return results;
//},
