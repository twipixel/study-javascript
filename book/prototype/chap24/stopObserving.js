//-----------------------------------------------------
// Event.stopObserving()
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('elementClick', 'click', Show.mouseClick);
    Event.observe('clickStop', 'click', Show.stopClick);
});
var Show = {
    clickCount: 0,
 
    mouseClick: function(event) {
        Show.clickCount += 1;
        $('show1').innerHTML = '클릭 카운트 : ' + Show.clickCount;
    },
    stopClick: function(event) {
        Event.stopObserving('elementClick', 'click', Show.mouseClick);
        $('show1').innerHTML = '이벤트 설정 해제';
    }
}

// 2269 라인
//stopObserving: function(element, name, observer, useCapture) {
//    element = $(element);
//    useCapture = useCapture || false;
//
//    if (name == 'keypress' &&
//        (navigator.appVersion.match(/Konqueror|Safari|KHTML/)
//        || element.detachEvent))
//        name = 'keydown';
//
//    if (element.removeEventListener) {
//        element.removeEventListener(name, observer, useCapture);
//    } else if (element.detachEvent) {
//        try {
//            element.detachEvent('on' + name, observer);
//        } catch (e) {}
//    }
//}
