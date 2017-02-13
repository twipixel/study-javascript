//-----------------------------------------------------
// Selector
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var selectTag = 'a[title]';
        Show.patternMatch(selectTag, '1');

        selectTag = '*[title]';
        Show.patternMatch(selectTag, '2');

        selectTag = 'a[title="Ajax"]';
        Show.patternMatch(selectTag, '3');

        selectTag = 'a[title!="Ajax"]';
        Show.patternMatch(selectTag, '4'); 

        selectTag = 'a[title~="Ajax"]';
        Show.patternMatch(selectTag, '5');

        selectTag = 'a[title|="Ajax"]';
        Show.patternMatch(selectTag, '6');
    },

    patternMatch: function(selectTag, showD) {
        var match = selectTag.match(/^(.*)\[([a-z0-9_:-]+?)(?:([~\|!]?=)(?:"([^"]*)"|([^\]\s]*)))?\]$/i);
        $('show' + showD).innerHTML = showD + ' 결과 : ' + match.inspect();;
    }
}

// 1753 라인
//parseExpression: function() {
//    function abort(message) { throw 'Parse error in selector: ' + message; }
//
//    if (this.expression == '')  abort('empty expression');
//
//    var params = this.params, expr = this.expression, match, modifier, clause, rest;
//    while (match = expr.match(/^(.*)\[([a-z0-9_:-]+?)(?:([~\|!]?=)(?:"([^"]*)"|([^\]\s]*)))?\]$/i)) {
//        params.attributes = params.attributes || [];
//        params.attributes.push({name: match[2], operator: match[3], value: match[4] || match[5] || ''});
//        expr = match[1];
//    }
