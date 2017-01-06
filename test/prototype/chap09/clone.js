//-------------------------------------
//  Object.clone
//-------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var season = {spring: '봄', summer: '여름'};
        var cloneSeason = Object.clone(season);

        $('show1').innerHTML = 'Key : ' + Object.keys(cloneSeason).inspect();
        $('show2').innerHTML = 'value : ' + Object.values(cloneSeason).inspect();
    }
}

// 63 라인
//clone: function(object) {
//    return Object.extend({}, object);
//}
