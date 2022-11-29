<script lang="ts">
  export default {
    data: () => ({
      form: {
        isValid: true,
        email: '',
      },
    }),
  }
</script>
<template>
  <div>
    <Nav actionTitle="Lewati" />
    <v-container>
      <v-form :modelValue="form.isValid">
        <h6 class="text-h6 mb-2">Lupa Password</h6>
        <p class="mb-6 text-caption">
          Masukkan alamat email Anda untuk meminta reset kata sandi.
        </p>

        <div>
          <p class="text-body-2 mb-1">Email</p>
          <v-text-field
            type="email"
            placeholder="Masukan email"
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
              Reset Password
            </v-btn>
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
