var express = require("express");
var app = express();
var path = require("path");
var cors = require("cors");
//这个就是解决跨域问题的头疼死我的解决方案
app.use(cors());

app.use("/public/", express.static(path.join(__dirname, "./public")));
app.use(
  "/node_modules",
  express.static(path.join(__dirname, "./node_modules"))
);
app.use(cors());
app.get("/goods1", function (req, res) {
  if (req.query.page == 1) {
    res.json({
      code: 200,
      data: [
        {
          img: "http://47.97.208.201:3000/public/01.jpg",
          description: "这个商品很贵的",
          price: 78,
          id: 1,
        },
        {
          img: "http://47.97.208.201:3000/public/02.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 2,
        },
        {
          img: "http://47.97.208.201:3000/public/03.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 3,
        },
        {
          img: "http://47.97.208.201:3000/public/04.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 4,
        },
        {
          img: "http://47.97.208.201:3000/public/05.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 5,
        },
        {
          img: "http://47.97.208.201:3000/public/06.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 6,
        },
        {
          img: "http://47.97.208.201:3000/public/07.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 7,
        },
        {
          img: "http://47.97.208.201:3000/public/08.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 8,
        },
        {
          img: "http://47.97.208.201:3000/public/09.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 9,
        },
        {
          img: "http://47.97.208.201:3000/public/010.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 10,
        },
      ],
    });
  } else if (req.query.page == 2) {
    res.json({
      code: 200,
      data: [
        {
          img: "http://47.97.208.201:3000/public/011.jpg",
          description: "这个商品很贵的",
          price: 78,
          id: 11,
        },
        {
          img: "http://47.97.208.201:3000/public/012.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 12,
        },
        {
          img: "http://47.97.208.201:3000/public/013.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 13,
        },
        {
          img: "http://47.97.208.201:3000/public/014.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 14,
        },
        {
          img: "http://47.97.208.201:3000/public/015.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 15,
        },
        {
          img: "http://47.97.208.201:3000/public/016.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 16,
        },
        {
          img: "http://47.97.208.201:3000/public/017.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 17,
        },
        {
          img: "http://47.97.208.201:3000/public/018.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 18,
        },
        {
          img: "http://47.97.208.201:3000/public/019.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 19,
        },
        {
          img: "http://47.97.208.201:3000/public/020.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 20,
        },
      ],
    });
  } else if (req.query.page == 3) {
    res.json({
      code: 200,
      data: [
        {
          img: "http://47.97.208.201:3000/public/021.jpg",
          description: "这个商品很贵的",
          price: 78,
          id: 21,
        },
        {
          img: "http://47.97.208.201:3000/public/022.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 22,
        },
        {
          img: "http://47.97.208.201:3000/public/023.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 23,
        },
        {
          img: "http://47.97.208.201:3000/public/024.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 24,
        },
        {
          img: "http://47.97.208.201:3000/public/025.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 25,
        },
        {
          img: "http://47.97.208.201:3000/public/026.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 26,
        },
        {
          img: "http://47.97.208.201:3000/public/027.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 27,
        },
        {
          img: "http://47.97.208.201:3000/public/028.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 28,
        },
        {
          img: "http://47.97.208.201:3000/public/029.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 29,
        },
        {
          img: "http://47.97.208.201:3000/public/00.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 30,
        },
      ],
    });
  } else {
    res.send("404");
  }
});
app.get("/goods2", function (req, res) {
  if (req.query.page == 1) {
    res.json({
      code: 200,
      data: [
        {
          img: "http://47.97.208.201:3000/public/011.jpg",
          description: "这个商品很贵的",
          price: 78,
          id: 11,
        },
        {
          img: "http://47.97.208.201:3000/public/012.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 12,
        },
        {
          img: "http://47.97.208.201:3000/public/013.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 13,
        },
        {
          img: "http://47.97.208.201:3000/public/014.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 14,
        },
        {
          img: "http://47.97.208.201:3000/public/015.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 15,
        },
        {
          img: "http://47.97.208.201:3000/public/016.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 16,
        },
        {
          img: "http://47.97.208.201:3000/public/017.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 17,
        },
        {
          img: "http://47.97.208.201:3000/public/018.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 18,
        },
        {
          img: "http://47.97.208.201:3000/public/019.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 19,
        },
        {
          img: "http://47.97.208.201:3000/public/020.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 20,
        },
      ],
    });
  } else if (req.query.page == 2) {
    res.json({
      code: 200,
      data: [
        {
          img: "http://47.97.208.201:3000/public/01.jpg",
          description: "这个商品很贵的",
          price: 78,
          id: 1,
        },
        {
          img: "http://47.97.208.201:3000/public/02.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 2,
        },
        {
          img: "http://47.97.208.201:3000/public/03.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 3,
        },
        {
          img: "http://47.97.208.201:3000/public/04.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 4,
        },
        {
          img: "http://47.97.208.201:3000/public/05.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 5,
        },
        {
          img: "http://47.97.208.201:3000/public/06.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 6,
        },
        {
          img: "http://47.97.208.201:3000/public/07.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 7,
        },
        {
          img: "http://47.97.208.201:3000/public/08.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 8,
        },
        {
          img: "http://47.97.208.201:3000/public/09.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 9,
        },
        {
          img: "http://47.97.208.201:3000/public/010.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 10,
        },
      ],
    });
  } else if (req.query.page == 3) {
    res.json({
      code: 200,
      data: [
        {
          img: "http://47.97.208.201:3000/public/021.jpg",
          description: "这个商品很贵的",
          price: 78,
          id: 21,
        },
        {
          img: "http://47.97.208.201:3000/public/022.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 22,
        },
        {
          img: "http://47.97.208.201:3000/public/023.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 23,
        },
        {
          img: "http://47.97.208.201:3000/public/024.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 24,
        },
        {
          img: "http://47.97.208.201:3000/public/025.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 25,
        },
        {
          img: "http://47.97.208.201:3000/public/026.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 26,
        },
        {
          img: "http://47.97.208.201:3000/public/027.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 27,
        },
        {
          img: "http://47.97.208.201:3000/public/028.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 28,
        },
        {
          img: "http://47.97.208.201:3000/public/029.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 29,
        },
        {
          img: "http://47.97.208.201:3000/public/00.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 30,
        },
      ],
    });
  } else {
    res.send("404");
  }
});
app.get("/goods3", function (req, res) {
  if (req.query.page == 1) {
    res.json({
      code: 200,
      data: [
        {
          img: "http://47.97.208.201:3000/public/021.jpg",
          description: "这个商品很贵的",
          price: 78,
          id: 21,
        },
        {
          img: "http://47.97.208.201:3000/public/022.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 22,
        },
        {
          img: "http://47.97.208.201:3000/public/023.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 23,
        },
        {
          img: "http://47.97.208.201:3000/public/024.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 24,
        },
        {
          img: "http://47.97.208.201:3000/public/025.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 25,
        },
        {
          img: "http://47.97.208.201:3000/public/026.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 26,
        },
        {
          img: "http://47.97.208.201:3000/public/027.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 27,
        },
        {
          img: "http://47.97.208.201:3000/public/028.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 28,
        },
        {
          img: "http://47.97.208.201:3000/public/029.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 29,
        },
        {
          img: "http://47.97.208.201:3000/public/00.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 30,
        },
      ],
    });
  } else if (req.query.page == 2) {
    res.json({
      code: 200,
      data: [
        {
          img: "http://47.97.208.201:3000/public/011.jpg",
          description: "这个商品很贵的",
          price: 78,
          id: 11,
        },
        {
          img: "http://47.97.208.201:3000/public/012.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 12,
        },
        {
          img: "http://47.97.208.201:3000/public/013.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 13,
        },
        {
          img: "http://47.97.208.201:3000/public/014.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 14,
        },
        {
          img: "http://47.97.208.201:3000/public/015.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 15,
        },
        {
          img: "http://47.97.208.201:3000/public/016.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 16,
        },
        {
          img: "http://47.97.208.201:3000/public/017.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 17,
        },
        {
          img: "http://47.97.208.201:3000/public/018.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 18,
        },
        {
          img: "http://47.97.208.201:3000/public/019.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 19,
        },
        {
          img: "http://47.97.208.201:3000/public/020.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 20,
        },
      ],
    });
  } else if (req.query.page == 3) {
    res.json({
      code: 200,
      data: [
        {
          img: "http://47.97.208.201:3000/public/01.jpg",
          description: "这个商品很贵的",
          price: 78,
          id: 1,
        },
        {
          img: "http://47.97.208.201:3000/public/02.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 2,
        },
        {
          img: "http://47.97.208.201:3000/public/03.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 3,
        },
        {
          img: "http://47.97.208.201:3000/public/04.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 4,
        },
        {
          img: "http://47.97.208.201:3000/public/05.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 5,
        },
        {
          img: "http://47.97.208.201:3000/public/06.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 6,
        },
        {
          img: "http://47.97.208.201:3000/public/07.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 7,
        },
        {
          img: "http://47.97.208.201:3000/public/08.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 8,
        },
        {
          img: "http://47.97.208.201:3000/public/09.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 9,
        },
        {
          img: "http://47.97.208.201:3000/public/010.jpg",
          description: "这个商品很贵的",
          price: 57,
          id: 10,
        },
      ],
    });
  } else {
    res.send("404");
  }
});
app.get("/swiper", function (req, res) {
  res.json({
    code: 200,
    img: [
      "http://47.97.208.201:3000/public/01.jpg",
      "http://47.97.208.201:3000/public/02.jpg",
      "http://47.97.208.201:3000/public/03.jpg",
    ],
  });
});

app.listen(3000, function () {
  console.log("成功");
});
