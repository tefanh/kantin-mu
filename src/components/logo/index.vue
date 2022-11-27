<script lang="ts">
  export default {
    props: {
      width: {
        type: Number,
        default: () => 34,
      },
    },
  }
</script>
<template>
  <img
    src="https://res.cloudinary.com/tefanhaetami/image/upload/v1669532825/Icon_hoiw7j.svg"
    :width="width"
    alt="App Logo" />
</template>
