//-----------------------------------------------------
// String.evalScripts()
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var scriptElmt = "<p>취미는</p>"
                          + "<script>$('show1').innerHTML = '스포츠';</script>"
                          + "<script>$('show2').innerHTML = '바둑';</script>"
                          + "<p>입니다.</p>";
        var returnValue = scriptElmt.evalScripts();
        $('show3').innerHTML = returnValue.inspect();
    }
}

// 211 라인
//evalScripts: function() {
//    return this.extractScripts().map(function(script) { return eval(script) });
//},
