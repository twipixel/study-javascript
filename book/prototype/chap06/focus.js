//-----------------------------------------------------
// Form.Element.focus()
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('mountainClick', 'click', Show.mtnClick);
    Event.observe('riverClick', 'click', Show.riverClick);
    Event.observe('moveClick', 'click', Show.moveClick);
});
var Show = {
    mtnClick: function(event) {
        $('show1').innerHTML = Form.Element.focus('likeMountain');
    },
    riverClick: function(event) {
        $('show2').innerHTML = $('likeRiver').focus();
    },
    moveClick: function(event) {
        $('show3').innerHTML = Form.Element.focus('focusButton');
    }
}

//1964 라인
//Form.Element = {
//    focus: function(element) {
//        $(element).focus();
//        return element;
//    },
