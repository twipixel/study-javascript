//-----------------------------------------------------
// Element.previous
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        $('show1').innerHTML = '기준: soccer(축구)';
        var sibling = $('soccer').previous();
        $('show2').innerHTML = 'previous(): ' + sibling.innerHTML;
        sibling = $('soccer').previous(1);
        $('show3').innerHTML = 'previous(1): ' + sibling.innerHTML;

        sibling = $('soccer').previous('.className');
        $('show4').innerHTML = 'previous(.className): ' + sibling.innerHTML;
        sibling = $('soccer').previous('.className', 1);
        $('show5').innerHTML = 'previous(.className, 1): ' + sibling.innerHTML;
        sibling = $('soccer').previous('p.className');
        $('show6').innerHTML = 'previous(p.className): ' + sibling.innerHTML;

        sibling = $('soccer').previous('#tabletenis');
        $('show7').innerHTML = '#tabletenis: ' + sibling;
    }
}

// 1252 라인
//previous: function(element, expression, index) {
//    return Selector.findElement($(element).previousSiblings(), expression, index);
//},
