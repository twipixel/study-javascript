//-----------------------------------------------------
// Ajax.Request
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', AJAXComm.fileReceive);
});

var AJAXComm = {
    fileReceive: function(event) {
        var URL = 'likeSport.txt';
        new Ajax.Request(URL, {
            on200: function(xmlHttp, xjson) {
                $('show1').innerHTML = 'on200 : ' + xmlHttp.responseText;
            },
            onSuccess: function(xmlHttp, xjson) {
                $('show2').innerHTML = 'onSuccess : ' + xmlHttp.responseText;
            },
            onFailure: function(xmlHttp, xjson) {
                $('show3').innerHTML = 'onFailure : ' + URL;
            }
        });
    }
}
