//-----------------------------------------------------
// Element.up
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        $('show1').innerHTML = '기준: jongno(종로)';
        var sibling = $('jongno').up();
        $('show2').innerHTML = 'up(): ' + sibling.id;
        sibling = $('jongno').up(1);
        $('show3').innerHTML = 'up(1): ' + sibling.id;

        sibling = $('jongno').up('.className');
        $('show4').innerHTML = 'up(.className): ' + sibling.id;
        sibling = $('jongno').up('.className', 1);
        $('show5').innerHTML = 'up(.className, 1): ' + sibling.id;
        sibling = $('jongno').up('div.className');
        $('show6').innerHTML = 'up(div.className): ' + sibling.id;

        sibling = $('jongno').up('#jejudo');
        $('show7').innerHTML = 'up(#jejudo): ' + sibling;
    }
}

// 1244 라인
//up: function(element, expression, index) {
//    return Selector.findElement($(element).ancestors(), expression, index);
//},
