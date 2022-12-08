<template>
    <div class="v-ticket">
        <div class="v-ticket-header">
            <div class="v-ticket-header__price">
                {{new Intl.NumberFormat('ru-RU').format(ticket_data.price)}} Р
            </div>
            <div class="v-ticket-header__airline">
                <img src="../assets/icons/airline-logo.png" alt="">
            </div>
        </div>
        <vTicketDetailsVue 
            :detail="ticket_data.segments[0]"
        />
        <vTicketDetailsVue 
            :detail="ticket_data.segments[1]"
        />
    </div>
</template>

<script>
import vTicketDetailsVue from './v-ticket-details.vue';

export default {
    components: {
        vTicketDetailsVue,
    },
    props: {
        ticket_data: {
            type: Object,
        }
    },
}
</script>