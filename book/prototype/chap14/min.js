//-----------------------------------------------------
// Enumerable.min
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var numAlpha = [7, 'A', 1, 'Z'];
        $('show1').innerHTML = numAlpha.min();

        var onlyAlpha = ['7', 'A', '1', 'Z'];
        $('show2').innerHTML = onlyAlpha.min();

        var likeSport = ['탁구', '마라톤', '농구', '수영', '축구'];
        $('show3').innerHTML = likeSport.min(function(value, index) {
             return (value + ' : ' + index);
        });
    }
}

// 445 라인
//min: function(iterator) {
//    var result;
//    this.each(function(value, index) {
//        value = (iterator || Prototype.K)(value, index);
//        if (result == undefined || value < result)
//            result = value;
//    });
//    return result;
//},
