import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

//请求添加拦截器
// axios.interceptors.request.use(function (config) {
//   //发送请求之前格式化参数，增加token
//   let data=config.data;
//   let params=new URLSearchParams();
//   for(var key in config.data){
//     params.append(key,data[key])
//   }
//   config.data=params;
//   return config;
// },function (error) {
//   return Promise.reject(error);
// });
//
// //发送请求
// login:function() {
//   let that=this;
//   this.axios({
//     method:'post',
//     url:'http://localhost:8080/test/hello.do',
//     data:{
//       account:'lqy',//获取页面的值
//       password:'123'
//     },
//     headers:{'Content-Type':'application/x-www-form-urlencoded'}//跨域
//   }).then(function(res){
//       console.log(res);
//   }).catch(function(error){
//     console.log(error)
//   });
// }