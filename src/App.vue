<template>
  <div class="container">
    <vLogoVue />
    <AviasalesView />
  </div>
</template>

<script>
import vLogoVue from './components/v-logo.vue';
import AviasalesView from './views/AviasalesView.vue'

export default {
  components: {
    vLogoVue,
    AviasalesView
  },
}
</script>
