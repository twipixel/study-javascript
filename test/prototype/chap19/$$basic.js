//-----------------------------------------------------
// Selector
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var selectTag = document.getElementsByTagName('div');
        var idResult = [];
        $A(selectTag).each(function(value, index) {
            idResult[index] = value.id;
        });
        Show.result(idResult, '1');
        
        selectTag = $$('div');
        idResult = [];
        selectTag.each(function(value, index) {
            idResult[index] = value.id;
        });
        Show.result(idResult, '2');

        idResult = [];
        $$('div').each(function(value, index) {
            idResult[index] = value.id;
        });
        Show.result(idResult, '3');
    },

    result: function(idResult, showID) {
        $('show' + showID).innerHTML = showID + ' 결과: ' + idResult.inspect();
    }
}

//1870 라인
//function $$() {
//    return Selector.findChildElements(document, $A(arguments));
//}
