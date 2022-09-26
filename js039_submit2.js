//<input type="button" value="login" id="btn" />이 경우일때

// let btn = document.querySelector("#btn");
// btn.onclick = () => {
//   let idNode = document.querySelector("#my_id");
//   let passNode = document.querySelector("#my_pass");

//   if (idNode.value == "") {
//     alert("아이디를 입력하세요");
//     return false;
//   }
//   if (passNode.value == "") {
//     alert("비밀번호를 입력하세요.");
//     return false;
//   }
// };

//위에 식은 submit 이벤트는 적용안됨

let btn = document.querySelector("#btn");
btn.onclick = () => {
  let idNode = document.querySelector("#my_id");
  let passNode = document.querySelector("#my_pass");

  if (idNode.value == "") {
    alert("아이디를 입력하세요");
    return false;
  }
  if (passNode.value == "") {
    alert("비밀번호를 입력하세요.");
    return false;
  }
  //   document.log_f.action = "js039_submit.html";
  // 다른페이지로 이동 시킬 수 있다.
  //강제적으로 submit() 이벤트를 발생시킨다.
  document.log_f.submit();
};
