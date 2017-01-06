//-----------------------------------------------------
// Hash.toQueryString
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var likeSport = $H({event: '농구', number: 5, time: 48});
        $('show1').innerHTML = likeSport.toQueryString();

        var hashSport = {event: '농구', number: 5, time: 48};
        $('show2').innerHTML = 'Hash : ' + Hash.toQueryString(hashSport);

        var itemDesc = {item: ['code', 'desc', 'date']};
        $('show3').innerHTML = 'Hash : ' + Hash.toQueryString(itemDesc);
    }
}

// 636 라인
//Object.extend(Hash, {

// 637 라인
//toQueryString: function(obj) {
//    var parts = [];
//
//	   this.prototype._each.call(obj, function(pair) {
//        if (!pair.key) return;
//
//        if (pair.value && pair.value.constructor == Array) {
//            var values = pair.value.compact();
//            if (values.length < 2) pair.value = values.reduce();
//            else {
//                key = encodeURIComponent(pair.key);
//                values.each(function(value) {
//                    value = value != undefined ? encodeURIComponent(value) : '';
//                    parts.push(key + '=' + encodeURIComponent(value));
//                });
//                return;
//            }
//        }
//        if (pair.value == undefined) pair[1] = '';
//        parts.push(pair.map(encodeURIComponent).join('='));
//    });
//
//    return parts.join('&');
//}
