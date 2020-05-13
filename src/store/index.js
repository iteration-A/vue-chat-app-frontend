import Vue from 'vue'
import Vuex from 'vuex'

import io from 'socket.io-client'

const serverUrl = process.env.VUE_APP_URL
const socket = io(serverUrl)

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    socket,
    messages: [],
    username: ''
  },
  getters: {
    socket: state => state.socket,
    messages: state => state.messages,
    username: state => state.username
  },
  mutations: {
    username: (state, username) => (state.username = username)
  },
  actions: {},
  modules: {}
})
