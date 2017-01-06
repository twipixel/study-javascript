//-----------------------------------------------------
// String.stripScripts
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var scriptElmt = '<script><p>스포츠</p></script>농구,축구';
        
        if (window.ActiveXObject) {
            $('show1').innerText = scriptElmt;
        } else {
            $('show1').textContent = scriptElmt;
        }

        var resultStrip = scriptElmt.stripScripts();
        $('show2').innerHTML = 'stripScripts() : ' + scriptElmt;
    }
}

// 199 라인
//stripScripts: function() {
//    return this.replace(new RegExp(Prototype.ScriptFragment, 'img'), '');
//},
