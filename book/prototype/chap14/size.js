//-----------------------------------------------------
// Enumerable.size
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var likeSport = ['농구', '수영', '축구'];
        $('show1').innerHTML = '배열 length: ' + likeSport.length;
        $('show2').innerHTML = '배열 size(): ' + likeSport.size();

        var selectList = $R(1, 7);
        $('show3').innerHTML = 'Enumerable length: ' + selectList.length;
        $('show4').innerHTML = 'Enumerable size(): ' + selectList.size();
    }
}

// 505 라인
//size: function() {
//    return this.toArray().length;
//},
