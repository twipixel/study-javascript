//-----------------------------------------------------
// $() 함수 형태와 일반적인 형태
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        document.getElementById('show1').innerHTML  = '설악산';
            
        var showResult = document.getElementById('show2');
        showResult.innerHTML = '속리산';

        showResult = $('show3');
        showResult.innerHTML = '한라산';

        $("show4").innerHTML = '지리산';
    }
}
