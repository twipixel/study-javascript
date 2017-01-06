//-----------------------------------------------------
// Enumerable.pluck
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var niceSport = $H({basketBall : '농구', number : '5명', time: '48분'});
        $('show1').innerHTML = 'key : ' + niceSport.pluck('key').inspect();
        $('show2').innerHTML = 'value : ' + niceSport.pluck('value').inspect();

        var likeSport = ['농구', '마라톤', '배드민턴', '아이스하키'];
        $('show3').innerHTML = 'sport : ' + likeSport.pluck('length').inspect();
    }
}

// 464 라인
//pluck: function(property) {
//    var results = [];
//    this.each(function(value, index) {
//        results.push(value[property]);
//    });
//    return results;
//},
