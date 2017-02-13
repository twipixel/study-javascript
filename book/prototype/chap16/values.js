//-----------------------------------------------------
// Hash.values
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var likeSport = $H(
            {event: '농구', number: '5명', time: '48분'}
        );
        $('show1').innerHTML = 'value : ' + likeSport.values().inspect();
    }
}

// 681 라인
//values: function() {
//    return this.pluck('value');
//},
