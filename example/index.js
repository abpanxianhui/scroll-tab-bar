import Vue from 'vue'
import App from './App'
import { ScrollTab, ScrollTabCol } from '../src/index'

Vue.component('scrollTab', ScrollTab)
Vue.component('ScrollTabCol', ScrollTabCol)

new Vue({
    el: '#app',
    render:h => h(App)
})
