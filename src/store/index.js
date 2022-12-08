import { createStore } from 'vuex'
import tickets from '../seeders/tickets.json'

export default createStore({
  state: {
    tickets: [],
    filtered_tickets: [],
    arr: []
  },
  getters: {
    TICKETS(state) {
      return state.tickets
    },
    FILTERED_TICKETS(state) {
      return state.filtered_tickets
    }
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
    },
    SET_TISKET_WITH_FILTER: (state, amount) => {
      switch(amount) {

        case 0:
          state.tickets.map(item => {
            if (item.segments[0].stops.length === 0 && item.segments[1].stops.length === 0) {
              state.filtered_tickets.push(item)
            }
          })
          break;

        case 1:
          state.tickets.map(item => {
            if (item.segments[0].stops.length === 1 && item.segments[1].stops.length === 1) {
              state.filtered_tickets.push(item)
            }
          })
          break;

        case 2:
          state.tickets.map(item => {
            if (item.segments[0].stops.length === 2 && item.segments[1].stops.length === 2) {
                state.filtered_tickets.push(item)
            }
          })
          break;

        case 3:
          state.tickets.map(item => {
            if (item.segments[0].stops.length === 3 && item.segments[1].stops.length === 3) {
                state.filtered_tickets.push(item)
            }
          })
          break;

        default: 
          state.filtered_tickets = []
          return state.tickets

      }
    },
    SET_REMOVE_TICKETS_WITH_FILTER: (state, amount) => {
      state.filtered_tickets = [];
      amount = amount.split('');

      for (let i =0; i <= amount.length; i++) {

        state.tickets.forEach(ticket => {
          if (ticket.segments[0].stops.length == amount[i] && ticket.segments[1].stops.length == amount[i]) {
            state.filtered_tickets.push(ticket);
          }
        });

      }
    },
    RETURN_TICKETS_INITIAL_STATE: (state) => {
      state.filtered_tickets = [];
      state.filtered_tickets = state.tickets
      console.log(state.tickets)
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
    },
    GET_TICKETS_WITH_FILTER({commit}, amount) {
      commit('SET_TISKET_WITH_FILTER', amount)
    },
    GET_REMOVE_TICKETS_WITH_FILTER({commit}, amount) {
      commit('SET_REMOVE_TICKETS_WITH_FILTER', amount);
    },
    UPTADE_TICKETS({commit}) {
      commit('RETURN_TICKETS_INITIAL_STATE')
    }
  }
})
