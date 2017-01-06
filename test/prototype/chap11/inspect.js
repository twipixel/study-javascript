//-----------------------------------------------------
// String.inspect
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var baseString = "좋아하는 '스포츠: ' \\농구 \축구";

        $('show1').innerHTML = '문자열: ' + baseString;
        $('show2').innerHTML = 'Single Quotes: ' + baseString.inspect();
        $('show3').innerHTML = 'Double Quotes: ' + baseString.inspect(true);
    }
}

// 285 라인
//inspect: function(useDoubleQuotes) {
//    var escapedString = this.replace(/\\/g, '\\\\');
//    if (useDoubleQuotes)
//        return '"' + escapedString.replace(/"/g, '\\"') + '"';
//    else
//        return "'" + escapedString.replace(/'/g, '\\\'') + "'";
//}
