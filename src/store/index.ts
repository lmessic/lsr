import { createStore } from 'vuex'

interface State {
  count: number
}

const store = createStore<State>({
  state() {
    return {
      count: 0,
    }
  },
  mutations: {
    add(state) {
      state.count++
    },
    set(state, count) {
      state.count = count
    }
  },
  actions: {
    getCount({commit}) {
      // getCountApi().then((res) => {
      //   commit('set', res)
      // })
    }
  },
  modules: {
    // useStore,
    // orderStore
  }
})

export default store