//-----------------------------------------------------
// Array.uniq
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var sport = ['축구', '농구', '축구', '농구'];
        $('show1').innerHTML = 'uniq() 실행전: ' + sport.inspect();

        $('show2').innerHTML = 'uniq() 실행후: ' + sport.uniq().inspect();
    }
}

// 591 라인
//uniq: function() {
//    return this.inject([], function(array, value) {
//        return array.include(value) ? array : array.concat([value]);
//    });
//},
