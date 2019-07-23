import Vue from 'vue'
import vuex from 'vuex'

import pathify from './pathify'
import productStore from "./modules/productStore"
import product2Store from "./modules/product2Store"
Vue.use(vuex)
export default new vuex.Store({
  plugins: [pathify.plugin],
  modules: {
    productStore,
    product2Store
  }
})

