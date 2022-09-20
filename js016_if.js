//js016_if.js
/*
  제어문(statement) : 프로그램의 흐름을 제어할 수 있는 실행문이다.
  1. 조건문 : if~else
  2. 선택문 : switch~case
  3. 반복문 : for, while

  조건문 : 조건식의 값이 참인지 거짓인지에 따라 실행문의 제어가 결정된다.
  if문은 조건식이 만족(true)할 경우에만 실행문을 실행한다.
  if(조건식){
    실행문;
  }
  */

let data = 0;
if (data == 0) {
  console.log(`program end`);
}

//null, undefined, "", 0, false = > false
if (10) {
  console.log("10");
}

if (null) {
  console(`data`);
}

/*
if(조건식){
    실행문;
}else{
    실행문;
};
*/

let num = 8;
if (num % 2 == 0) {
  console.log(`${num}의 값은 짝수입니다.`);
} else {
  console.log(`${num}의 값은 홀수입니다.`);
}

if (num % 2 == 1) {
  console.log(`${num}의 값은 홀수입니다.`);
} else {
  console.log(`${num}의 값은 짝수입니다.`);
}

if (num % 2) {
  console.log(`${num}의 값은 홀수입니다.`);
} else {
  console.log(`${num}의 값은 짝수입니다.`);
}

/*
//여러 조건이 필요할때 사용되는 조건문이다.
if(조건식1){
    실행문1;
}else if(조건식2){
    실행문2;
}else if(조건식3){
    실행문3;
}else{
    실행문;
}
*/

//>= 이상, <= 이하, < 미만, > 초과
let jumsu = 55;
if (jumsu >= 90) {
  console.log("A");
} else if (jumsu >= 80) {
  // 80이상 90미만
  console.log("b");
} else if (jumsu >= 70) {
  // 70이상 80미만
  console.log("c");
} else if (jumsu >= 60) {
  // 60이상 70미만
  console.log("d");
} else {
  // 60미만
  console.log("f");
}

/*
check변수의 값이 'D' => D는 대문자입니다.
                'd' => d는 소문자입니다.
                그외 => ?는 기타 입니다.
*/

//'A' : 65, 'a' : 97 '0' : 48
let x = "A";
console.log(x >= "A" && x <= "Z");
let y = "a";
console.log(y >= "a" && y <= "z");

let check = 97;
if (check >= "A" && check <= "Z") {
  console.log(`${check}는 대문자입니다.`);
} else if (check >= "a" && check <= "z") {
  console.log(`${check}는 소문자입니다`);
} else {
  console.log(`${check}는 기타입니다`);
}
