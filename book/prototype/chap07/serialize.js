//-----------------------------------------------------
// Form.serialize
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        $('show1').innerHTML = Form.serialize('formOne');

        var keyValue = Form.serialize('formOne', 'NS');
        var i = 2;
        for ( var property in keyValue) {
            $('show' + i++).innerHTML = property + ': ' + keyValue[property];        
        }
    }
}

// 1899 라인
//serialize: function(form, getHash) {
//    return Form.serializeElements(Form.getElements(form), getHash);
//},
