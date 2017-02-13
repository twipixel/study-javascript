//-----------------------------------------------------
// Form.Element.activate()
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('mountainClick', 'click', Show.mtnClick);
    Event.observe('riverClick', 'click', Show.riverClick);
    Event.observe('hereCursor', 'click', Show.hereClick);
    Event.observe('buttonCursor', 'click', Show.buttonClick);
});
var Show = {
    mtnClick: function(event) {
        var rtnMountain = Form.Element.activate('likeMountain');
        $('show1').innerHTML = rtnMountain.id;
    },
    riverClick: function(event) {
        var rtnRiver = Form.Element.activate('likeRiver');
        $('show2').innerHTML = rtnRiver.id;
    },
    hereClick: function(event) {
        var rtnCusor = Form.Element.activate('afterCursor');
        $('show3').innerHTML = rtnCusor.id;
    },
    buttonClick: function(event) {
        var rtnSelect = Form.Element.activate('buttonSelect');
        $('show4').innerHTML = rtnSelect.id;
    }
}

//2005 라인
//activate: function(element) {
//    element = $(element);
//    element.focus();
//    if (element.select && ( element.tagName.toLowerCase() != 'input' ||
//        !['button', 'reset', 'submit'].include(element.type) ) )
//        element.select();
//    return element;
//},
