//-----------------------------------------------------
// Element.ClassNames.add
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var addClassName = new Element.ClassNames('likeSport');
        addClassName.add('twoCss');

        var returnCss = $('likeSport').classNames();
        $('show1').innerHTML = 'class 이름: ' +  returnCss;
    }
}

// 1728 라인
//add: function(classNameToAdd) {
//    if (this.include(classNameToAdd)) return;
//    this.set($A(this).concat(classNameToAdd).join(' '));
//},
