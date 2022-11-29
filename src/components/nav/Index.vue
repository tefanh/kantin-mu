<script lang="ts">
  export default {
    props: {
      actionTitle: {
        type: String,
        default: () => 'Action',
      },
    },
    methods: {
      actionClicked() {
        this.$emit('click:action', true)
      },
    },
  }
</script>
<template>
  <v-toolbar color="white" class="fullwidth">
    <logo class="ml-5" :width="28" />
    <v-spacer />
    <v-btn
      type="button"
      class="font-weight-bold text-capitalize"
      flat
      size="small"
      color="primary"
      @click="actionClicked">
      {{ actionTitle }}
    </v-btn>
  </v-toolbar>
</template>
