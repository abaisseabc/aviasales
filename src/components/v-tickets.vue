<template>
    <div class="v-tickets">
        <vTicketVue 
            v-for="ticket in checkTicketsArray"
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
            'TICKETS',
            'FILTERED_TICKETS'
        ]),
        checkTicketsArray() {
            if (this.FILTERED_TICKETS.length === 0) {
                return this.TICKETS
            } else {
                return this.FILTERED_TICKETS
            }
        }
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