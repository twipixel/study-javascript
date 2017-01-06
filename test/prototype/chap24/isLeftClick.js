//-----------------------------------------------------
// Event.isLeftClick()
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('elementClick', 'mousedown', Show.mousedown);
    Event.observe('elementClick', 'mouseup', Show.mouseup);
    Event.observe('elementClick', 'click', Show.click);
});
var Show = {
    mousedown: function(event) {
        var clickButton = Event.isLeftClick(event);
        $('show1').innerHTML = 'mousedown : ' + clickButton;
    },
    mouseup: function(event) {
        var clickButton = Event.isLeftClick(event);
        $('show2').innerHTML = 'mouseup : ' + clickButton;
    },
    click: function(event) {
        var clickButton = Event.isLeftClick(event);
        $('show3').innerHTML = 'click : ' + clickButton;
    }
}

// 2200 라인
//isLeftClick: function(event) {
//    return (((event.which) && (event.which == 1)) || 
//            ((event.button) && (event.button == 1)));
//},  
