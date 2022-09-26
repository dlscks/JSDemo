let myNode = document.getElementById("p2");

//parentNode
let ptNode = myNode.parentNode;
// <div id="wrap"></div>
console.log(ptNode);

//parentNode:[object HTMLDivElement]
console.log(`parentNode:${ptNode}`);
ptNode.style.color = "blue";
//////////////////////////////////////////
//previousSibling
let prevNode = myNode.previousSibling;
//prevNode:[object Text]
console.log(`prevNode:${prevNode}`);

//prevNode:[object HTMLParagraphElement]
prevNode = prevNode.previousSibling;
console.log(`prevNode:${prevNode}`);

////////////////////////////////////////
//nextSibling
let nextNode = myNode.nextSibling;
//[object Text]
console.log(`nextNode:${nextNode}`);

nextNode = nextNode.nextSibling;
//nextNode:[object HTMLParagraphElement], content3
console.log(`nextNode:${nextNode}, ${nextNode.innerText}`);

//////////////////////////////////////////////
//previousElementSibling

let prevEleNode = myNode.previousElementSibling;
//prevEleNode:[object HTMLParagraphElement],content1
console.log(`prevEleNode:${prevEleNode},${prevEleNode.innerText}`);

////////////////////////////////////////////////
//nextElementSibling
let nextEleNode = myNode.nextElementSibling;
//nextEleNode:[object HTMLParagraphElement],content3
console.log(`nextEleNode:${nextEleNode},${nextEleNode.innerText}`);

///////////////////////////////////////
//childNodes
let divNode = document.getElementById("wrap");
//divNode:[object HTMLDivElement]
console.log(`divNode:${divNode}`);

let divChildesNode = divNode.childNodes;
//divChildesNode:[object NodeList]
console.log(`divChildesNode:${divChildesNode}`);
//NodeList(7) [text, p#p1, text, p#p2, text, p#p3, text]
console.log(divChildesNode);

///////////////////////////////////////////////////
//children
let divChildren = divNode.children;
//divChildren:[object HTMLCollection]
console.log(`divChildren:${divChildren}`);
//HTMLCollection(3) [p#p1, p#p2, p#p3, p1: p#p1, p2: p#p2, p3: p#p3]
console.log(divChildren);
console.log(divChildren[0]);
console.log(divChildren.item(0));
// 63,64 똑같은방법
console.log(divChildren.namedItem("p1"));

//////////////////////////////////////////////
//firstChild, firstElementChile
let pNode = document.getElementById("p4");
let aNode = pNode.firstChild;
//#text
console.log(aNode);

aNode = pNode.firstElementChild;
//<img src="images/gosu.jpg" alt="영화배우 고수" />
console.log(aNode);

let aATTrNode = aNode.getAttribute("src");
//images/gosu.jpg
console.log(aATTrNode);

aAttrNode = aNode.src;
console.log(aAttrNode);
