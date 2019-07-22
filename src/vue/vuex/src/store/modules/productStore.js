import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)

const state = {
    productContent: "这是Store的productContent内容"
}

const getters = {//可获取加工后的state
    getProductContent: state => {
        return "加工后的：" + state.productContent
    }
}

const mutations = {//修改数据仓库的数据，只支持同步方法
    changeProductContent(state, payload) {
        state.productContent = payload;
    }
}

// Action和Mutation类似，他们之处在于：
// 1、Action 提交的是 mutation，而不是直接变更状态。
// 2、Action 可以包含任意异步操作。
const actions = {
    changeProductContentByAction(context, payload) {
        setTimeout(() => {
            context.commit("changeProductContent", payload)
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



