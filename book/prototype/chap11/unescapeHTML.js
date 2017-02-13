//-----------------------------------------------------
// String.unescapeHTML
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var escapeElmt = '<select><option>';
        escapeElmt += '&lt;div&gt;Ajax&lt;/div&gt;';
        escapeElmt += '&lt;div&gt;prototype&lt;/div&gt;';
        //  '<div>Ajax</div><div>prototype</div>';

        var elmtAjax = escapeElmt.unescapeHTML();
        if (window.ActiveXObject) {
            $('show1').innerText = escapeElmt;
            $('show2').innerText = 'unescapeHTML() : ' +elmtAjax;
        } else  {
            $('show1').textContent = escapeElmt;
            $('show2').textContent = 'unescapeHTML() : ' + elmtAjax;
        }
        $('show3').innerHTML = 'innerHTML : ' + elmtAjax;
    }
}

// 222 라인
//unescapeHTML: function() {
//    var div = document.createElement('div');
//    div.innerHTML = this.stripTags();
//    return div.childNodes[0] ? (div.childNodes.length > 1 ?
//        $A(div.childNodes).inject('',function(memo,node){ return memo+node.nodeValue }) :
//        div.childNodes[0].nodeValue) : '';
//},
