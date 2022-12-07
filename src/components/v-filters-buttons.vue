<template>
    <div class="v-filter-buttons">
        <buttonCheapVue />
        <buttonFastVue />
    </div>
</template>

<script>
import buttonCheapVue from './UI/button-cheap.vue';
import buttonFastVue from './UI/button-fast.vue'

export default {
    components: {
        buttonCheapVue,
        buttonFastVue
    }
}
</script>