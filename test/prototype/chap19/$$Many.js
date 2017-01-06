//-----------------------------------------------------
// Selector
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        selectTag = $$('option');
        Show.result(selectTag, '1');

        selectTag = $$('#sport option');
        Show.result(selectTag, '2');

        selectTag = $$('#river option', '#manyKind div');
        Show.result(selectTag, '3');

        selectTag = $$('*[class]');
        Show.result(selectTag, '4');

        selectTag = $$('option.cssShow');
        selectTag.each(function(value, index) {
            $(value.id).selected = true;
        });
        Show.result(selectTag, '5');

        selectTag = $$('div[class]');
        Show.result(selectTag, '6');

        selectTag = $$('*[class="cssShow"]');
        Show.result(selectTag, '7');

        selectTag = $$('div[class~="cssShow"]');
        Show.result(selectTag, '8');

        selectTag = $$('option[class!="cssShow"]');
        Show.result(selectTag, '9');
    },

    result: function(selectTag, showID) {
        var idResult = [];
        selectTag.each(function(value, index) {
            idResult[index] = value.id;
        });
        $('show' + showID).innerHTML = showID + ' 결과: ' + idResult.inspect();
    }
}
