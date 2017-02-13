//-----------------------------------------------------
// Element.ClassNames.set
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var setClassName = new Element.ClassNames('likeSport');
        setClassName.set('changeClass');

        var returnCss = $('likeSport').classNames();
        $('show1').innerHTML = 'class 이름: ' +  returnCss;
    }
}
 
// 1724 라인
//set: function(className) {
//    this.element.className = className;
//},
