//-----------------------------------------------------
// Number.toColorPart
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        $('show1').innerHTML = '15: ' + Number(15).toColorPart();
        $('show2').innerHTML = '16: ' + Number(16).toColorPart();

        var cvtResult = '';
        for (var i = 251; i < 256; i++) {
            cvtResult += i + ': ' + Number(i).toColorPart() + ', ';
        }
        $('show3').innerHTML = '251~255 -> ' + cvtResult;
    }
}

// 83 라인
//toColorPart: function() {
//    var digits = this.toString(16);
//    if (this < 16) return '0' + digits;
//    return digits;
//},
