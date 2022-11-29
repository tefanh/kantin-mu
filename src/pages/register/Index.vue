<script lang="ts">
  export default {
    data: () => ({
      form: {
        isValid: true,
        username: '',
        password: '',
        passwordConfirm: '',
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
        <h6 class="text-h6 mb-2">Buat akun</h6>
        <p class="mb-6 text-caption">
          Selamat datang teman, masukkan detail Anda sehingga mari kita mulai
          memesan makanan.
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

        <div>
          <p class="text-body-2 mb-1">Konfirmasi Password</p>
          <v-text-field
            type="password"
            placeholder="Masukan password"
            variant="outlined"
            density="comfortable" />
        </div>

        <div class="login__actions fullwidth">
          <v-container>
            <v-btn
              type="submit"
              color="primary"
              block
              flat
              rounded
              class="font-weight-bold text-capitalize mb-4"
              :disabled="!form.isValid">
              Daftar
            </v-btn>
            <span class="text-caption"
              >Sudah punya akun ?
              <router-link to="/login" class="text-red"
                >Login disini</router-link
              ></span
            >
          </v-container>
        </div>
      </v-form>
    </v-container>
  </div>
</template>
<style lang="scss" scoped>
  .login {
    &__actions {
      position: fixed;
      bottom: 0px;
      left: 0;
    }
  }
</style>
