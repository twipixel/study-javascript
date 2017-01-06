//-----------------------------------------------------
// Array.first
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var likeSport = ['농구', '마라톤', '축구'];
        $('show1').innerHTML = '첫 번째 엘리먼트 : ' + likeSport.first();
    }
}

// 549 라인
//first: function() {
//    return this[0];
//},
