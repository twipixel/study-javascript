//-----------------------------------------------------
// $R()
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var falseRange = $R(-2, 2);
        var joinValue = '';
        falseRange.each(function(value) { 
            joinValue += value + ', ';
        });
        $('show1').innerHTML = joinValue; 
        $('show2').innerHTML = falseRange.include(1);

        var trueRange = $A($R('가', '간', true));
        $('show3').innerHTML = trueRange.inspect();
    }
}

// 749 라인
//var $R = function(start, end, exclusive) {
//    return new ObjectRange(start, end, exclusive);
//}
