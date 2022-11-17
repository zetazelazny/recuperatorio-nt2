import Vue from 'vue'
import App from './App.vue'


/* -------------- BOOTSTRAP --------------- */
//https://getbootstrap.com/docs/4.6/getting-started/introduction/
//Instalación: npm i bootstrap@4 jquery popper.js
import './bootstrap'




Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
