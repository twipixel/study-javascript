//-------------------------------------
//  Object.keys
//-------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var season = { spring: '봄', summer: '여름' };
        $('show1').innerHTML = 'Hash 형태 : ' + Object.keys(season).inspect();

        $('show2').innerHTML = '(Object) : ' + Object.keys(Object).inspect();

        $('show3').innerHTML = '(Number) : ' + Object.keys(Number).inspect();
        $('show4').innerHTML = '(Number.prototype) : ' + Object.keys(Number.prototype).inspect();
    }
}

// 49 라인
//keys: function(object) {
//    var keys = [];
//    for (var property in object)
//        keys.push(property);
//    return keys;
//},
