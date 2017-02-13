//-----------------------------------------------------
// Selector.buildMatchExpression
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var selectTag = 'option';
        Show.result(selectTag, '1');

        selectTag = '#sport';
        Show.result(selectTag, '2');

        selectTag = 'option.cssShow';
        Show.result(selectTag, '3');

        Show.result(selectTag, '4', $('sport'));
    },

    result: function(selectTag, showID, scope) {
        var newTag = new Selector(selectTag);
        var findScope = newTag.findElements(scope);

        var idResult = [];
        findScope.each(function(value, index) {
            idResult[index] = value.id;
        });
        $('show' + showID).innerHTML = showID + ' 결과: ' + idResult.inspect();
    }
}

// 1824 라인
//findElements: function(scope) {
//    var element;
//
//    if (element = $(this.params.id))
//        if (this.match(element))
//            if (!scope || Element.childOf(element, scope))
//                return [element];
//
//    scope = (scope || document).getElementsByTagName(this.params.tagName || '*');
//
//    var results = [];
//    for (var i = 0, length = scope.length; i < length; i++)
//        if (this.match(element = scope[i]))
//            results.push(Element.extend(element));
//
//    return results;
//},
