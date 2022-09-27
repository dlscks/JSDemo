//https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model/Examples#example_5_event_propagation

document.querySelector(".red").onclick = (e) => {
  alert("red");
};

document.querySelector(".green").onclick = (e) => {
  alert("green");
};

document.querySelector(".blue").onclick = (e) => {
  alert("blue");
  console.log(e);
  //차단방법
  e.stopPropagation();
};

document.querySelector("a").onclick = (e) => {
  alert("안녕하세요");
  //   e.preventDefault();
  return false;
};
/*
[1] Event Propagation(이벤트 전파)
① 캡쳐링(capturing phase) : 부모요소에서Target요소로 이벤트 전파
② 버블링(bubbling phase) : Target요소에서 부모요소로 이벤트 전파

[2] 이벤트 차단
stopPropagation()

[3]stopPropagation()와 preventDefault()비교 
  stopPropagation() : 이벤트 전파 차단 return false(jQuery)
  preventDefault() : 디폴트 이벤트 차단 return false (javascript, jQuery)
*/
