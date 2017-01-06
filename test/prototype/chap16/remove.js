//-----------------------------------------------------
// Hash.merge
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var likeSport = $H({event: '농구', number: '5명', time: '48분'});

        $('show1').innerHTML = 'event 삭제 : ' + likeSport.remove('event');
        $('show2').innerHTML = '나머지 key : ' + likeSport.keys().inspect();

        $('show3').innerHTML = '전부 삭제 : ' + likeSport.remove('number', 'time').inspect();
        $('show4').innerHTML = '나머지 key : ' + likeSport.keys().inspect(); 
    }
}

//692 라인
//remove: function() {
//    var result;
//    for(var i = 0, length = arguments.length; i < length; i++) {
//        var value = this[arguments[i]];
//        if (value !== undefined){
//            if (result === undefined) result = value;
//            else {
//                if (result.constructor != Array) result = [result];
//                result.push(value)
//            }
//        }
//        delete this[arguments[i]];
//    }
//    return result;
//},
