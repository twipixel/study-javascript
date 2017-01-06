//-----------------------------------------------------
// Array.compact
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var likeSport = ['농구', undefined, '마라톤', null, '축구'];
        $('show1').innerHTML = 'compact() 전 : ' + likeSport + '; ' + likeSport.length;

        var resultSport = likeSport.compact();
        $('show2').innerHTML = 'compact() 후 : ' + resultSport + '; ' + resultSport.length;
    }
}

// 557 라인
//compact: function() {
//    return this.select(function(value) {
//        return value != undefined || value != null;
//    });
//},
