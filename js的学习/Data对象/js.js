var button = document.querySelector("button");
button.onclick = function () {
  /* 设置一个时间 */ var d3 = new Date(2000, 5, 24, 11, 33, 0);
  console.log(d3);
  inner();
};
/* 获取input中的text的文字 */
/* var text = document.getElementById("text"); */
var text = document.getElementsByClassName("text");
var button1 = document.querySelectorAll(".save");
/* 点击保存cookie值 */
button1[0].onclick = function () {
  console.log(text[0].value);
  document.cookie = `input=${text[0].value}`;
};
/* 点击后再3秒之后将删除cookie的值,*/
var button2 = document.querySelectorAll(".delete");

button2[0].onclick = function () {
  /* document.cookie = "input=; expires=Thu, 01 Jan 1970 00:00:00 GMT"; */
  var date = new Date();
  date.setTime(date.getMinutes() + 0.1 * 60 * 1000);
  /* date.setTime(date.getSeconds() - 3000); */

  document.cookie = `input=12;expires=${date.toGMTString() + 3000}`;
};

function inner() {
  var div = document.createElement("div");
  document.body.appendChild(div);
  var data = new Date();
  div.innerHTML =
    data.getFullYear() +
    "年" +
    data.getMonth() +
    "月" +
    data.getDate() +
    "日" +
    data.getHours() +
    "时" +
    data.getMinutes() +
    "分" +
    data.getSeconds() +
    "秒" +
    data.getMilliseconds() +
    "毫秒";
}
