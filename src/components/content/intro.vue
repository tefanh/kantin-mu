<script lang="ts">
  export default {
    data: () => ({
      message: 'ini adalah intro',
      activeSlide: 0,
      items: [
        {
          id: 1,
          description: 'Order from your favourite<br />stores or vendors',
          image:
            'https://res.cloudinary.com/tefanhaetami/image/upload/v1669533730/Group_391_o1xdhw.svg',
        },
        {
          id: 2,
          description: 'Choose from a wide range of<br />delicious meals',
          image:
            'https://res.cloudinary.com/tefanhaetami/image/upload/v1669534366/Group_389_jembbf.svg',
        },
        {
          id: 3,
          description: 'Enjoy instant delivery<br />and payment',
          image:
            'https://res.cloudinary.com/tefanhaetami/image/upload/v1669534506/Group_463_mhxnsy.svg',
        },
      ],
    }),
    computed: {
      totalItems() {
        return this.items.length
      },
    },
  }
</script>
<template>
  <div
    class="container__intro d-flex flex-column justify-space-between align-center">
    <v-toolbar color="white" class="mb-8 fullwidth">
      <logo class="ml-5" :width="28" />
      <v-spacer />
      <v-btn
        type="button"
        class="font-weight-bold text-capitalize"
        flat
        size="small"
        color="primary">
        Lewati
      </v-btn>
    </v-toolbar>

    <v-card rounded="0" variant="flat" flat class="fullwidth mb-8">
      <v-window v-model="activeSlide">
        <v-window-item
          v-for="item in items"
          :key="item.id"
          :value="item.id"
          class="text-center">
          <h3 class="mb-8" v-html="item.description"></h3>
          <img :src="item.image" :alt="`image${item.id}`" height="250" />
        </v-window-item>
      </v-window>

      <v-card-actions class="justify-center">
        <v-item-group v-model="activeSlide" class="text-center" mandatory>
          <v-item
            v-for="n in totalItems"
            :key="`btn-${n}`"
            v-slot="{ isSelected, toggle }"
            :value="n">
            <v-btn
              :color="isSelected ? 'primary' : 'dark'"
              icon="mdi-record"
              class="mx-0"
              @click="toggle"></v-btn>
          </v-item>
        </v-item-group>
      </v-card-actions>
    </v-card>

    <div class="intro__actions fullwidth">
      <v-container>
        <v-btn
          type="button"
          color="primary"
          block
          flat
          rounded
          class="font-weight-bold text-capitalize mb-2">
          Buat Akun
        </v-btn>
        <v-btn
          type="button"
          color="primary"
          block
          flat
          rounded
          class="font-weight-bold text-capitalize"
          variant="text">
          Login
        </v-btn>
      </v-container>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  ::v-deep .v-btn__overlay,
  .v-btn__underlay {
    display: none !important;
  }

  .container {
    &__intro {
      height: 100vh;
    }
  }
</style>
