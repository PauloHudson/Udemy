import Vue from 'vue'
import App from './App'


new Vue({
    //simplesment estamos renderizando essa funciotion que tem o id app...
   render: h => h(App),
}).$mount('#app')