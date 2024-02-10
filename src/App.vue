<template>
  <div class="flex">
    <background-container class="w-2/5"/>
    <main-content class="bg-zinc-800 w-3/5 px-20 py-10"/>
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
