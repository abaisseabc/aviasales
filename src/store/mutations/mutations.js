export default {

  SET_TICKETS_TO_STATE: (state, tickets) => {
      state.tickets = tickets;
  },

  SET_FAST_TICKETS: (state) => {
    if (state.filtered_tickets.length === 0) {
      state.tickets.sort( (duration1, duration2) => 
        duration1.segments[0].duration+duration1.segments[1].duration > duration2.segments[0].duration+duration2.segments[1].duration
        ? 
        1 : -1
      );
    } else {
      state.filtered_tickets.sort( (duration1, duration2) => 
        duration1.segments[0].duration+duration1.segments[1].duration > duration2.segments[0].duration+duration2.segments[1].duration
        ? 
        1 : -1
      );
    }
  },

  SET_CHEAP_TICKETS: (state) => {
    if(state.filtered_tickets.length === 0 ) {
      state.tickets.sort((price1, price2) => 
        price1.price > price2.price 
        ? 
        1 : -1
      );
    } else {
      state.filtered_tickets.sort((price1, price2) => 
        price1.price > price2.price 
        ? 
        1 : -1
      );
    }
  },
    
  SET_TISKET_WITH_FILTER: (state, amount) => {

    function searchNeedTicket(transfer) {
      state.tickets.map(item => {
        if (item.segments[0].stops.length === transfer && item.segments[1].stops.length === transfer) {
          state.filtered_tickets.push(item);
        }
      });
    }
      
    switch(amount) {
      case 0: searchNeedTicket(0); break;
      case 1: searchNeedTicket(1); break;
      case 2: searchNeedTicket(2); break;
      case 3: searchNeedTicket(3); break;
      default: 
        state.filtered_tickets = [];
        return state.tickets;
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
}