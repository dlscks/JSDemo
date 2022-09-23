//js029_array.js

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango' ]
let data = fruits.toString();
console.log(`${data}`); //Banana,Orange,Apple,Mango
console.log(`${typeof data}`); //string

console.log(typeof fruits.join()); //string
console.log(fruits.join()); //Banana,Orange,Apple,Mango
console.log(fruits.join("*")); //Banana*Orange*Apple*Mango
console.log(fruits.join("_")); //Banana_Orange_Apple_Mango

//배열의 끝에 요소 추가
fruits[4] = "kiwi";
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'kiwi' ]
//배열 끝에 하나 이상의 요소를 추가하고 배열의 새 길이를 반환한다.
console.log(fruits.push("melon")); //6
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'kiwi', 'melon' ]

//배열의 끝에 요소를 제거
console.log(fruits.pop()); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'kiwi', 'melon' ]
// melon
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'kiwi' ]

//배열의 앞에 요소를 추가
console.log(fruits.unshift("melon")); //6
console.log(fruits); //[ 'melon', 'Banana', 'Orange', 'Apple', 'Mango', 'kiwi' ]

//배열의 앞에 요소를 제거
console.log(fruits.shift()); //[ 'melon', 'Banana', 'Orange', 'Apple', 'Mango', 'kiwi' ]
//melon
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'kiwi' ]

//특정 위치의 요소 제거(자리는 확보하고 있음)
delete fruits[3];
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', <1 empty item>, 'kiwi' ]

fruits[3] = "mango";
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'mango', 'kiwi' ]

console.log(fruits.slice(1, 3)); //[ 'Orange', 'Apple' ]
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'mango', 'kiwi' ]

console.log(fruits.slice(-4, -2)); //[ 'Orange', 'Apple' ]
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'mango', 'kiwi' ]

console.log(fruits.slice(1)); //[ 'Orange', 'Apple', 'mango', 'kiwi' ]

//오름차순정렬
console.log(fruits.sort()); //[ 'Apple', 'Banana', 'Orange', 'kiwi', 'mango' ]
console.log(fruits); // 저장되어있음
//내림차순정렬

console.log(fruits.sort().reverse()); //[ 'mango', 'kiwi', 'Orange', 'Banana', 'Apple' ]

//javascript에서 sort()는 Tim sort 알고리즘을 사용한다.
//Tim Sort는 Insertion sort와 Merge Sort을 결합하여 만든 정렬이다.
//Tim Sort 알고리즘 :https://d2.naver.com/helloworld/0315536
let point = [40, 100, 1, 5, 10];
console.log(point.sort()); //[ 1, 10, 100, 40, 5 ]
console.log(
  point.sort(function (a, b) {
    console.log(`a:${a}, b:${b},a-b:${a - b}`);
    return a - b;
  })
); //[ 1, 5, 10, 40, 100 ]

console.log(
  point.sort(function (a, b) {
    // console.log(`a:${a}, b:${b},a-b:${a - b}`);
    return b - a;
  })
); //[ 100, 40, 10, 5, 1 ]

let xData = [1, 2, 3];
let yData = [4, 5, 6];
let zData = xData.concat(yData, [7, 8, 9]);
console.log(zData.length); //9
console.log(zData); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

let arr2 = [1, 3, [[[4, 5]]]];
console.log(arr2.flat()); //[ 1, 3, [ [ 4, 5 ] ] ]
console.log(arr2); //[ 1, 3, [ [ [Array] ] ] ]
console.log(arr2.flat(1)); //[ 1, 3, [ [ 4, 5 ] ] ]
console.log(arr2.flat(2)); //[ 1, 3, [ 4, 5 ] ]
console.log(arr2.flat(3)); //[ 1, 3, 4, 5 ]

let arr3 = [1, 3, [[[4, 5]]], [7, 8]];
console.log(arr3.flat()); //[ 1, 3, [ [ 4, 5 ] ] ]
console.log(arr3); //[ 1, 3, [ [ [Array] ] ] ]
console.log(arr3.flat(1)); //[ 1, 3, [ [ 4, 5 ] ] ]
console.log(arr3.flat(2)); //[ 1, 3, [ 4, 5 ] ]
console.log(arr3.flat(3)); //[ 1, 3, 4, 5 ]
