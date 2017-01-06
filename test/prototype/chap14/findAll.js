//-----------------------------------------------------
// Enumerable.findAll()
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var likeSport = ['농구', '농구', '수영', '농구', '축구'];
        var findList = likeSport.findAll(function(value) {
            return (value == '농구');
        });
        $('show1').innerHTML = '농구 추출(findAll) : ' + findList.inspect();

        var selectList = $R('A', 'K').select(function(value) {
            return value > 'H';
        });
        $('show2').innerHTML = 'H 보다 큰 값(select) : ' + selectList.inspect();
    }
}

// 383 라인
//findAll: function(iterator) {
//    var results = [];
//    this.each(function(value, index) {
//        if (iterator(value, index))
//            results.push(value);
//    });
//    return results;
//},

// 517 라인
//Object.extend(Enumerable, {
//    select:  Enumerable.findAll,
//});
