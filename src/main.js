import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入所有组件
import Element from 'element-ui';
//样式需要单独引入
import 'element-ui/lib/theme-chalk/index.css';

// 在引入 Element 时，可以传入一个全局配置对象。该对象目前支持 size 与 zIndex 字段。size 用于改变组件的默认尺寸，zIndex 设置弹框的初始 z-index（默认值：2000）。
Vue.use(Element, { size: 'small', zIndex: 3000 });

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
