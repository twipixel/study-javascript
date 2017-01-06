//-----------------------------------------------------
// Form.Element.getValue()
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {       
        //라디오 버튼
        $('show1').innerHTML = '한라산 선택: ' + Form.Element.getValue('mountain1');
        $('show2').innerHTML = '지리산 선택: ' + Form.Element.getValue('mountain2');

        //체크 박스
        var showResult = '';
        for (var i = 1; i < 4; i++) {
            var idNumber = 'check' + i;
            var methodResult =  Form.Element.getValue(idNumber);
            showResult += (idNumber + ': ' + methodResult + ',  ');
        }
        $('show3').innerHTML = showResult;
    }
}
