//-----------------------------------------------------
// $A
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        //<div> id 출력
        var allDiv = document.getElementsByTagName('div');
        var eachDiv = $A(allDiv);

        var showResult = '';
        for (var i = 0; i < eachDiv.length; i++) {
            showResult += eachDiv[i].id + ', ';
        }
        $('show1').innerHTML = 'div.id : ' + showResult;

        //select/option 명칭 출력
        var showOption = '';
        var allOption = $('sportChoice').getElementsByTagName('option');
        $A(allOption).each(function(value) {
            showOption += value.text + ': ' + value.value + ', ';    
        });
        $('show2').innerHTML = 'text,value: ' + showOption;
    }
}

// 521 라인
//var $A = Array.from = function(iterable) {
//    if (!iterable) return [];
//    if (iterable.toArray) {
//        return iterable.toArray();
//    } else {
//        var results = [];
//        for (var i = 0, length = iterable.length; i < length; i++)
//            results.push(iterable[i]);
//        return results;
//    }
//}
