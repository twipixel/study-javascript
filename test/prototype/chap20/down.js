//-----------------------------------------------------
// Element.down
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        $('show1').innerHTML = '기준: korea(대한민국)';
        var sibling = $('korea').down();
        $('show2').innerHTML = 'down(): ' + sibling.id;
        sibling = $('korea').down(1);
        $('show3').innerHTML = 'down(1): ' + sibling.id;

        sibling = $('korea').down('.className');
        $('show4').innerHTML = 'down(.className): ' + sibling.id;
        sibling = $('korea').down('.className', 2);
        $('show5').innerHTML = 'down(.className, 2): ' + sibling.id;
        sibling = $('korea').down('div.className');
        $('show6').innerHTML = 'down(div.className): ' + sibling.id;

        sibling = $('korea').down('#jejudo');
        $('show7').innerHTML = 'down(#jejudo): ' + sibling;
    }
}

// 1248 라인
//down: function(element, expression, index) {
//    return Selector.findElement($(element).descendants(), expression, index);
//},
