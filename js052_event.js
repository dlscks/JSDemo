let btn = document.querySelector("button");

console.log("start");
btn.addEventListener(
  "click",
  function () {
    console.log("addEventListenr");
  },
  false
);

console.log("end");
