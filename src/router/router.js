//导入vue
import Vue from 'vue'
//导入路由
import VueRouter from 'vue-router'
//use一下
Vue.use(VueRouter)


// 导入组件
import index from '../components/index.vue'
import login from '../components/login.vue'

// 路由规则
const routes = [
    { path: '/', redirect: '/index' },

    { path: '/index', component: index },

    { path: '/login', component: login },
    
  ]
  
  // 3. 创建 router 实例，然后传 `routes` 配置
  // 你还可以传别的配置参数, 不过先这么简单着吧。
  const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
  })
  
//   // 4. 创建和挂载根实例。
//   // 记得要通过 router 配置参数注入路由，
//   // 从而让整个应用都有路由功能
//   const app = new Vue({
//     router
//   }).$mount('#app')

//暴露出去
export default router