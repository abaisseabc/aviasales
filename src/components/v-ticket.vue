<template>
    <div class="v-ticket">
        <div class="v-ticket-header">
            <div class="v-ticket-header__price">
                {{ticket_data.price}} Р
            </div>
            <div class="v-ticket-header__airline">
                <img src="../assets/icons/airline-logo.png" alt="">
            </div>
        </div>
        <div class="v-ticket-details">
            <div class="v-ticket-details__path">
                <div class="v-ticket-details__path-city">
                    {{ticket_data.segments[0].origin}} – {{ticket_data.segments[0].destination}}
                </div>
                <div class="v-ticket-details__path-travel-time">
                    {{ticket_data.segments[0].date}}
                </div>
            </div>
            <div class="v-ticket-details__time">
                <div class="v-ticket-details__time-way">
                    В пути
                </div>
                <div class="v-ticket-details__time-elapsed-time">
                    {{ticket_data.segments[0].duration}}
                </div>
            </div>
            <div class="v-ticket-details__transplants">
                <div class="v-ticket-details__transplants-amout">
                    {{ticket_data.segments[0].stops.length}} пересадки
                </div>
                <div class="v-ticket-details__transplants-city">
                    <span 
                        v-for="(stop, index) in ticket_data.segments[0].stops" 
                        :key="index"
                    >
                        {{stop}}, 
                    </span>
                </div>
            </div>
        </div>
        <div class="v-ticket-details">
            <div class="v-ticket-details__path">
                <div class="v-ticket-details__path-city">
                    {{ticket_data.segments[1].origin}} – {{ticket_data.segments[1].destination}}
                </div>
                <div class="v-ticket-details__path-travel-time">
                    {{ticket_data.segments[1].date}}
                </div>
            </div>
            <div class="v-ticket-details__time">
                <div class="v-ticket-details__time-way">
                    В пути
                </div>
                <div class="v-ticket-details__time-elapsed-time">
                    {{ticket_data.segments[1].duration}}
                </div>
            </div>
            <div class="v-ticket-details__transplants">
                <div class="v-ticket-details__transplants-amout">
                    {{ticket_data.segments[1].stops.length}} пересадки
                </div>
                <div class="v-ticket-details__transplants-city">
                    <span 
                        v-for="(stop, index) in ticket_data.segments[1].stops" 
                        :key="index"
                    >
                        {{stop}}, 
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        ticket_data: {
            type: Object,
        }
    },
}
</script>