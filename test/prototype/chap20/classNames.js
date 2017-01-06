//-----------------------------------------------------
// Element.classNames
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var returnCss = $('likeSport').classNames();
        $('show1').innerHTML = '스포츠 : ' +  returnCss;

        $('spaceTravel').className = returnCss;
        $('show2').innerHTML = '우주여행 : ' +   $('spaceTravel').className;

        returnCss.set('cssName')
        $('show3').innerHTML = '인스턴스 : ' +  $('likeSport').classNames();
    }
}

// 1289 라인
//classNames: function(element) {
//    return new Element.ClassNames(element);
//},
