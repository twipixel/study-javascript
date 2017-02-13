//-----------------------------------------------------
// Element.ClassNames.remove
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var removeClassName = new Element.ClassNames('likeSport');
        removeClassName.remove('twoCss');

        var returnCss = $('likeSport').classNames();
        $('show1').innerHTML = 'class 이름: ' +  returnCss;
    }
}

// 1733 라인
//remove: function(classNameToRemove) {
//    if (!this.include(classNameToRemove)) return;
//    this.set($A(this).without(classNameToRemove).join(' '));
//},
