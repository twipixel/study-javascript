//-----------------------------------------------------
// Enumerable.max
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var numAlpha = [7, 'A', 1, 'Z'];
        $('show1').innerHTML = numAlpha.max();

        var onlyAlpha = ['7', 'A', '1', 'Z'];
        $('show2').innerHTML = onlyAlpha.max();

        var likeSport = ['농구', '탁구', '마라톤', '수영', '축구'];
        $('show3').innerHTML = likeSport.max(function(value, index) {
            return (value + ' : ' + index);
        });
    }
}

// 435 라인
//max: function(iterator) {
//    var result;
//    this.each(function(value, index) {
//        value = (iterator || Prototype.K)(value, index);
//        if (result == undefined || value >= result)
//            result = value;
//    });
//    return result;
//},
