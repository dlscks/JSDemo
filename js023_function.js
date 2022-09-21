//js023_function.js
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Function

//함수(function): 특정기능을 하는 구문을 독립된 부품으로 만들어 재사용하고자 할 때 사용하는 문법이다.

/*
함수 정의
(1) 함수 선언문
function 함수명(매개변수){
    실행문;
    return 값;
}

(2) 함수 표현식
let test = function(매개변수){
    실행문
    return 값;
}

(3) 즉시실행(익명함수)
  (function(param){
    console.log(`${param} run~~~`);
  })('test);

*/

let year = 2012;
let leapYearCheck = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
let yearData = leapYearCheck ? "윤년" : "평년";
if (leapYearCheck) {
  console.log(`${year}년도는 ${yearData}입니다.`);
}

//함수정의
//year:oaraneter(매개변수)
function isLeapYear(year) {
  let check;
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    check = true;
  } else {
    check = false;
  }
  return check;
}

//함수호출
year = 2013;
let result = isLeapYear(year); //year: arguement(인수)
console.log(result);
if (result) {
  console.log(`${year}은 윤년입니다`);
} else {
  console.log(`${year}은 평년입니다.`);
}

//함수 정의
function add(a, b) {
  console.log(`a=${a}, b=${b}`);
  return a + b;
}

function add2(a, b, c) {
  return a + b + c;
}

//함수 호출
console.log(add(2, 3)); // 5
console.log(add2(2, 3, 4)); //9
console.log(add()); //NaN
console.log(add(1)); //NaN
console.log(add(1, "script")); //1script
console.log(add(1, null)); //a=1, b=null
console.log(add(1, 2, 3, 4, 5)); //3
// console.log(add3()); //add3 is not defined
// add(5,7);

function hello(name) {
  console.log(`${name}님 환영합니다.`);
}
hello("홍길동");
console.log(hello("고수")); //고수님 환영합니다.undefined

///////////////////////////////////////////////////
//함수 표현식

//ES5 - 익명함수
let sum = function (a, b) {
  return a + b;
};

console.log(sum); //[Function: sum]
console.log(sum(10, 20));

let hap = function (a, b) {
  console.log(a + b);
};
console.log(hap); //[Function: hap]
console.log(hap(10, 30)); //undefined
hap(10, 30); //40

//ES6 - 화살표 함수
let sub = (a, b) => {
  return a + b;
};

console.log(sub); //[Function: sub]
console.log(sub(3, 5)); //8

let call = (a, b) => {
  console.log(a + b);
};

console.log(call); //[Function: call]
console.log(call(3, 4)); //undefined
call(3, 4); //7

//let call2 = (a) => {
//return a;
//};

//parameter가 한개이면 소괄호( )생략이 가능하다
//return하는 문장만 실행문에 있으면 중괄호 {}와 함께return은 반드시 생략해야 한다.

let call2 = (a) => a;

console.log(call2); //[Function: call2]
console.log(call2(3)); //3

let call3 = () => console.log("로그인 해주세요.");

console.log(call3); //[Function: call3]
console.log(call3()); //undefined
call3(); //로그인 해주세요.

//////////////////////////////////////////////////////
//다양한 함수 구조

//중첩함수
function outer(a, b) {
  let result = inner(a, b);
  function inner(a, b) {
    return a + b;
  }
  return result;
}

console.log(outer(10, 3));

//콜백함수
//1. 다른 함수의 인수로 사용되는 함수
//2. 어떤 이벤트에 의해 호출되는 함수 :btn.onclick= function(){}
function callback(a, b) {
  return a + b;
}

function getNumber(callFunc) {
  console.log(`==: ${callFunc}`);
  let result = callFunc(1, 6);
  return result;
}

console.log(getNumber(callback));
console.log(`====================================`);
//클로저(closure)
/*
1)중첩함수는 outer(외부)함수가 끝나면 외부에서 outer(외부)함수의 자원을 사용할 수 없다
 2)클로저는 outer(외부) 함수보다 중첩 함수가 더 오래 유지 되는 경우 중첩 함수는 이미 생명주기가 종료한
   외부함수의 변수를 참조할 수 있다. 이러한 중첩함수가 클로저(closure)이다.
 3)클로저는 변수가 의도치 않게 변경되지 않도록 안전하게 은닉(information hiding)하고 특정 함수에게만
   상태 변경을 허용하여 상태를 안전하게 변경하고 유지하기 위해 사용된다.
   */

function outerFun() {
  let sum = 50;

  function innerFun() {
    return sum;
  }
  return innerFun;
}

console.log(outerFun()); //[Function: innerFun]

let outercall = outerFun();
console.log(outercall); //[Function: innerFun]
console.log(outercall()); //50

function testA() {
  console.log("testA before");
  testB();
  console.log("testA after");
}

function testB() {
  console.log("testB before");
  testC();
  console.log("testB after");
}

function testC() {
  console.log("testC");
}

testA();
console.log(`====================================`);

//함수 파라미터
function display(a, b) {
  console.log(`a=${a} b=${b}`);
}

display(1, 2); //a=1 b=2
display(1); //a=1 b=undefined
display(1, 2, 3, 4, 5); //a=1 b=2

//(1) 기본 파라미터(default parameter) : ES6-2015
function display2(a = 0, b = 0) {
  console.log(`a=${a} b=${b}`);
}
display2(1, 2); //a=1 b=2
display2(1); //a=1 b=0
display2(1, 2, 3, 4, 5); //a=1 b=2

//(2) 나머지 파라미터(Rest parameter) :ES6-2015
// - 파라미터 갯수를 가변으로 사용할 수 있도록 제공해주는 연산자이다.
// - spread operator(점 3개를(...))를 맨 마지막 파라미터로 사용해주면 된다.

//spread operator를 단독으로 사용
function display3(...args) {
  console.log(args);
  console.log(typeof args, args instanceof Array);
}

display3(1, 2);
display3(1);
display3(1, 2, 3, 4, 5);

//spread operator를 고정 파라미터와 같이 사용을 할때는 맨 마지막에 사용
function display4(num, ...args) {
  console.log(num);
  console.log(args);
}

display4(1, 2); //1 [ 2 ]
display4(1); // 1 [ ]
display4(1, 2, 3, 4, 5); // 1 [2, 3, 4, 5]

//arguments 객체
// - 함수 안에서만 기본으로 사용할 수 있는 자바스크립트 객체이다.
// - 함수 런타임 시점에 자동으로 생성되는 객체이며, 함수 코드 및 파라미터는 무관하게 자동 생성된다.
// - 함수 호출할때 함수로 전달된 실제 인자들의 정보를 담고 있는 객체이다.
// - 함수 선언에서 파라미터로 정의한 변수 갯수보다 실제 함수 호출할때 전달하는 인수의 갯수가 다를 수 있는
//   자바스크립트의 특성을고려해 만들어진 객체이다

function display5() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    console.log(typeof arguments, arguments instanceof Array, arguments.callee);
    console.log(arguments[i]);
  }
}

display5(1, 2); //
// display5(3);
// display5(4, 5, 6, 7, 8);
