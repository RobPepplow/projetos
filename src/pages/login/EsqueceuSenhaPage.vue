<template>
<main class="login actflow-bg-login">
<div class="logo-destaque">
      <img
        src="../../assets/logo_actflow_gray.png"
        alt="Image"
        height="400"
        class="w-full mb-1"
      />
    </div>
  <div
    class=" 
      w-full      
      px-2
      py-4
      md:px-6    
      lg:px-8
      flex
      align-items-center
      justify-content-center
    "
    id="layout"
  >
    <div   class="
              surface-card
              p-4
              shadow-2
              border-login
              w-full
              lg:w-6
              align-items-center
              justify-content-center
            ">

      <div class="text-center mb-5">
        <img
          src="../../assets/logo_actflow.png"
          alt="Image"
          height="150  "
          class="mb-3"
        />
        <h2>Digite seu Email Para Redefinir a sua Senha</h2>
        
        <br>       
        <span class="text-600 font-medium line-height-3">          
          <router-link to="/login" class="voltar"> <h5>"Click aqui para voltar ao Login"</h5> </router-link>          
        </span>
               
      </div>

      <div>
        <label for="email1" class="block text-900 font-medium mb-2"
          >Email</label
        >
       
        <InputText
          id="email1"
          type="text"
          class="w-full mb-3"
          placeholder="Digite Seu Email"
          autocomplete="off"
          v-model="email"
        />
        <br>
       
        <br>

        <Button
          label="Enviar Email"
          icon="pi pi-envelope"
          class="btn w-full border-red-900"
          id="button-color"
          @click="EnviarRedefinir"
        ></Button>
        <br>
        <br>
        <br>
        <br>
      </div>
    </div>
  </div>
</main>
</template>

<script>
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { showSuccess, showError } from "@/components/ToastCMP";

export default {
  name: "EsqueceuSenha",

  data() {
    return {
      email: "",
    };
  },

  methods: {
    EnviarRedefinir: async function () {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, this.email)
        .then(() => {
          showSuccess("Sucesso", "Email Enviado com Sucesso");
          this.$router.replace("login");
        })
        .catch((error) => {
          if (error.code == "auth/missing-email") {
            showError("Ops!!!", "Por favor digite seu Email");
          } else if (error.code == "auth/user-not-found") {
            showError(
              "Ops!!!",
              "Este Endereço de Email não existe ou não está Cadastrado"
            );
          } else if (error.code == "auth/invalid-email") {
            showError("Ops!!!", "Email está Inválido");
          } else {
            showError("Ops!!!", "Dados inválidos");
          }
        });
    },
  },
};
</script>

<style>
.border-login {
  border-radius: 50px;
  width: 100%;
}

#button-color {
  background: rgb(189, 21, 61);
  background: linear-gradient(
    90deg,
    rgba(189, 21, 61, 1) 35%,
    rgba(240, 148, 69, 1) 100%
  );
   
}



#login {
  width: 100%;
  height: 100%;
}
.voltar{
  font-size: 25px;
}

.voltar:hover {
  font-size: 25px;
  color: brown;
}

</style>





