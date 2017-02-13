//-----------------------------------------------------
// Hash.each
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var likeSport = $H({event: '농구', number: '5명', time: '48분'});
 
        likeSport.each(function(hash, index) {
            $('show' + index).innerHTML = hash.key + ': ' + hash.value;        
        });
    }
}

// 665 라인
//_each: function(iterator) {
//    for (var key in this) {
//        var value = this[key];
//        if (value && value == Hash.prototype[key]) continue;
//
//        var pair = [key, value];
//        pair.key = key;
//        pair.value = value;
//        iterator(pair);
//    }
//},
