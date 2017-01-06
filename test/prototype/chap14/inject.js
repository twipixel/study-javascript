//-----------------------------------------------------
// Enumerable.inject
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var likeSport = ['농구', '수영', '마라톤'];
        var memoSport = likeSport.inject(['스포츠'], function(memo, value){
            return value;
        });
        $('show1').innerHTML = memoSport.inspect();

        memoSport = likeSport.inject(['스포츠'], function(memo, value){
            return memo;
        });
        $('show2').innerHTML = memoSport.inspect();

        memoSport = likeSport.inject(['스포츠'], function(memo, value){
            memo.push(value);
            return memo;
        });
        $('show3').innerHTML = memoSport.inspect();

        $('show4').innerHTML = $R(1,10).inject(100, function(memo, value, index) { 
            return memo + value + index;
        });
    }
}

// 421 라인
//inject: function(memo, iterator) {
//    this.each(function(value, index) {
//        memo = iterator(memo, value, index);
//    });
//    return memo;
//},
