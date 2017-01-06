//-----------------------------------------------------
// Form.getInputs
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        //form 지정
        var resultSelect = Form.getInputs('formOne');
        var showInput = '';
        for (i = 0; i < resultSelect.length; i++) {
            showInput += resultSelect[i].id + ', ';
        }
        $('show1').innerHTML = '폼 전체 --> ' + showInput;

        //form, typeName 지정
        resultSelect = Form.getInputs('formOne', 'radio');
        showInput = '';
        for (i = 0; i < resultSelect.length; i++) {
            showInput += resultSelect[i].id + ', ';
        }
        $('show2').innerHTML = 'type: radio 지정 --> ' + showInput;

        //form, typeName, name 지정
        resultSelect = Form.getInputs('formOne', 'radio', 'nameRiver');
        showInput = '';
        for (i = 0; i < resultSelect.length; i++) {
            showInput += resultSelect[i].id + ', ';
        }
        $('show3').innerHTML = 'type: radio, name: nameRiver 지정 --> ' + showInput;

        //form,'', name 지정
        resultSelect = Form.getInputs('formOne', '', 'nameRiver');
        showInput = '';
        for (i = 0; i < resultSelect.length; i++) {
            showInput += resultSelect[i].id + ', ';
        }
        $('show4').innerHTML = 'name: nameRiver만 지정 --> ' + showInput;
    }
}

// 1913 라인
//getInputs: function(form, typeName, name) {
//    form = $(form);
//    var inputs = form.getElementsByTagName('input');
//
//    if (!typeName && !name) return $A(inputs).map(Element.extend);
//
//    for (var i = 0, matchingInputs = [], length = inputs.length; i < length; i++) {
//        var input = inputs[i];
//        if ((typeName && input.type != typeName) || (name && input.name != name))
//            continue;
//        matchingInputs.push(Element.extend(input));
//    }
//
//    return matchingInputs;
//},
