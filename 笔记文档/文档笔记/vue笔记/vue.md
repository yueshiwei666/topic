## vue的生命周期函数

```javascript

```

![lifecycle](F:\vuex\文档笔记\vue笔记\lifecycle.png)

## vuex的核心函数

**如果响应式的原理出错了请观看老师中的vuex响应式原理的课程**

![批注 2020-04-04 223436](F:\vuex\文档笔记\vue笔记\批注 2020-04-04 223436.png)

首先安装vuex   npm i --save vuex

然后再src目录中创建一个文件store然后这个中创建index.js文件(默认)

```javascript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
```

在App.vue中配置规则如下

```javascript
import store from './store'
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
```

vuex完成了，下面就是改使用了

### 使用方法的介绍和访问方式的介绍

##### 首先在外部使用this.$store就是访问到了仓库了

 new Vuex.Store({中有五个对象})

### vuex的响应式原理

```javascript
vuex中的state数据是单一数据
new Vuex.Store({	
	state:{
        arr:[1,2,3]   
    }
})
说白的就是你在state中添加数据和删除数据不是响应式的
所以就要想办法变成一个响应式的
				//添加数据的办法
//在state中有一个tp就是监听数据变化的东西['watch1','watch2']
//这个会监听已有的数据，当数据发生变化的时候视图层就跟着刷新的
	//但是当在数据中添加一个元素的时候，在state中数据是添加了
	//但是视图是不会刷新的，因为这个元素不在系统的响应式中
//方法就是让它变成响应式的使用
//参数1：要修改的对象或数据
//参数2：属性或者下标
//参数3：修改后的值是      //vue.set方法可以让数据是响应式的，加入到响应式中
vue.set(state.arr,3,5)  //比如在mutations的某个方法中添加state一个元素
				//删除数据的办法
//解决让删除的数据变成响应式的方法
参数1：要做修改的数据
参数2：要删除的数据   key|index
vue.delete(state.arr,4)   //数据加入到响应式中
```



### state(仓库)对象

外部访问方式this.$store.state中保存的数据访问state中的数据

**state是管理数据的，就是保存数据的**

### mutations(方法)对象

**mutations这个里面的方法不要有异步的操作，一旦操作了虽然数据确实可以改变，但是在vue的调试工具中是看不到数据的变化的实在想进行异步的操作的话，就去actions里面。那里面的异步的操作在vue的调试工具中可以看到数据的变化的**

外部访问方式this.commit('mutations中的定义的方法'，参数，参数)  访问mutations中的方法

**mutations就是methods方法，不一样的是必须通过mutations来操作state中的数据不然直接在外部对数据做改变的话，state的数据的本身是不变的**

### getters对象(计算属性)

外部访问方式this.$store.getters中的方法  不用加括号就可以调用的，类似计算属性   方法getters中的方法

**getters就是类似那个计算属性**

### modules对象(相当于又定义了vuex)

**定义多的的vuex**

### actions对象（行为，就相当于方法methods）

用来做异步的操作的





## 5个对象的使用方法

### state使用方法

```javascript
new Vuex.Store({	
	state:{
        arr:[1,2,3]
    }
})
```



```javascript
this.$store.state.arr[0] 获取数据
```

！！！注意这样去修改数据的话，store仓库中的数据本质是不会改变的需要用mutations方法去改变store中的数据才可以的



### mutations使用方法

**去修改state中的额数据的时候必然是在mutations中进行的，因为在这个里面改变的数据是可以被系统的监听的，还有当使用push，pop这些方法都是响应式的**

第一个参数都是上面的state

第二个参数是你自定义的参数，在外部就引入

第三个参数是undefined不要传入

不接受返回值

```javascript
mutations中的方法中第三个参数是一个undefined
你可以吧第二个参数当一个对象传入多个只
new Vuex.Store({
    state:{
        arr:[1,2,3]
    },
    mutations:{
        add(state,num){
         state.arr[0]+=num.num1 + num.num2
            //函数的return返回值无效undefined
        }
    }
})
```

