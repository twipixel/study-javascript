//-----------------------------------------------------
// Hash.inspect
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var likeSport = $H({event: '농구', number: 5, time: 48});

        if (window.ActiveXObject) {
            $('show1').innerText = '문자열 : ' + Object.inspect(likeSport);
        } else  {
            $('show1').textContent = '문자열 : ' + Object.inspect(likeSport);
        }
    }
}

// 712 라인
//inspect: function() {
//    return '#<Hash:{' + this.map(function(pair) {
//        return pair.map(Object.inspect).join(': ');
//    }).join(', ') + '}>';
//}
