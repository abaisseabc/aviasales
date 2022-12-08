import { createStore } from 'vuex'
import tickets from '../seeders/tickets.json'

export default createStore({
  state: {
    tickets: [],
  },
  getters: {
    TICKETS(state) {
      return state.tickets
    },
  },
  mutations: {
    SET_TICKETS_TO_STATE: (state, tickets) => {
      state.tickets = tickets;
    },
    SET_FAST_TICKETS: (state) => {
      state.tickets.sort( (duration1, duration2) => 
        duration1.segments[0].duration+duration1.segments[1].duration > duration2.segments[0].duration+duration2.segments[1].duration
        ? 
        1 : -1
      );
    },
    SET_CHEAP_TICKETS: (state) => {
      state.tickets.sort((price1, price2) => price1.price > price2.price ? 1 : -1);
    }
  },
  actions: {
    GET_TICKETS_FROM_API({commit}) {
      commit('SET_TICKETS_TO_STATE', tickets.tickets);
    },
    GET_FAST_TICKETS({commit}) {
      commit('SET_FAST_TICKETS');
    },
    GET_CHEAP_TICKETS({commit}) {
      commit('SET_CHEAP_TICKETS');
    }
  }
})
