//-----------------------------------------------------
// Hash.keys
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var likeSport = $H(
            {event: '농구', number: '5명', time: '48분'}
        );
        $('show1').innerHTML = 'key : ' + likeSport.keys().inspect();
    }
}

//677 라인
//keys: function() {
//    return this.pluck('key');
//},
