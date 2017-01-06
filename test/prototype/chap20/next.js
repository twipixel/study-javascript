//-----------------------------------------------------
// Element.next
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        $('show1').innerHTML = '기준: swim(수영)';
        var sibling = $('swim').next();
        $('show2').innerHTML = 'next(): ' + sibling.innerHTML;
        sibling = $('swim').next(1);
        $('show3').innerHTML = 'next(1): ' + sibling.innerHTML;

        sibling = $('swim').next('.className');
        $('show4').innerHTML = 'next(.className): ' + sibling.innerHTML;
        sibling = $('swim').next('.className', 1);
        $('show5').innerHTML = 'next(.className, 1): ' + sibling.innerHTML;
        sibling = $('swim').next('p.className');
        $('show6').innerHTML = 'next(p.className): ' + sibling.innerHTML;

        sibling = $('swim').next('#basket');
        $('show7').innerHTML = '#basket: ' + sibling;
    }
}

// 1256 라인
//next: function(element, expression, index) {
//    return Selector.findElement($(element).nextSiblings(), expression, index);
//},
