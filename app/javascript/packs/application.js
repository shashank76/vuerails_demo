// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
/* app/javascript/packs/application.js */
/* eslint no-console:0 */
// import "../assets/stylesheets/application.css";
import TurbolinksAdapter from 'vue-turbolinks';
import Vuelidate from 'vuelidate';
import Vue from 'vue/dist/vue.esm';
import Login from '../components/login.vue';

Vue.use(Vuelidate)
Vue.use(TurbolinksAdapter)

Vue.component('login', Login);

document.addEventListener('turbolinks:load', () => {
 const app = new Vue({
   el: '[data-behavior="vue"]'
 })
})
