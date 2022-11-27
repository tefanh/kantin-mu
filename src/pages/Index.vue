<script lang="ts">
  import intro from '../components/content/intro.vue'
  export default {
    components: {
      intro,
    },
    data: () => ({}),
    created() {
      console.log(this.$vuetify)
    },
  }
</script>
<template>
  <div>
    <intro />
  </div>
</template>
