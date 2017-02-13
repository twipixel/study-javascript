//-----------------------------------------------------
// Selector
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var selectTag = new Selector('div');
        var findScope = selectTag.findElements();

        var idResult = [];
        findScope.each(function(value, index) {
            idResult[index] = value.id;
        });
        $('show1').innerHTML = '결과: ' + idResult.inspect();
    }
}
