import Vue from "vue";
import App from "./App.vue";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import './components' // 引入自定义组件

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

