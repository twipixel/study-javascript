//-----------------------------------------------------
// Enumerable.grep
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var likeSport = ['농구', '탁구', '마라톤', '수영', '축구'];
        var grepValue = likeSport.grep(/.구/);
        $('show1').innerHTML = '/.구/: ' + grepValue.inspect();

        grepValue = likeSport.grep(/.구/, function(value, index) {
            return (value + ': ' + index);
        });
        $('show2').innerHTML = '이터레이터: ' + grepValue.inspect();
    }
}

// 392 라인
//grep: function(pattern, iterator) {
//    var results = [];
//    this.each(function(value, index) {
//        var stringValue = value.toString();
//        if (stringValue.match(pattern))
//            results.push((iterator || Prototype.K)(value, index));
//    })
//    return results;
//},
