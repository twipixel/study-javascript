//-----------------------------------------------------
// Form.Element.serialize
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {

        //라디오 버튼
        var returnMtn = Form.Element.serialize('mountain1');
        if (returnMtn) {
            $('show1').innerHTML = '산: ' + returnMtn;
        } else {   
            $('show1').innerHTML = '산: ' +  Form.Element.serialize('mountain2');
        }

        //체크 박스
        var showResult = '';
        for (var i = 1; i < 4; i++) {
            var idNumber = 'check' + i;
            var methodResult =  Form.Element.serialize(idNumber);
            showResult += methodResult + ',  ';
        }
        $('show2').innerHTML = '강: ' + showResult;
    }
}
