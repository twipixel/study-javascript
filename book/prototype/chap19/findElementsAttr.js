//-----------------------------------------------------
// Selector.findElements
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        selectTag = 'p[title]';
        Show.result(selectTag, '1');

        selectTag = '*[class]';
        Show.result(selectTag, '2');

        selectTag = 'p[class="commClass"]';
        Show.result(selectTag, '3');

        selectTag = 'p[class!="commClass"]';
        Show.result(selectTag, '4');

        selectTag = 'p[class~="commClass"]';
        Show.result(selectTag, '5');
    },

    result: function(selectTag, showID) {
        var newTag = new Selector(selectTag);
        var findScope = newTag.findElements();

        var idResult = [];
        findScope.each(function(value, index) {
            idResult[index] = value.id;
        });        
        $('show' + showID).innerHTML = showID + ' 결과: ' + idResult.inspect();
    }
}
