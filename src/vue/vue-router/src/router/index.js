import Vue from 'vue';
import Router from 'vue-router';
import Guide from './../views/Guide/Guide';
import Index from './../views/Index/Index';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/guide',
      name: 'Guide',
      component: Guide
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    }
  ]
});
