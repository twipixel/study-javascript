//-----------------------------------------------------
// String.strip
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var scriptElmt = ' Ajax Prototype  ';
        
        $('show1').innerHTML = '실행전 문자열 : ' + scriptElmt;
        $('show2').innerHTML = '실행전 length : ' + scriptElmt.length;

        var resultStrip = scriptElmt.strip();
        $('show3').innerHTML = '실행후 length : ' + resultStrip.length;
    }
}

// 191 라인
//strip: function() {
//    return this.replace(/^\s+/, '').replace(/\s+$/, '');
//},
