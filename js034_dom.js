// window.onload = function () {
//   let hnode = document.getElementById("selector");
//   // console.log(hnode);
// };

let hNode = document.getElementById("selector");
console.log(hNode, typeof hNode);

let hId = document.querySelector("#selecotor");
console.log(hId, typeof hId);

let hClass = document.querySelector(".choice");
console.log(hClass, typeof hClass);

//HTMLCollection(4)
let pNode = document.getElementsByTagName("p");
console.log(pNode, typeof pNode);
console.log(pNode.length);
console.log(pNode[0]);
console.log(pNode.item(0)); // 19,20 똑같은 방법
console.log(pNode[0].innerText); //content1
pNode[0].style.backgroundColor = "red";

function process() {
  alert("dd");
  let fname = document.frm.fname;
  console.log(fname);
  console.log(fname.value);
  console.log(fname.defaultValue);
  return false;
}
