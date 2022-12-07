<template>
    <div class="aviasales">
        <vTransplantsVue />
        <vFilterButtonsVue />
        <vTicketsVue />
    </div>
</template>

<script>
import vTransplantsVue from '@/components/v-transplants.vue';
import vFilterButtonsVue from '@/components/v-filters-buttons.vue';
import vTicketsVue from '@/components/v-tickets.vue'

export default {
    components: {
        vTransplantsVue,
        vFilterButtonsVue,
        vTicketsVue,
    }
}

</script>