<script lang="ts">
  import Intro from '../components/content/Intro.vue'
  export default {
    components: {
      Intro,
    },
    data: () => ({}),
    created() {
      console.log(this.$vuetify)
    },
  }
</script>
<template>
  <div>
    <Intro />
  </div>
</template>
