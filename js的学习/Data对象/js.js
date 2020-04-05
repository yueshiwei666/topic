var button = document.querySelector("button");
button.onclick = function () {
  var div = document.querySelector(".div");
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
};
