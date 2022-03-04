import Vue from 'vue'
import App from './App.vue'
import { initializeApp}  from 'firebase/app'
import {firebaseConfig} from "../firebase-credentials";

initializeApp(firebaseConfig);

Vue.config.productionTip = false

export const eventBus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
