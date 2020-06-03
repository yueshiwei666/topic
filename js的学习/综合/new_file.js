let arr = [
  { id: 1, name: "1111" },
  {
    id: 2,
    name: "2222",
  },
  { id: 3, name: "3333" },
  { id: 4, name: "4444" },
  { id: 5, name: "5555" },
];
var str = "1,2,3,4,5,6,7,8,9";
var num = str.split(",");
var id;
num.forEach(function (a, b) {
  if (5 == a) {
    id = 5;
  }
});
arr.map(function (a) {
  if (a.id == id) {
    console.log(a.name);
  }
});
