//-----------------------------------------------------
// Form.getElements
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var resultSelect = Form.getElements('formOne');

        var showInput = '';
        for (i = 0; i < resultSelect.length; i++) {
            showInput += resultSelect[i].id + ', ';
        }
        $('show1').innerHTML = 'ID: ' + showInput;
    }
}

// 1903 라인
//getElements: function(form) {
//    return $A($(form).getElementsByTagName('*')).inject([],
//        function(elements, child) {
//            if (Form.Element.Serializers[child.tagName.toLowerCase()])
//                elements.push(Element.extend(child));
//            return elements;
//        }
//    );
//},
