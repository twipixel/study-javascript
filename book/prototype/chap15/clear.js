//-----------------------------------------------------
// Array.clear
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var likeSport = ['농구', '탁구', '마라톤', '수영', '축구'];
        $('show1').innerHTML = 'clear 전 : ' + likeSport.length;

        likeSport.clear();
        $('show2').innerHTML = 'clear 후 : ' + likeSport.length;
        $('show3').innerHTML = 'clear 후[0] : ' + likeSport[0];
    }
}

// 544 라인
//clear: function() {
//    this.length = 0;
//    return this;
//},
