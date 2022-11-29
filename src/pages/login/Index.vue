<script lang="ts">
  export default {
    data: () => ({
      form: {
        isValid: true,
        username: '',
        password: '',
      },
      state: {
        showPassword: false,
      },
    }),
  }
</script>
<template>
  <div>
    <Nav actionTitle="Lewati" />
    <v-container>
      <v-form :modelValue="form.isValid">
        <h6 class="text-h6 mb-2">Masuk ke akun anda</h6>
        <p class="mb-6 text-caption">
          Senang bertemu Anda lagi, masukkan detail Anda di bawah ini untuk
          melanjutkan pemesanan.
        </p>

        <div>
          <p class="text-body-2 mb-1">Email</p>
          <v-text-field
            type="email"
            placeholder="Masukan email"
            variant="outlined"
            density="comfortable" />
        </div>

        <div>
          <p class="text-body-2 mb-1">Password</p>
          <v-text-field
            type="password"
            placeholder="Masukan password"
            variant="outlined"
            density="comfortable" />
        </div>

        <span class="text-caption"
          >Lupa Password ? <a href="#" class="text-red">Klik disini</a></span
        >

        <div class="intro__actions mt-8">
          <v-btn
            type="submit"
            color="primary"
            block
            flat
            rounded
            class="font-weight-bold text-capitalize mb-2"
            :disabled="!form.isValid">
            Masuk
          </v-btn>
        </div>
      </v-form>
    </v-container>
  </div>
</template>
