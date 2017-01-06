//-----------------------------------------------------
// Ajax.Request
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', AJAXComm.fileReceive);
});
var AJAXComm = {
    fileReceive: function(event) {
        var dataChange = (new Date()).getTime();

        var URL = 'welcome.txt';
        new Ajax.Request(URL, {
            method: 'get',                                                         //GET ��� 
            asynchronous: true,                                                 //�񵿱� ���
            contentType:  'application/x-www-form-urlencoded',     //Content-Type
            encoding:     'UTF-8',                                              //���ڵ� Ÿ��
            parameters:  {'newData': dataChange},                       //������ ���� ������
            requestHeaders: {'likeSport': 'basketBall'},                  //Header
            
            onSuccess: function(xmlHttp, json) {
                $('show1').innerHTML = xmlHttp.responseText;
            }
        });
    }
}
