//-----------------------------------------------------
// Array.without
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var likeSport = ['농구', '탁구', '수영', '축구'];

        var withoutSport = likeSport.without('농구', '탁구');
        $('show1').innerHTML = "without('농구', '탁구') : " + withoutSport.inspect();

        var arraySport = likeSport.without(['수영'], ['축구']);
        $('show2').innerHTML = "without(['수영'], ['축구']) : " + arraySport.inspect();
    }
}

// 570 라인
//without: function() {
//    var values = $A(arguments);
//    return this.select(function(value) {
//        return !values.include(value);
//    });
//},
