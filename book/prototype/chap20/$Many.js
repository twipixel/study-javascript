//-----------------------------------------------------
// $() 함수에 다수의 아규먼트 사용
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var MountainArray = new Array('한라산', '지리산');
        // 일반적인 형태
        document.getElementById('dom1').innerHTML = MountainArray[0];
        document.getElementById('dom2').innerHTML = MountainArray[1];

         // $() 함수 형태
        var elementArray = $('loop1', 'loop2');
        for (var i = 0; i < MountainArray.length; i++) {
            elementArray[i].innerHTML = MountainArray[i];
        }
         // each()
        $('likeSport1', 'likeSport2').each(function(htmlElement, index) {
            $('sport' + index).innerHTML = htmlElement.value;
        });
    }
}
// 변수형태의 아규먼트 사용 : IE에서만 사용 가능
//    var stringArray = $(string1, string2);
//    for (var k = 0; k < stringArray.length; k++) {
//        stringArray[k].innerHTML = MountainArray[k];
//    }    

//1066 라인
//function $(element) {
//    if (arguments.length > 1) {
//        for (var i = 0, elements = [], length = arguments.length; i < length; i++)
//            elements.push($(arguments[i]));
//        return elements;
//    }
//    if (typeof element == 'string')
//        element = document.getElementById(element);
//    return Element.extend(element);
//}
