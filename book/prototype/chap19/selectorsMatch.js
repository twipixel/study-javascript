//-----------------------------------------------------
// Selector
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var selectTag = 'select';
        Show.patternMatch(selectTag, '1');

        selectTag = '#sport';
        Show.patternMatch(selectTag, '2');

        selectTag = 'select#river';
        Show.patternMatch(selectTag, '3');

        selectTag = 'option.cssShow';
        Show.patternMatch(selectTag, '4');
    },

    patternMatch: function(selectTag, showD) {
        var match = selectTag.match(/^([^a-z0-9_-])?([a-z0-9_-]+)(.*)/i);
        $('show' + showD).innerHTML = showD + ' 결과: ' + match.inspect();
    }
}

    this.match = 
new Function('element', 'if (!element.tagName) return false; \
      element = $(element); \
      return ' + this.buildMatchExpression()); 