```javascript
this.$store.commit('add',{num1:100,num2:200})   //两种方法一样的用的方式不一样
在state仓库中add(state,num){
    这里的num就是传递过来的参数=={num1:100,num2:200}
}

this.$store.commit({type:'add',canshu:{num1:100,num2:200}})  //两种方法一样的用的方式不一样
在state仓库中add(state,num){
    这里的num是一个对象=={type:'add',canshu:{num1:100,num2:200}} 	
}
```

### getters使用方法

第一个参数是state(仓库数据)

第二个参数是getters(同类的，可以访问自己同类的方法)

第三个参数不接受(如果实在想传入一个参数的话，就可以返回一个函数看最后)

接受有返回值

```javascript
//把他当成一个计算属性来用
new Vuex.Store({
    state:{
        arr:1
    },
    getters:{
        add(state,getters){
            state.arr+=getters.add2
        },
        add2(){
            return 10
        }
    }
})
```

```javascript
this.$store.getters.add    //这个就可以了，不用加括号自己执行的它是
```

```javascript
new Vuex.Store({
    state:{
        arr:[12,3,4,5,6]
    },
    getters:{   //查找数组中是5的元素返回出来
        add2(state,getters){
            return function(value){ //filter过滤数组
                return state.arr.filter(a=>a===value)
            }
        }
    }
})
```

```javascript
this.$store.getters.add2(5)    //查找数组中是5的元素返回出来
```

### actions使用方法的

**这个里面的方法专门是进行异步的操作的，专门是这个的**

第一个参数是context（表示上下文的==store整个对象==）

第二个参数是携带的参数

接受return返回值

```javascript
new Vuex.Store({
    state:{
        arr:1
    },
    mutations:{
        gai(state,payload){
            //在这里修改state中的数据
            state.arr[0] = payload
        }
    }
    actions:{
        gai(context,payload){
            //这个进行异步的操作当真的去修改state中的数据额时候就去调用mutations中的方法去修改state中的数据
            setTimeout(function(){
                //用定时器来模拟异步的操作
                context.commit('gai',2)
            },100)
		},
        gai1(context,payload){
            return new promise(resolve,reject){
               setTimeout(function(){
                context.commit('gai',payload)
                   resolve('成功')
               },1000)
            }
        }
    }
})
```

```javascript
this.$store.dispatch('gai','我是参数')//这个最简单的

//这里实现当数据改变的使用使用自定义的回调函数,使用promise更方便
this.$store.dispatch('gai1','我是参数')
.then((resolve)=>{console.log(resolve)})
```

### modules使用方法

```javascript
new Vuex.Store({
    state:{
       names:'shi'
    },
    mutations:{
        
    },
    getters:{
        
    },
    actions:{
        
    },
    modules:{
       a:modulesA  
        //这个a中的state相当于放在了上面的state中了
    }
})
const modulesA={
    state:{ 
        name:'yue'
    },
    mutations:{
        //这个的mutations中的方法的名字不要和上面的一样mutations一样，这里的方法相当于直接放在了原来的mutations中了,用的时候直接用this.$store.commit('这里方法的名字')
        updataname(state,payload){
            state.name=payload
        }
    },
    getters:{   //getters中的第三个参数是rootstate就是根实例中的state数据
        //在模块中定义的getters中的方法最后都会放在vuex根中的getters中方法中，可以想正常的方法来正常的使用
        addname(state){
            return state.name+'1'
        },
        upname(state,getters){
           return getters.addname+'2'
        },
        rootstate(state,getters,rootstate){
            //获取根实例中的state中的name数据
            return state.name+rootstate.names
        }
    },
    actions:{
        //这里的方法最后也放在了实例的actions中的
        //所以直接来用就行了
        actions(context,a){
  //这个重点说明一下context是上下文的意思，但是在模块中的上下文定义的context是指向的自己的这个模块的不能去访问根实例的数据
            return context.state.name+a
        }
    }
}
```

```javascript
//我现在想获取modulesA中name数据
this.$store.state.a.name == 'yue'

//现在我要用modulesA中的mutations方法
this.$store.commit('updataname','wei')

//使用modulesA中getters中的方法
this.$store.getters.addname

//使用modulesA中actions中的方法
this.$store.dispatch('actions','我是参数')
```





