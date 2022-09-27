let totalCar = document.getElementById("total");

let chbCnt = document.querySelectorAll('tbody input[type="checkbox"]');
console.log(chbCnt); //NodeList

//NodeList을 Array로 변환
let myChb = [...chbCnt];

//checkbox에 onclick이벤트가 발생되었을 때 수행될 carCount() 등록
myChb.map((element) => {
  //window
  //   console.log(this);
  element.onclick = carCount;
});

function carCount() {
  //this는 현재 이벤트가 발생된 checkbox객체를 나타냄
  //   console.log(this);
  console.log(this.id);

  //default는 <input>에 초기에 입력된 value의 값을 기억해 가져온다.
  let basicCar = Number(totalCar.defaultValue);

  myChb.map((element) => {
    if (element.checked) basicCar += Number(element.value);
  });
  totalCar.value = basicCar;
}
