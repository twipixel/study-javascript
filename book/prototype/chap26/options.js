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
            method: 'get',                                                         //GET 방법 
            asynchronous: true,                                                 //비동기 통신
            contentType:  'application/x-www-form-urlencoded',     //Content-Type
            encoding:     'UTF-8',                                              //인코딩 타입
            parameters:  {'newData': dataChange},                       //서버로 보낼 데이터
            requestHeaders: {'likeSport': 'basketBall'},                  //Header
            
            onSuccess: function(xmlHttp, json) {
                $('show1').innerHTML = xmlHttp.responseText;
            }
        });
    }
}
