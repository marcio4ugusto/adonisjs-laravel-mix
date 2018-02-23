require('./bootstrap');

window.Vue = require('vue');

Vue.component('sentence-component', require('./components/Sentence.vue'));

const app = new Vue({
	el: '#app'
});
