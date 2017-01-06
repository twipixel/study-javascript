//-----------------------------------------------------
// Element.visible
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('showClick', 'click', Show.visible);
    Event.observe('noneClick', 'click', Show.noneVisible);
});
var Show = {
    visible: function(event) {
        $('likeSport').show();
        $('show1').innerHTML = '상태 : ' + Element.visible('likeSport');
    },
    noneVisible: function(event) {
        $('likeSport').hide();
        $('show1').innerHTML = '상태 : ' + Element.visible('likeSport');
    }
}

// 1142 라인
//visible: function(element) {
//    return $(element).style.display != 'none';
//},
