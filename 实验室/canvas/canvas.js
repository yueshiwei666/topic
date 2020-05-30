/* 绘制一个矩形 */
var obj = document.getElementsByClassName("canvas")[0];
var canvas = obj.getContext("2d");
canvas.fillStyle = "red"; /* 填充的样式 */
canvas.fillRect(0, 0, 150, 75);

/* -------------------- */
/* 画一个矩形更改颜色 */
var obj1 = document.getElementsByClassName("canvas")[1];
var canvas = obj1.getContext("2d");
canvas.fillStyle = "#000000"; /* 填充的样式 */
canvas.fillRect(0, 50, 150, 75);

/* 绘画一条直线 */
var obj2 = document.getElementsByClassName("canvas")[2];
var canvas = obj2.getContext("2d");
canvas.moveTo(50, 50);
canvas.lineTo(200, 100);
/* canvas.moveTo(600, 100);
canvas.lineTo(620, 300); */
canvas.stroke();

/* 绘画一个圆 */
var obj2 = document.getElementsByClassName("canvas")[3];
var canvas = obj2.getContext("2d");
canvas.beginPath();
canvas.arc(95, 50, 40, 0, 2 * Math.PI);
canvas.stroke();

/* 绘制一个文本 */
var obj2 = document.getElementsByClassName("canvas")[4];
var canvas = obj2.getContext("2d");
canvas.font = "30px Arial";
canvas.fillText("Hello World", 10, 50);

/* 绘制一个双线的文本 */
var obj2 = document.getElementsByClassName("canvas")[5];
var canvas = obj2.getContext("2d");
canvas.font = "30px Arial";
canvas.strokeText("Hello World", 10, 50);
