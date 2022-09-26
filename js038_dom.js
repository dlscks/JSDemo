//js038_dom.js

let pNode = document.getElementById("wrap");
//1 P null
console.log(`${pNode.nodeType} ${pNode.nodeName} ${pNode.nodeValue}`);

let pAttr = pNode.attributes;
//NamedNodeMap {0: id, 1: class, id: id, class: class, length: 2}
console.log(pAttr);
//id="wrap"
console.log(pAttr[0]);
console.log(pAttr.id);
console.log(pAttr.length); //2
console.log(
  `${pAttr[0].nodeType}, ${pAttr[0].nodeName}, ${pAttr[0].nodeValue}`
);
//2, id, wrap

let pIdAttr = pNode.getAttribute("id");
//wrap
console.log(pIdAttr);

let textNode = pNode.firstChild;
//"content"
console.log(textNode);
console.log(`${textNode.nodeType},${textNode.nodeName},${textNode.nodeValue}`);
//3,#text,content

//////////////////////////////////////////////////
//innerText, innerHTML : 요소의 컨텐츠

let bodyNode = document.getElementsByTagName("body")[0];
//content (텍스트 로드만 가져옴)
console.log(bodyNode.innerText);
//HTML에 있는 바디속성을 다가져옴.
console.log(bodyNode.innerHTML);

/////////////////////////////////////////////
//value
let fname = document.querySelector("#fname");
//홍길동
console.log(fname.value);
