//-----------------------------------------------------
// $H
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var likeSport = {sport: '농구', number: '5명'};
        var newHash = new Hash(likeSport);
        $('show1').innerHTML = 'new Hash: ' + newHash.sport; 

        var hashSport = $H(likeSport);
        $('show2').innerHTML = '$H: ' + hashSport.sport;
    }
}

// 719 라인
//function $H(object) {
//    if (object && object.constructor == Hash) return object;
//    return new Hash(object);
//};

// 632 라인
//var Hash = function(obj) {
//    Object.extend(this, obj || {});
//};
