//-----------------------------------------------------
// Element.getElementsBySelector
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var selector = $('korea').getElementsBySelector('div');
        Show.result(selector, '1');
        selector = $('korea').getElementsBySelector('#sport option');
        Show.result(selector, '2');

        selector = $('korea').getElementsBySelector('*[class]');
        Show.result(selector, '3');
        selector = $('korea').getElementsBySelector('option.className');
        Show.result(selector, '4');

        selector = $('korea').getElementsBySelector('div[class]');
        Show.result(selector, '5');
        selector = $('korea').getElementsBySelector('*[class="className"]');
        Show.result(selector, '6');

        selector = $('korea').getElementsBySelector('div[class~="className"]');
        Show.result(selector, '7');
        selector = $('korea').getElementsBySelector('div[class!="className"]');
        Show.result(selector, '8');
    },

    result: function(selector, showID) {
        var idResult = [];
        selector.each(function(value, index) {
            idResult[index] = value.id;
        });
        $('show' + showID).innerHTML = showID + ' 결과: ' + idResult.inspect();
    }
}

// 1260 라인
//getElementsBySelector: function() {
//    var args = $A(arguments), element = $(args.shift());
//    return Selector.findChildElements(element, args);
//},
