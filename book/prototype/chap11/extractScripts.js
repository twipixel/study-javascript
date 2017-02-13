//-----------------------------------------------------
// String.extractScripts()
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var scriptElmt = "<script>$('show3').innerHTML='스포츠'</script><p>취미</p>";
        scriptElmt += "<script>$('show4').innerHTML='아름다운 우리강산'</script>";        
        var resultStrip = scriptElmt.extractScripts();

        if (window.ActiveXObject) {
            $('show1').innerText = '문자열 : ' + scriptElmt.inspect();
            $('show2').innerText = 'extractScripts() : ' + resultStrip.inspect();
        } else {
            $('show1').textContent = '문자열 : ' + scriptElmt.inspect();
            $('show2').textContent = 'extractScripts() : ' + resultStrip.inspect();
        }
        resultStrip.map(function(element) {
            return eval(element);
        });
    }
}

// 203 라인
//extractScripts: function() {
//    var matchAll = new RegExp(Prototype.ScriptFragment, 'img');
//    var matchOne = new RegExp(Prototype.ScriptFragment, 'im');
//    return (this.match(matchAll) || []).map(function(scriptTag) {
//        return (scriptTag.match(matchOne) || ['', ''])[1];
//    });
//},
