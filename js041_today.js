today = new Date();
function top() {
  document.getElementById("va").innerHTML =
    today.getFullYear() +
    eval(today.getMonth() + 1) +
    today.getDate() +
    today.getHours() +
    today.getMinutes() +
    today.getSeconds();
}
