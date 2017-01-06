//-----------------------------------------------------
// Ajax.Request
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', AJAXComm.fileReceive);
});

var AJAXComm = {
    fileReceive: function(event) {
        var URL = 'AjaxFile.txt';    //없는 파일
        new Ajax.Request(URL, {
            onSuccess: function(xmlHttp, xjson) {
                $('show1').innerHTML = xmlHttp.responseText;
            },
            onFailure: function(xmlHttp, xjson) {
                $('show2').innerHTML = 'onFailure : ' + URL;
            }
        });
    }
}

//onComplete: function(xmlHttp, xjson) {
//    $('show1').innerHTML = xmlHttp.responseText;
//},
