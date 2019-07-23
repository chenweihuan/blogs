import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)

const state = {
  product2Content: "这是Store的product2Content内容"
}
export default {
  namespaced: true,
  state
}

