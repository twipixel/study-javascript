//-----------------------------------------------------
// Enumerable.inspect
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {

        var trueRange = $R('가', '간');
        if (window.ActiveXObject) {
            $('show1').innerText = Object.inspect(trueRange);
        } else  {
            $('show1').textContent = Object.inspect(trueRange);
        }
    }
}

// 509 라인
//inspect: function() {
//    return '#<Enumerable:' + this.toArray().inspect() + '>';
//}
