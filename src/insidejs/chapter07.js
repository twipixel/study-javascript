////////////////////////////////////////////////////////
// 함수형 프로그래밍 예제
////////////////////////////////////////////////////////


function reduce(func, arr, memo) {
    var len = arr.length,
        i = 0,
        accum = memo;

    for (; i < len; i++) {
        accum = func(accum, arr[i]);
    }

    return accum;
}

var arr = [1, 2, 3, 4];

var sum = function (x, y) {
    return x + y;
}


var multiply = function (x, y) {
    return x * y;
}


console.log('reduce(sum, arr, 0): ', reduce(sum, arr, 0));
console.log('reduce(multiply, arr, 1): ', reduce(multiply, arr, 1));


////////////////////////////////////////////////////////
// 팩토리얼
////////////////////////////////////////////////////////


/**
 * 성능 향상을 위한 캐쉬 개념 추가
 * fact는 cache에 접근할 수 있는 클로저를 반환받는다.
 */
var fact = function () {
    var cache = {'0': 1};

    var func = function (n) {
        var result = 0;

        if (typeof(cache[n]) === 'number') {
            result = cache[n];
        } else {
            result = cache[n] = n * func(n - 1);
        }

        return result;
    }

    return func;
}();

console.log('fact(10): ', fact(10));
console.log('fact(20): ', fact(20));


////////////////////////////////////////////////////////
// 메모이제이션 패턴
////////////////////////////////////////////////////////


var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

console.log(fruits.slice(1));

/**
 * 'memoize'란 표현을 사전에서 찾아보면,
 * '계산 결과를 저장해 놓아 이후 다시 계산할 필요 없이
 * 사용할 수 있게 한다는 컴퓨팅 용어'라고 나와 있다.
 * 메모이제이션 패턴은 바로 이러한 기능을 자바스크립트에서 구현한 패턴이다.
 * 기본적으로 계산된 결과를 함수 프로퍼티값으로 담아 놓고 나중에 사용한다.
 */
Function.prototype.memoization = function (key) {
    var arg = Array.prototype.slice.call(arguments, 1);

    console.log(arguments, arg, this.n);

    this.data = this.data || {};

    return this.data[key] !== undefined ?
        this.data[key] : this.data[key] = this.apply(this, arg);
};


function myCal1(input) {
    this.n = "myCal1";
    return input * input;
}

function myCal2(input) {
    this.n = "myCal2";
    return input * input / 4;
}


myCal1.memoization(1, 5);
myCal1.memoization(2, 4);
myCal2.memoization(1, 6);
myCal2.memoization(2, 7);

console.log(myCal1.memoization(1));
console.log(myCal1.memoization(2));
console.log(myCal2.memoization(1));
console.log(myCal2.memoization(2));


////////////////////////////////////////////////////////
// 피보나치 수열
////////////////////////////////////////////////////////


var fibo = function () {
    var cache = {'0': 0, '1': 1};

    var func = function (n) {
        if (typeof(cache[n]) === 'number') {
            result = cache[n];
        } else {
            result = cache[n] = func(n - 1) + func(n - 2);
        }
        return result;
    }
    return func;
}();

console.log('fibo(10): ', fibo(10));


////////////////////////////////////////////////////////
// 팩토리얼, 피보나치 수열 : 함수형 프로그래밍 적용
////////////////////////////////////////////////////////


var cacher = function (cache, func) {
    var calculate = function (n) {
        if (typeof(cache[n]) === 'number') {
            result = cache[n];
        } else {
            result = cache[n] = func(calculate, n);
        }
        return result;
    }
    return calculate;
}

var fact = cacher({'0': 1}, function (func, n) {
    return n * func(n - 1);
});

var fibo = cacher({'0': 0, '1': 1}, function (func, n) {
    return func(n - 1) + func(n - 2);
});

console.log('fact(10): ', fact(10));
console.log('fibo(10): ', fibo(10));


////////////////////////////////////////////////////////
// 커링
////////////////////////////////////////////////////////


var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
//console.log(Array.prototype.slice.call(fruits), args.concat(Array.prototype.slice.call(fruits)));

function calculate(a, b, c) {
    return a * b + c;
}

/**
 * 커링이란 특정 함수에서 정의된 인자의 일부를 넣어 고정시키고,
 * 나머지를 인자로 받는 새로운 함수를 만드는 것을 의미합니다.
 * @param func
 * @returns {Function}
 */
function curry(func) {
    var args = Array.prototype.slice.call(arguments, 1);
    return function () {

        console.log(arguments);
        return func.apply(null, args.concat(Array.prototype.slice.call(arguments)));
    }
}

var newFun1 = curry(calculate, 1);
console.log(newFun1(2, 3));


function curry2(func) {
    var args = Array.prototype.slice.call(arguments, 1);

    return function () {
        var arg_idx = 0;
        for (var i = 0; i < args.length && arg_idx < arguments.length; i++) {
            if (args[i] === undefined)
                args[i] = arguments[arg_idx++];
        }

        return func.apply(null, args);
    }
}

var newFunc2 = curry2(calculate, 1, undefined, 4);
console.log(newFunc2(3));

Function.prototype.bind = function (thisArg) {
    var fn = this;
    var slice = Array.prototype.slice;
    var args = slice.call(arguments, 1);

    return function () {
        return fn.apply(thisArg, args.concat(slice.call(arguments)));
    }
}

