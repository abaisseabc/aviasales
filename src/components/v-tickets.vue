<template>
    <div class="v-tickets">
        <vTicketVue 
            v-for="ticket in normalizeDataTickets"
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
        normalizeDataTickets() {
            this.TICKETS.forEach( ticket => {
                this.getNormalTime(ticket);
                this.getNormaleDate(ticket);
            });

            return this.TICKETS
        }
    },
    methods: {
        ...mapActions([
            'GET_TICKETS_FROM_API'
        ]),
        getNormalTime(ticket) {
            let minutes1 = ticket.segments[0].duration
            let minutes2 = ticket.segments[1].duration
            minutes1 = (minutes1 / 60 | 0) + "ч " + minutes1 % 60 + "м" 
            minutes2 = (minutes2 / 60 | 0) + "ч " + minutes2 % 60 + "м" 
            ticket.segments[0].duration = minutes1
            ticket.segments[1].duration = minutes2
        },
        getNormaleDate(ticket) {
            let date1 = new Date(ticket.segments[0].date)
            date1 = date1.getDate() + '-' + (date1.getMonth()+1) + '-' + date1.getFullYear() + ' ' + date1.getHours() + ':' + date1.getMinutes()
            ticket.segments[0].date = date1

            let date2 = new Date(ticket.segments[1].date)
            date2 = date2.getDate() + '-' + (date2.getMonth()+1) + '-' + date2.getFullYear() + ' ' + date2.getHours() + ':' + date2.getMinutes()
            ticket.segments[1].date = date2
        }
    },
    mounted() {
        this.GET_TICKETS_FROM_API();
    },
}

</script>