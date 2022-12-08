import { createStore } from 'vuex'
import getters from './getters/getters'
import mutations from './mutations/mutations'
import actions from './actions/actions'

export default createStore({
  state: {
    tickets: [],
    filtered_tickets: [],
  },
  getters,
  mutations,
  actions,
})
