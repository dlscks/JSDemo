//js025_Number.js

let data = 10;
let fData = Number(data);
let nObj = new Number(data);
console.log(`data=${typeof data}`); //number
console.log(`fData=${typeof fData}`); //number
console.log(`nObj=${typeof nObj}`); //object

//toString() : number,Numver -> string
console.log(typeof nObj.toString); //function
console.log(typeof nObj.toString()); //string
console.log(typeof data.toString()); //string

console.log(data + fData); // number + number = 20
console.log(data + nObj); // number + object = 20

//Number -> number
console.log(typeof nObj.valueOf()); //number

console.log(typeof new String("javascript")); //object
console.log(typeof new String("javascript").valueOf()); //string

console.log(parseInt("10")); //10

//27~65 비교
let val1 = "10";
console.log(val1 + val1); //1010

//Number ( ), parseInt( )
console.log(Number(val1) + Number(val1)); //20
console.log(parseInt(val1) + parseInt(val1)); //20
console.log(parseFloat(val1) + parseFloat(val1)); //20

let val2 = "10.3";
console.log(val2 + val2); //10.310.3

//Number ( ), parseInt( )
console.log(Number(val2) + Number(val2)); //20.6
console.log(parseInt(val2) + parseInt(val2)); //20
console.log(parseFloat(val2) + parseFloat(val2)); //20.6

let val3 = "A";
console.log(val3 + val3); //AA

//Number ( ), parseInt( )
console.log(Number(val3) + Number(val3)); //NaN
console.log(parseInt(val3) + parseInt(val3)); //NaN
console.log(parseFloat(val3) + parseFloat(val3)); //NaN

let val4 = "10A";
console.log(val4 + val4); //10A10A

//Number ( ), parseInt( )
console.log(Number(val4) + Number(val4)); //NaN
console.log(parseInt(val4) + parseInt(val4)); //20
console.log(parseFloat(val4) + parseFloat(val4)); //20

let val5 = "A10";
console.log(val5 + val5); //A10A10

//Number ( ), parseInt( )
console.log(Number(val5) + Number(val5)); //NaN
console.log(parseInt(val5) + parseInt(val5)); //NaN
console.log(parseFloat(val5) + parseFloat(val5)); //NaN

console.log(Number.POSITIVE_INFINITY); //Infinity
console.log(Number.NaN); //NaN
