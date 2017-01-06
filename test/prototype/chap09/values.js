//-------------------------------------
//  Object.values()
//-------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var season = { spring: '봄', summer: '여름' };
        $('show1').innerHTML = 'value : ' + Object.values(season).inspect();

        var objectValues = {clone: function(object) {
                                    return Object.extend({}, object);
                                 }
        };
        $('show2').innerHTML = '메서드 : ' + Object.values(objectValues);
    }
}

// 56 라인
//values: function(object) {
//    var values = [];
//    for (var property in object)
//        values.push(object[property]);
//    return values;
//},
