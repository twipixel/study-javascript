//-----------------------------------------------------
// Element.descendants
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var child = $('korea').descendants();
        child.each(function(value, index) {
            $('show' + index).innerHTML = 'ID: ' + value.id;
        });
    }
}

// 1214 라인
//descendants: function(element) {
//    return $A($(element).getElementsByTagName('*'));
//},
