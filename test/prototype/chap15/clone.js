//-----------------------------------------------------
// Array.clone
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var sport = ['축구', '농구', '마라톤'];
        $('show1').innerHTML = '복사할 배열: ' + sport.inspect();

        $('show2').innerHTML = '복사후 배열: ' + sport.clone().inspect();

        $('show3').innerHTML = 'toArray(): ' + sport.toArray().inspect();
    }
}

// 597 라인
//clone: function() {
//    return [].concat(this);
//},
