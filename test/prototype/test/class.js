//-----------------------------------------------------
// Ajax.Request
//-----------------------------------------------------

(function() {
    console.log('-');


    var sum = $R(1,10).inject(0, function(acc, n) { return acc + n; });
    // -> 55 (sum of 1 to 10)

    console.log('sum', sum);

    var join = ['a', 'b', 'c', 'd', 'e'].inject([], function(string, value, index) {
        if (index % 2 === 0) { // even numbers
            string += value;
        }
        return string;
    });

    console.log('join', join);

}());



(function() {
    console.log('n');
}());