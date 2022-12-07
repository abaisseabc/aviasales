import { createStore } from 'vuex'
import tickets from '../seeders/tickets.json'

export default createStore({
  state: {
    tickets: []
  },
  getters: {
    TICKETS(state) {
      return state.tickets
    },
  },
  mutations: {
    SET_TICKETS_TO_STATE: (state, tickets) => {
      state.tickets = tickets;
    }
  },
  actions: {
    GET_TICKETS_FROM_API({commit}) {
      commit('SET_TICKETS_TO_STATE', tickets.tickets)
    }
  }
})
