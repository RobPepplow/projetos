<template>
  <main class="register actflow-bg-login">
    <div class="logo-destaque">
      <img
        src="../../assets/logo_actflow_gray.png"
        alt="Image"
        height="300"
        class="mb-1"
      />
    </div>
    <section class="forms">
      <form class="register" @submit.prevent="register">
        <div
          class="
            px-2
            py-4
            md:px-6
            lg:px-8
            flex
            align-items-center
            justify-content-center
          "
        >
          <div class="surface-card p-4 shadow-2 border-login w-full lg:w-6">
            <div class="text-center mb-5">
              <img
                src="../../assets/logo_actflow.png"
                alt="Image"
                height="150  "
                class="mb-1"
              />
              <h2>Cadastre-se</h2>
            </div>
            <div>
              <label for="email1" class="block text-900 font-medium mb-2"
                >Email</label
              >
              <InputText
                id="email1"
                type="email"
                class="w-full mb-3"
                placeholder="Digite Seu Email"
                autocomplete="off"
                v-model="register_form.email"
              />

              <label for="password1" class="block text-900 font-medium mb-2"
                >Senha</label
              >
              <InputText                
                :type="inputType1"
                class="input mb-3"
                placeholder="Digite Seu Password"
                autocomplete="off"
                v-model="register_form.password"
              />
              <span v-if="isPassword1" class="olho">
                        <svg
                            style="width: 20px;"
                            @click="togglePassword1()"
                            aria-hidden="true"
                            focusable="false"
                            data-icon="eye"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 512"
                        ><path
                            fill="currentColor"
                            d="M634 471L36 3.51A16 16 0 0 0 13.51 6l-10 12.49A16 16 0 0 0 6 41l598 467.49a16 16 0 0 0 22.49-2.49l10-12.49A16 16 0 0 0 634 471zM296.79 146.47l134.79 105.38C429.36 191.91 380.48 144 320 144a112.26 112.26 0 0 0-23.21 2.47zm46.42 219.07L208.42 260.16C210.65 320.09 259.53 368 320 368a113 113 0 0 0 23.21-2.46zM320 112c98.65 0 189.09 55 237.93 144a285.53 285.53 0 0 1-44 60.2l37.74 29.5a333.7 333.7 0 0 0 52.9-75.11 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64c-36.7 0-71.71 7-104.63 18.81l46.41 36.29c18.94-4.3 38.34-7.1 58.22-7.1zm0 288c-98.65 0-189.08-55-237.93-144a285.47 285.47 0 0 1 44.05-60.19l-37.74-29.5a333.6 333.6 0 0 0-52.89 75.1 32.35 32.35 0 0 0 0 29.19C89.72 376.41 197.08 448 320 448c36.7 0 71.71-7.05 104.63-18.81l-46.41-36.28C359.28 397.2 339.89 400 320 400z"
                        /></svg>
                        </span>
                        <span v-else class="olho">
                          <svg
                              style="width: 20px;"
                              @click="togglePassword1()"
                              aria-hidden="true"
                              focusable="false"
                              data-icon="eye-slash"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"                              
                              viewBox="0 0 576 512"
                              class="fa-w-20"
                          ><path
                              fill="currentColor"
                              
                              d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"
                              class=""
                          /></svg>
                        </span>
              <br />
              <label for="password2" class="block text-900 font-medium mb-2"
                >Confirme Senha</label
              >
              <InputText                
                :type="inputType2"
                class="input mb-3"
                placeholder="Digite Novamente o Password"
                autocomplete="off"
                v-model="register_form.confirme"
              />
              <span v-if="isPassword2" class="olho">
                        <svg
                            style="width: 20px;"
                            @click="togglePassword2()"
                            aria-hidden="true"
                            focusable="false"
                            data-icon="eye"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 512"
                        ><path
                            fill="currentColor"
                            d="M634 471L36 3.51A16 16 0 0 0 13.51 6l-10 12.49A16 16 0 0 0 6 41l598 467.49a16 16 0 0 0 22.49-2.49l10-12.49A16 16 0 0 0 634 471zM296.79 146.47l134.79 105.38C429.36 191.91 380.48 144 320 144a112.26 112.26 0 0 0-23.21 2.47zm46.42 219.07L208.42 260.16C210.65 320.09 259.53 368 320 368a113 113 0 0 0 23.21-2.46zM320 112c98.65 0 189.09 55 237.93 144a285.53 285.53 0 0 1-44 60.2l37.74 29.5a333.7 333.7 0 0 0 52.9-75.11 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64c-36.7 0-71.71 7-104.63 18.81l46.41 36.29c18.94-4.3 38.34-7.1 58.22-7.1zm0 288c-98.65 0-189.08-55-237.93-144a285.47 285.47 0 0 1 44.05-60.19l-37.74-29.5a333.6 333.6 0 0 0-52.89 75.1 32.35 32.35 0 0 0 0 29.19C89.72 376.41 197.08 448 320 448c36.7 0 71.71-7.05 104.63-18.81l-46.41-36.28C359.28 397.2 339.89 400 320 400z"
                        /></svg>
                        </span>
                        <span v-else class="olho">
                          <svg
                              style="width: 20px;"
                              @click="togglePassword2()"
                              aria-hidden="true"
                              focusable="false"
                              data-icon="eye-slash"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"                              
                              viewBox="0 0 576 512"
                              class="fa-w-20"
                          ><path
                              fill="currentColor"
                              
                              d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"
                              class=""
                          /></svg>
                        </span>
              <br />
              <p></p>
              <Button
                class="w-full border-red-900"
                id="button-color"
                label="Registrar-se"
                icon="pi pi-user-plus"
                type="submit"
                value="register"
              >
            </Button>
              <div>
                <br />
                <span class="text-600 font-medium line-height-3">
                  J?? tem Registro?
                  <router-link to="/login">Voltar ao Login</router-link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  </main>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "RegisterPage",

  data() {
      return {
          inputType1: 'password',
          inputType2: 'password',
         
      };
  },
  computed: {
      isPassword1() {
          return this.inputType1 === 'password';
      },
      isPassword2() {
          return this.inputType2 === 'password';
      },
  },
  methods: {
      togglePassword1() {
          this.inputType1 = this.isPassword1 ? 'text' : 'password';
      },
      togglePassword2() {
          this.inputType2 = this.isPassword2 ? 'text' : 'password';
      },
  },

  setup() {
    const register_form = ref({});

    const store = useStore();

    const register = () => {
      store.dispatch("login/register", register_form.value);
    };
    return {
      register_form,
      register,
    };
  },
};
</script>

<style>
.border-login {
  border-radius: 50px;
}

#button-color {
  background: rgb(189, 21, 61);
  background: linear-gradient(
    90deg,
    rgba(189, 21, 61, 1) 35%,
    rgba(240, 148, 69, 1) 100%
  );
}

.input {
  width: 95%;
}

.olho {
  padding-left: 4px;
}
</style>