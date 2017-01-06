//-----------------------------------------------------
// Ajax.Request
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', AJAXComm.fileReceive);
});
var AJAXComm = {
    fileReceive: function(event) {
        var URL = 'jsondata.txt';
        var rqst = new Ajax.Request(URL, {
            onSuccess: function(xmlHttp) {
                DataShow.jsonData(xmlHttp);
            }
        });
    }
}
var DataShow = {
    jsonData: function(xmlHttp) {
        var serverData = xmlHttp.responseText;
        var evalData = eval('(' + serverData + ')');
        
        for (var i=0; i<evalData.zip.length; i++) {
            var varCode = evalData.zip[i].zipcode;    //우편번호
            var varAddr = evalData.zip[i].addr;          //주소

            var editData = "<tr>";
            editData += "<td>" + varCode + "</td>";    //우편번호
            editData += "<td>" + varAddr + "</td>";     //주소
            editData += "</tr>"; 
            new Insertion.Bottom('zipBody', editData);
        }
    }
}
