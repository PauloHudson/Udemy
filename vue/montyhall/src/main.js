import Vue from 'vue'
import App from './App'

new Vue({
    //mount meesma coisa que o El
    //esse h é a mesma coisa também do crateElement =>
    //está renderizando a div dentro de app com o id app
    render: h => h(App)
}).$mount('#app')
