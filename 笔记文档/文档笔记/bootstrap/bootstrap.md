# Bootstrap

**源码：**

```javascript
min-width: 350px  表示宽度不小于350px
max-width: 350px  表示宽度不大于350px
@media screen and (max-width: 350px) {
        .div {
            width: 100px;
            border: 1px solid red;
            float: left;
        }
}
```



### 栅格系统的设置参数

**基本格式**

```javascript
<div class="container">
        <ul class="row">//这个是创建一个列一共是12列
            <div class='col-xs-6'>111</div>
			<div class='col-xs-6'>222</div>
        </ul>
</div>
```

一行的一共分12列

用class类中col-xs-(这个数字是所占的份数)

当一行的份数大于12会换行显示

小于12的份数正常显示

class类的row表示一行

**col-xs就是超小屏幕(手机)**

**col-sm小屏幕(平板)**

**col-md中等屏幕(电脑)**

**col-lg宽度设备(大电脑)**

| 宽度                   | 超小屏幕(手机)<768px | 小屏幕(平板)>=768px | 中等屏幕(电脑)>=992px | 宽度设备(大电脑)>=1200px | 特大>=1200px  |
| ---------------------- | -------------------- | ------------------- | --------------------- | ------------------------ | ------------- |
| 把.container宽度设置成 | 100%                 | 540px               | 720px                 | 960px                    | 1200px        |
| 子元素12份class属性    | col-(份数)           | col-sm-(份数)       | col-md-(份数)         | col-lg-(份数)            | col-xl-(份数) |
| 列数                   | 12                   | 12                  | 12                    | 12                       | 12            |
| 当宽度屏幕             | <=575px              | >=                  | >=                    | >=                       | >=            |

#### **bootstrap创建的默认会生成一个padding左右是15px的属性

想要去除这个padding可以直接设置也可以在元素的内部在创建一个元素写上一个class=‘row’ 就ok

**可以同时对一个元素设置多个类**

```javascript
<div class='col-xs col-xs'></div>
```

```javascript

@media screen and (min-width:1200px){/*我的电脑 大型设备（大台式电脑，1200px 起）*/
.content{width:1200px;}
}
@media screen and (max-width:992px){/* 中型设备（台式电脑，992px 起） */
    .content{width:720px;}
}
@media screen and (max-width:768px) { /* 小型设备（平板电脑，768px 起） */
    .content{width:540px;}
} 
@media screen and (max-width:576px){/* 超小设备（手机，小于 768px） */
    .content{width:100%;}
}


@media screen and (max-width:480px){
    .content{width:100%;}
}
在设置时，需要注意先后顺序，不然后面的会覆盖前面的样式。
min中从小到大的，下面会覆盖上面的
```

