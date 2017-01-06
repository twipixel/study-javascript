//-----------------------------------------------------
// Form.Element.select()
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('mountainClick', 'click', Show.mtnClick);
    Event.observe('riverClick', 'click', Show.riverClick);
    Event.observe('fullClick', 'click', Show.fullClick);
    Event.observe('shortClick', 'click', Show.shortClick);
    Event.observe('buttonCursor', 'click', Show.buttonCursor);
});
var Show = {
    mtnClick: function(event) {
        $('show1').innerHTML = Form.Element.select('likeMountain');
    },
    riverClick: function(event) {
        $('show2').innerHTML = Form.Element.select('likeRiver');
    },
    fullClick: function(event) {
        $('show3').innerHTML = Form.Element.select('fullButton');
    },
    shortClick: function(event) {
         $('show4').innerHTML = $('shortButton').select();
    },
    buttonCursor: function(event) {
         $('show5').innerHTML = $('buttonSelect').select();
    }
}

//1970 라인
//select: function(element) {
//    $(element).select();
//    return element;
//}