var print_all = function (arg) {
    for (var i in this) console.log(i + " : " + this[i]);
    for (var i in arguments) console.log(i + " : " + arguments[i]);
}


var myobj = {
    name: "zzoon"
};

var myfunc = print_all.bind(myobj);
myfunc();

var myfunc1 = print_all.bind(myobj, "iamhjoo", "others");
myfunc1("insidejs");


////////////////////////////////////////////////////////
// bind
////////////////////////////////////////////////////////


/**
 * 특정 함수에 원하는 객체를 바인딩시켜
 * 새로운 함수를 사용할 때 사용합니다.
 * @param thisArg
 * @returns {Function}
 */
Function.prototype.bind = function (thisArg) {
    var fn = this,
        slice = Array.prototype.slice,
        args = slice.call(arguments, 1);

    return function () {
        return fn.apply(thisArg, args.concat(slice.call(arguments)));
    }
}

var print_all = function (arg) {
    for (var i in this) console.log(i + " : " + this[i]);
    for (var i in arguments) console.log(i + " : " + arguments[i]);
}


var myobj = {name: "zzoon"};

var myfunc = print_all.bind(myobj);
myfunc();

var myfunc1 = print_all.bind(myobj, "iamhjoo", "others");
myfunc1("insidejs");


////////////////////////////////////////////////////////
// 래퍼
////////////////////////////////////////////////////////


/**
 * 래퍼란 쉽게 말하면 특정 함수를 자신의 함수로 덮어쓰는 것을 말한다.
 * 물론 여기서 사용자는 원래 함수 기능ㅇ르 잃어버리지 않은 상태로 자신의 로직을 수행할 수 있어야 한다.
 * 객체지향 프로그래밍에서 다형성의 특성을 살리려면 오버라이드를 지원하는데,
 * 이와 상당히 유사하다고 보면 된다.
 *
 * 래퍼는 기존에 제공되는 함수에서 사용자가 원하는 로직을 추가하고 싶다거나,
 * 기존에 있는 버그를 피해가고자 할 때 많이 사용된다.
 *
 * @param object
 * @param method
 * @param wrapper
 * @returns {Function}
 */
function wrap(object, method, wrapper) {
    var fn = object[method];
    return object[method] = function () {
        //return wrapper.apply(this, [fn].concat(
        return wrapper.apply(this, [fn.bind(this)].concat(
            Array.prototype.slice.call(arguments)));
    };
}

Function.prototype.original = function (value) {
    this.value = value;
    console.log("value: " + this.value);
}

var mywrap = wrap(Function.prototype, "original", function (orig_func, value) {
    this.value = 20;
    orig_func(value);
    console.log("wrapper value: " + this.value);
});

var obj = new mywrap("zzoon");


////////////////////////////////////////////////////////
// each
////////////////////////////////////////////////////////


/**
 * 배열의 각 요소 혹은 객체의 각 프로퍼티를 하나씩 꺼내서
 * 차례대로 특정 함수에 인자로 넣어 실행시키는 역확을 한다.
 * @param obj
 * @param fn
 * @param args
 * @returns {*}
 */
function each(obj, fn, args) {
    console.log("each(" + obj + ", " + fn + ", " + args + ")");

    if (obj.length == undefined)
        for (var prop in obj)
            fn.apply(obj[prop], args || [prop, obj[prop]]);
    else
        for (var i = 0; i < obj.length; i++)
            fn.apply(obj[i], args || [i, obj[i]]);

    return obj;
}

each([1, 2, 3], function (i, value) {
    console.log(i + ": " + value);
});


var zzoon = {
    nam: "zzoon",
    age: 30,
    sex: "Male"
};


each(zzoon, function (prop, value) {
    console.log(prop + ": " + value);
});


////////////////////////////////////////////////////////
// map
////////////////////////////////////////////////////////


/**
 * map 함수는 주로 배열에 많이 사용되는 함수이다.
 * 배열의 각 요소를 꺼내서 사용자 정의 함수를 적용시켜 새로운 값을 얻은 후, 새로운 배열에 넣는다.
 * @param callback
 * @returns {Array}
 */
Array.prototype.map = function (callback) {
    /* this가 null인지, 배열인지 체크 */
    /* callback이 함수인지 체크 */

    var obj = this;
    var value, mapped_value;
    var A = new Array(obj.length);

    for (var i = 0; i < obj.length; i++) {
        value = obj[i];
        mapped_value = callback.call(null, value);
        A[i] = mapped_value;
    }

    return A;
}


var arr = [1, 2, 3];

var new_arr = arr.map(function (value) {
    return value * value;
});

console.log(new_arr);


////////////////////////////////////////////////////////
// reduce
////////////////////////////////////////////////////////


/**
 *  배열의 각 요소를 하나씩 꺼내서 사용자의 함수를 적용시킨 뒤,
 *  그 값을 계속해서 누적시키는 함수이다.
 * @param callback
 * @param memo
 * @returns {number}
 */
Array.prototype.reduce = function (callback, memo) {
    // this가 null인지, 배열인지 체크
    // callback이 함수인지 체크

    var obj = this;
    var value, accumulated_value = 0;

    for (var i = 0; i < obj.length; i++) {
        value = obj[i];
        accumulated_value = callback.call(null, accumulated_value, value);
    }

    return accumulated_value;
};


var arr = [1, 2, 3];
var accumulated_val = arr.reduce(function (a, b) {
    return a + b * b;
});

console.log(accumulated_val);