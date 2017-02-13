//-----------------------------------------------------
// Array.last
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var likeSport = ['농구', '마라톤', '축구'];
        $('show1').innerHTML = '마지막 엘리먼트 : ' + likeSport.last();
    }
}

// 553 라인
//last: function() {
//    return this[this.length - 1];
//},
