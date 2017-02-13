//-----------------------------------------------------
// Element.match
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {       
        $('show1').innerHTML = 'p: ' + $('sport').match('p');
        $('show2').innerHTML = 'div: ' + $('sport').match('div');
        $('show3').innerHTML = '#sport.sportClass: ' + $('sport').match('#sport.sportClass');
        $('show4').innerHTML = '#sport.abcd: ' + $('sport').match('#sport.abcd');
    }
}

// 1218 라인
//match: function(element, selector) {
//    if (typeof selector == 'string')
//        selector = new Selector(selector);
//    return selector.match($(element));
//},
