//-----------------------------------------------------
// Position.page
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.cloneRun);
    Event.observe('cancelClick', 'click', Show.cloneCancel);
    Event.observe('setLeftClick', 'click', Show.setLeft);
    Event.observe('setTopClick', 'click', Show.setTop);
    Event.observe('offsetClick', 'click', Show.offset);
});
var Show = {
    cloneRun: function(event) {
        Position.clone('sourceClone', 'targetClone');
    },
    cloneCancel: function(event) {
        $('targetClone').setStyle({
            top: '', left: '', width: '', height: ''
        });
    },
    setLeft: function(event) {
        var userDefine = {};
        userDefine.setLeft = false;
        Position.clone('sourceClone', 'targetClone', userDefine);  
    },
    setTop: function(event) {
        var userDefine = {};
        userDefine.setTop = false;
        Position.clone('sourceClone', 'targetClone', userDefine);
    },
    offset: function(event) {
        var userDefine = {};
        userDefine.setWidth = false;
        userDefine.setHeight = false;
        userDefine.offsetTop = 50;
        userDefine.offsetLeft = 30;
        Position.clone('sourceClone', 'targetClone', userDefine);  
    }
}

//2419 라인
//clone: function(source, target) {
//    var options = Object.extend({
//        setLeft:    true,
//        setTop:     true,
//        setWidth:   true,
//        setHeight:  true,
//        offsetTop:  0,
//        offsetLeft: 0
//    }, arguments[2] || {})
//
//    // find page position of source
//    source = $(source);
//    var p = Position.page(source);
//
//    // find coordinate system to use
//    target = $(target);
//    var delta = [0, 0];
//    var parent = null;
//    // delta [0,0] will do fine with position: fixed elements,
//    // position:absolute needs offsetParent deltas
//    if (Element.getStyle(target,'position') == 'absolute') {
//        parent = Position.offsetParent(target);
//        delta = Position.page(parent);
//    }
//
//    // correct by body offsets (fixes Safari)
//    if (parent == document.body) {
//        delta[0] -= document.body.offsetLeft;
//        delta[1] -= document.body.offsetTop;
//    }
//
//    // set position
//    if(options.setLeft)   target.style.left  = (p[0] - delta[0] + options.offsetLeft) + 'px';
//    if(options.setTop)    target.style.top   = (p[1] - delta[1] + options.offsetTop) + 'px';
//    if(options.setWidth)  target.style.width = source.offsetWidth + 'px';
//    if(options.setHeight) target.style.height = source.offsetHeight + 'px';
//},
