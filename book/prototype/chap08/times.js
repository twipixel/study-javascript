//-----------------------------------------------------
// Number.times()
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var timesValue = 3;
        timesValue.times(function(index) {
            $('show' + (index + 1)).innerHTML = '반복 차수: ' + index;
        });
    }
}

// 93 라인
//times: function(iterator) {
//    $R(0, this, true).each(iterator);
//    return this;
//}
