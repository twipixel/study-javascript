//-----------------------------------------------------
// Ajax.Request
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', AJAXComm.fileReceive);
});

var AJAXComm = {
    fileReceive: function(event) {
        var URL = 'welcome.txt';
        var rqst = new Ajax.Request(URL, {
            onSuccess: function(xmlHttp, xjson) {
                $('show1').innerHTML = xmlHttp.responseText;
                $('show2').innerHTML = 'Etag: ' + rqst.getHeader('Etag');
                $('show3').innerHTML = 'Last-Modified: ' + rqst.getHeader('Last-Modified');
                $('show4').innerHTML = 'Content-Type: ' + rqst.getHeader('Content-Type');
                $('show5').innerHTML = 'Content-Length: ' + rqst.getHeader('Content-Length');
                $('show6').innerHTML = 'Date: ' + rqst.getHeader('Date');
                $('show7').innerHTML = 'Server: ' + rqst.getHeader('Server');
            }
        });
    }
}

//956 라인
//getHeader: function(name) {
//    try {
//        return this.transport.getResponseHeader(name);
//    } catch (e) { return null }
//},
