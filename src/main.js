import firebase from 'firebase'
import("firebase/functions");
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueClipboard from 'vue-clipboard2'
import Meta from 'vue-meta'

// Vue.use(Meta)
VueClipboard.config.autoSetContainer = true // add this line

Vue.use(VueClipboard)
Vue.use(VueAxios, axios)
var VueCookie = require('vue-cookie');
// Tell Vue to use the plugin
// import moment from 'vue-moment'
// moment.locale('ja');
Vue.use(VueCookie);

// Vue.use(moment);

Vue.config.productionTip = false

// Initialize Firebase
var config = {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyDOm4h_Y5ENuswObOS8aji5mQ7xYz2u6Hg",
  authDomain: "whyhowwhat-9a57b.firebaseapp.com",
  databaseURL: "https://whyhowwhat-9a57b-default-rtdb.firebaseio.com",
  projectId: "whyhowwhat-9a57b",
  storageBucket: "whyhowwhat-9a57b.appspot.com",
  messagingSenderId: "599392594275",
  appId: "1:599392594275:web:da0db711725a6f8a724b56",
  measurementId: "G-5LY6KBGLDN"
};
firebase.initializeApp(config);
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
