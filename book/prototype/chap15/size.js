//-----------------------------------------------------
// Array.size
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var likeSport = ['농구', '수영', '축구'];
        $('show1').innerHTML = '배열 size(): ' + likeSport.size();
    }
}

// 601 라인
//size: function() {
//    return this.length;
//},
