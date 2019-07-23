import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);

const state = {
    productContent: "这是Store的productContent内容"
}

const getters = {//可获取加工后的state
    geProduct: state => {
        return "加工后的：" + state.productContent
    }
}

const mutations = {//修改数据仓库的数据，只支持同步方法
    MU_ITEMS(state, payload) {
        state.productContent = payload;
    }
}

const actions = {
    acChange(context, payload) {
        setTimeout(() => {
            context.commit("MU_ITEMS", payload)
        }, 1000)
    }
}

export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}



