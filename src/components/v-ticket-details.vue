<template>
          <div class="v-ticket-details">
            <div class="v-ticket-details__path">
                <div class="v-ticket-details__path-city">
                    {{detail.origin}} – {{detail.destination}}
                </div>
                <div class="v-ticket-details__path-travel-time">
                    {{normalizeDate}}
                </div>
            </div>
            <div class="v-ticket-details__time">
                <div class="v-ticket-details__time-way">
                    В пути
                </div>
                <div class="v-ticket-details__time-elapsed-time">
                    {{normalizeTime}}
                </div>
            </div>
            <div class="v-ticket-details__transplants">
                <div class="v-ticket-details__transplants-amout">
                    {{detail.stops.length}} пересадки
                </div>
                <div class="v-ticket-details__transplants-city">
                    <span 
                        v-for="(stop, index) in detail.stops" 
                        :key="index"
                    >
                        {{stop}};
                    </span>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    props: {
        detail: {
            type: Object,
        }
    },
    computed: {
        normalizeTime() {
            let minutes = this.detail.duration
            minutes = (minutes / 60 | 0) + "ч " + minutes % 60 + "м";
            return minutes
        },
        normalizeDate() {
            let date = new Date(this.detail.date);
            date = date.getDate() + '-' + (date.getMonth()+1) + '-' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes()
            return date;

        }
    }
}
</script>

<style>

</style>