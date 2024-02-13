<template>
  <div class="flex flex-col md:flex-row">
    <background-container class="w-full md:w-2/5"/>
    <main-content class="w-full md:w-3/5"/>
  </div>
</template>
<script>
import backgroundContainer from './components/Title/BackgroundContainer.vue'
import mainContent from './components/Main/MainContent.vue'

export default {
  name: 'App',
  data() {
    return {
      miNombre: ''
    }
  },
  components: {
    backgroundContainer,
    mainContent,
  }
}
</script>

<style>

</style>
