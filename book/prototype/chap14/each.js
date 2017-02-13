//-----------------------------------------------------
// Enumerable.each
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var sport = ['축구', '농구', '마라톤'];        
        var sportArray = sport.each(function(value, index) {
            $('show' + index).innerHTML = value + ': ' + index;        
        });
        $('show3').innerHTML = sportArray.inspect(); 

        var eachArray = [];
        $R('가', '간').each(function(value, index) {
           eachArray.push(value + '(' + index + ')');        
        });
        $('show4').innerHTML = eachArray.inspect(); 
    }
}

// 323 라인
//each: function(iterator) {
//    var index = 0;
//    try {
//        this._each(function(value) {
//            try {
//                iterator(value, index++);
//            } catch (e) {
//                if (e != $continue) throw e;
//            }
//        });
//    } catch (e) {
//        if (e != $break) throw e;
//    }
//    return this;
//},
