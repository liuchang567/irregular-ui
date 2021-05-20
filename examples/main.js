import Vue from 'vue'
import Index from './index.vue'
import components from '../src'
Vue.config.productionTip = false
Vue.use(components)
new Vue({
  render: h => h(Index)
}).$mount('#app')
