<template>
    <div class="button-fast">
      <button @click="getFastTickets">Самый быстрый</button>
    </div>
  </template>
  
  <script>
import { mapActions } from 'vuex'
  export default {
    methods: {
      ...mapActions([
        'GET_FAST_TICKETS'
      ]),
      getFastTickets() {
        this.GET_FAST_TICKETS();
      }
    }
  }
  </script>