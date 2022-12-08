import tickets from '@/seeders/tickets.json'

export default {
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
        commit('SET_TISKET_WITH_FILTER', amount);
    },
    
    GET_REMOVE_TICKETS_WITH_FILTER({commit}, amount) {
        commit('SET_REMOVE_TICKETS_WITH_FILTER', amount);
    },
}