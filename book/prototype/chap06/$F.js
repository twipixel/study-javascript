//-----------------------------------------------------
// $F() 함수
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        $('show1').innerHTML = 'ID : ' + $F('likeRiver');

        var inputValue = document.getElementById('likeRiver').value;
        document.getElementById('show2').innerHTML  = 'DOM : ' + inputValue;

        var useObject = $('likeRiver');
        $('show3').innerHTML = '오브젝트 : ' + $F(useObject);

        $('show4').innerHTML = '다수 선택 : ' + $F('sportSelect').inspect();
    }
}

// 2030 라인
//var $F = Form.Element.getValue;
