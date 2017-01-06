//-----------------------------------------------------
// String.escapeHTML()
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var elmtAjax = '<div>Ajax</div>';
        var escapeElmt = elmtAjax.escapeHTML();

        if (window.ActiveXObject) {
            $('show1').innerText = '문자열 : ' + elmtAjax;
            $('show2').innerText = 'escapeHTML() : ' +escapeElmt;
        } else  {
            $('show1').textContent = '문자열 : ' + elmtAjax;
            $('show2').textContent = 'escapeHTML() : ' + escapeElmt;
        }
        $('show3').innerHTML = 'innerHTML : ' + escapeElmt;
    }
}

// 215 라인
//escapeHTML: function() {
//    var div = document.createElement('div');
//    var text = document.createTextNode(this);
//    div.appendChild(text);
//    return div.innerHTML;
//},
