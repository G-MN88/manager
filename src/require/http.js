//导入axios
import axios from 'axios'
//导入vue
// import Vue from 'vue'
//导入路由
// import router from '../router'
const service = axios.create({
    // baseURL: 'http://10.16.18.171:8899/api/', // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000 // request timeout
  })
//axios基地址
// axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/';

//axios拦截器
// 请求时的回调函数
service.interceptors.request.use( config=> {
    // Do something before request is sent
    //把token设置到拦截器上
    // console.log(config);
    config.headers.Authorization = window.localStorage.getItem('token')
    console.log(config.headers.Authorization);
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// 响应时的回调函数
service.interceptors.response.use(response=> {
    // Do something with response data
    // console.log(response);
    //请求成功的弹框
    // if (response.data.meta.status === 200) {
    //     // Vue.prototype.$message.success(response.data.meta.msg)
    //     new Vue().$message.success(response.data.meta.msg)
    // }else if(response.data.meta.status==400 && response.data.meta.msg == '无效token'){
    //     //防止伪造token,发现就编程式导航返回到登录页,并且删掉token
    //     //弹框提示
    //     new Vue().$message.warning('token是你伪造的吧')
    //     //返回登录页,先导入路由
    //     router.push('login')
    //     //删除token
    //     window.sessionStorage.removeItem('token')
    // }
    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});
// 暴露出去
export default service






