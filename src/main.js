import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'

import {Header,Button,Swipe, SwipeItem } from 'mint-ui';

Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


/* eslint-disable no-new */
new Vue({
  el: '#demo',
  router,
  render: ce => ce(App),
  store
})
