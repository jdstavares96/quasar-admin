<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex bg-image flex-center">
        <q-card v-bind:style="$q.screen.lt.sm?{'width': '80%'}:{'width':'30%'}">
          <q-card-section>
            <q-avatar size="103px" class="absolute-center shadow-10">
              <img src="Boteco.png">
            </q-avatar>
          </q-card-section>
          <q-card-section>
            <div class="text-center q-pt-lg">
              <div class="col text-h6 ellipsis">
                Log in
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form
              class="q-gutter-md"
              @submit.prevent="login"
            >
              <q-input
                filled
                v-model="user.user"
                label="Usuário"
                lazy-rules
              />

              <q-input
                :type="isPwd ? 'password' : 'text'"
                filled
                v-model="user.password"
                label="Senha"
                lazy-rules>
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>

              <div>
                <q-btn label="Login" type="submit" color="primary"/>
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import {defineComponent} from 'vue'
import authService from "../services/AuthService";
import {ref} from 'vue'

export default defineComponent({
  setup() {
    return {
      isPwd: ref(true)
    }
  },
  data() {
    return {
      user: {
        user: "",
        password: ""
      },
      invalidCredentials: false
    };
  },
  methods: {
    login() {
      authService
        .login(this.user)
        .then(response => {
          if (response.status == 200) {
            this.$store.commit("SET_AUTH_TOKEN", response.data.token);
            this.$store.commit("SET_USER", response.data.user);
            this.$router.push("/");
          }
        })
        .catch(error => {
          const response = error.response;
          if (response.status === 401) {
            this.invalidCredentials = true;
          }
        });
    }
  }
})
</script>

<style>

.bg-image {
  /* background-image: linear-gradient(135deg, #7028e4 0%, #e5b2ca 100%); */
  background-image: linear-gradient(135deg, #000 0%, #999 100%);
}
</style>
