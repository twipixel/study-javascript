//-----------------------------------------------------
// Element.empty
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var blankUse = $('blankInclude').empty();
        var blankNothing = $('charInclude').empty();

        if (window.ActiveXObject) {
            $('show1').innerText = '빈문자열: ' + blankUse;
            $('show2').innerText = '문자 포함: ' + blankNothing;
        } else {
            $('show1').textContent = '빈문자열: ' + blankUse;
            $('show2').textContent = '문자 포함: ' + blankNothing;
        }
    }
}

// 1344 라인
//empty: function(element) {
//    return $(element).innerHTML.match(/^\s*$/);
//},
