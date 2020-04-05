# Node.js入门

### express框架的使用

//express中的模板阴影的使用方法

#### express中的第三方的工具express-art-template

```javascript
exprss中有一个第三方的工具是express-art-template
这个是配合express框架和art-template结合使用的
express-art-template就是一个搭建他们的桥梁

//配置一下模板形影的后缀
app.engine("html", require("express-art-template"));
app.get('/',function(req,res){
    res.rend('',{模班的数据});
})
//在express中为response配置了一个rend()方法
//默认是不能用的但是配置了express-art-template(一个桥梁)
当rend('默认是去views目录中找文件')
app.set("views", "./view");//这个是修改默认的views目录改成别的
```

### express获取post请求的数据

在express中不能直接通过  request.url(这个是get请求的方法)

post需要用一个第三方的工具来使用

```javascript
//首先安装body-parser这个插件
var bodyParser = require("body-parser");
然后放在app.use(router);的上面
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());   
```



### 非成员`__dirname` `filename`

说一下 `__dirname`这个是显示当前文件的一个绝对的路径

```javascript
fs.readFile('./a.txt',function(){})
//这个 ./是在node执行的命令所在的目录寻找的，用相对路径会错误
//解决方法下面
fs.readFile(__dirname+'./a.txt')
//这样获取当前文件的绝对路径就没问题了

filename是获取当前文件所处的目录+文件的名字
```

### path路径

```javascript
path是一个node核心模块之一

//拼接路径
path.join('www.baidu'+'?name:123') //www.baidu?name:123
```

# MongoDB数据库的使用

### 1.下载数据库

去官方文档下载数据库，即可。注意在安装到电脑上后，找到自己安装数据库的一个目录，在目录中找打bin目录

文件夹打开，把当前的地址复制一下，在去打开电脑的环境变量，去找到path的环境变量，双击打开路径，把路径粘贴到系统的路径中。最后打开电脑的终端，输入mongod --version  出现版本号就是成功了。

### 2.启动数据库和关闭数据库

**执行命令：**

`mongod` 在此命令的所在的跟目录的地址新建一个目录结构  /data/db   用来存储数据的目录

在终端中执行这个命令 mongod  命令就行  

**修改默认的路径**

mongod --dbpath=数据存储的一个目录，你每次使用的时候都需要执行此命令

**停止服务器的运行**

关闭cmd或者  `ctrl+c`

### 3.连接数据库

**连接**

```javascript
连接数据库之前，必须先打开数据库使用（mongod），然后在打开一个cmd终端
在cmd中执行命令 mongo
这个命令默认的连接本机mongoDB数据库
```

**退出**

```
在连接的状态中使用exit命令来退出即可
```

### 4.基本的命令

* `show dbs`
  * 查看显示所有的数据库
* `db`
  * 查看当前操作的数据库
* `use 数据库名称`
  * 切换到指定的数据库，如果没有回新建这个数据库
* `db.students.insertOne(数据)`
  * 插入数据db.students.insertOne({“name”:“111”})
* `show collections`
  * 显示当前的所有的集合（表结构）



毕竟这个数据库是用来引用的所以需要使用node来操作这个数据库

### 5.第三方的包操作mongoose来操作MongoDB数据库

* 官方的操作的方法  github中搜索数据库的名称看源码

这里使用第三方的插件来来操作数据库**mongoose**

官方的地址：   [官方地址](www.mongoosejs.com)

官方指南：[指南](http://mongoosejs.com/docs/guide.html)

[官方api文档](http://mongoosejs.com/docs/api.html)

##### 1.安装他的包  `npm i --save mongoose`

##### 2.在js文件中写代码最后用node来运行代码，去操作数据库

##### 3.使用过程

* 第一步导入包mongoose
  * `const mongoose = require("mongoose");`
* 第二部连接数据

```javascript
第一步导入包mongoose
const mongoose = require("mongoose");
第二部连接数据库
mongoose.connect("mongodb://localhost:test", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

第三部拿到数据库中的schema（架构）意思就是获得了创建表的限权
var Schema = mongoose.Schema;

第四部设置集合（表结构）的结构
var userSchema = new Schema({
  username: {
    type: String,
    required: true //不能是非空的
  }
});

第五步将文档的结构发布为模型
这个User就相当于一张表，里面数据结构都有
var User = mongoose.model("User", userSchema);

第六步在表中写入数据
这个就是拿到表，对表里面放数据，他的返回值是一个模型的构造函数
var admin = new User({
  username: "zs",
  password: "123345",
  email: "123123"
});

第七部保存数据
admin.save(function(err, data) {
  if (err) {
    console.log("failure");
  } else {
    console.log("数据保存成功");
  }
});


```

#### 保存数据

```javascript
admin.save(function(err, data) {
  if (err) {
    console.log("failure");
  } else {
    console.log("数据保存成功");
  }
});
```





#### 查询数据库数据的操作

```javascript
//查询数据，返回一个数组
User.find(function(err,data){
    if (err) {
      console.log("failure");
    } else {
      console.log(data);
    }
})   
User.find({
    //查询指定的内容
},function(err,data){
    if (err) {
      console.log("failure");
    } else {
      console.log(data);
    }
}) 
User.findOne(和上面的一样)   //查询数据返回一个对象
```

#### 删除数据库中的数据

```javascript
User.remove(
  {
    username: "zs"  //删除用户名字是张三的数据
  },
  function(err, data) {
    if (err) {
      console.log("failure");
    } else {
      console.log("删除成功");
    }
  }
);
```



#### 更新数据库中的信息

```javascript
User.findByIdAndUpdate(
  "5e746e16efd6274fc8702c25",
  {
    password: "123"
  },
  function(err, data) {
    console.log(data);
  }
);
```











### 3.了解MongoDB数据库官方文档的配置信息（后使用第三方的工具，了解即可）

 