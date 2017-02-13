//-------------------------------------
//  Object.inspect()
//-------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var season = ["봄", "여름", '가을', '겨울'];
        $('show1').innerHTML = '배열 : ' + Object.inspect(season);

        var varDefine;
        $('show2').innerHTML = '변수만 선언 : ' + Object.inspect(varDefine);

        var nullValue = null;
        $('show3').innerHTML = 'null 설정 : ' + Object.inspect(nullValue);

        var trueFalse = true;
        $('show4').innerHTML = 'true 설정 : ' + Object.inspect(trueFalse);
    }
}

//38 라인
//inspect: function(object) {
//    try {
//        if (object === undefined) return 'undefined';
//        if (object === null) return 'null';
//        return object.inspect ? object.inspect() : object.toString();
//    } catch (e) {
//        if (e instanceof RangeError) return '...';
//        throw e;
//    }
//},
