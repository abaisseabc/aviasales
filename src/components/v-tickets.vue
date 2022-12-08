<template>
    <div class="v-tickets">
        <vTicketVue 
            v-for="ticket in this.TICKETS"
            :key="ticket.id"
            :ticket_data="ticket"
        />
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import vTicketVue from './v-ticket.vue';

export default {
    components: {
        vTicketVue
    },
    computed: {
        ...mapGetters([
            'TICKETS'
        ]),
    },
    methods: {
        ...mapActions([
            'GET_TICKETS_FROM_API'
        ]),
    },
    mounted() {
        this.GET_TICKETS_FROM_API();
    },
}

</script>