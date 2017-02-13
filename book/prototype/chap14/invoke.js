//-----------------------------------------------------
// Enumerable.invoke
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var sport = ['축구: 11명 90분', '농구: 5명 48분'];
        $('show1').innerHTML = sport.invoke('slice', 0, 2);

        var methodCall = [Soccer, Basketball];
        $('show2').innerHTML = methodCall.invoke('memberTime');
    }
}
var Soccer = {
    memberTime: function() {
        return '선수: 11명, 경기 시간: 90분 ##';
    }
}
var Basketball = {
    memberTime: function() {
        return '선수: 5명, 경기 시간: 48분';
    }
}

// 428 라인
//invoke: function(method) {
//    var args = $A(arguments).slice(1);
//    return this.map(function(value) {
//        return value[method].apply(value, args);
//    });
//},
