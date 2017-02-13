//-----------------------------------------------------
// String.succ
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var baseAlpha = 'ABCDE';
        $('show1').innerHTML = baseAlpha.succ();

        var baseNumber = '12345';
        $('show2').innerHTML = baseNumber.succ();
    }
}

// 254 라인
//succ: function() {
//    return this.slice(0, this.length - 1) +
//        String.fromCharCode(this.charCodeAt(this.length - 1) + 1);
//},
