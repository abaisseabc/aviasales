<template>
  <div class="button-cheap">
    <button @click="getCheapTickets">Самый дешевый</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions([
      'GET_CHEAP_TICKETS'
    ]),
    getCheapTickets() {
      this.GET_CHEAP_TICKETS();
    }
  }
}
</script>