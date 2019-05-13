import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Header,Swipe,SwipeItem,Button} from 'mint-ui' // 引入 mint-ui组件
import VueResource from 'vue-resource'  //引入vue-resource


Vue.config.productionTip = false
Vue.component(Header.name,Header)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)
Vue.component(Button.name,Button)
Vue.use(VueResource)
Vue.filter("dataFormat",(datastr,pattern="YYYY-MM-DD")=>{
  return new Date(datastr).toLocaleString();
})

import 'mint-ui/lib/style.css' //mint-ui 
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

//设置ajax访问基础路径
Vue.http.options.root='http://localhost:3000/';
Vue.http.options.emulateJSON=true;   //ajax post 访问格式


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
