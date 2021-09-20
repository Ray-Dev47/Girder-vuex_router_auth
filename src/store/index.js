import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'   // just like settings in optima

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        auth
    }
})