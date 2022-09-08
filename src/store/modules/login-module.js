import router from "@/router";
import { showError, showSuccess } from "@/components/ToastCMP";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
} from "@firebase/auth";

const store = {
  namespaced: true,
  state: {
    user: null,
    other: "OTHER",
  },
  getters: {
    user: (state) => state.user,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },

    CLEAR_USER(state) {
      state.user = null;
    },

    yes_notPage(state, notis) {
      state.notis = notis;
      notis = true;
    },

    not_notPage(state) {
      state.notis = false;
    },
  },
  actions: {
    async signIn({ commit }, details) {
      const { email, password } = details;
      const auth = getAuth();

      try {
        await signInWithEmailAndPassword(auth, email, password);
        showSuccess("Sucesso", "Login Efetuado com Sucesso");
        commit("SET_USER", auth.currentUser);
        localStorage.setItem("user", JSON.stringify(auth.currentUser));
      } catch (error) {
        switch (error.code) {
          case "auth/email-already-in-use":
            showError("Autenticação", "E-mail já está em Uso");
            break;
          case "auth/invalid-email":
            showError("Autenticação", "Email está Inválido");
            break;
          case "auth/operation-not-allowed":
            showError("Autenticação", "Operação não Permitida");
            break;
          case "auth/weak-password":
            showError("Autenticação", "Sua senha está Fraca");
            break;
          case "auth/user-not-found":
            showError("Autenticação", "Usuário ou Email não Cadastrado");
            break;
          case "auth/wrong-password":
            showError("Autenticação", "Usuário ou Senha estão incorreto");
            break;
          case "auth/internal-error":
            showError(
              "Autenticação",
              "Digite um email válido Ex:exemplo@exemplo.com"
            );
            break;
          default:
            showError("Autenticação", "Dados inválidos");
        }
        return;
      }

      router.push("/");
    },

    async register({ commit }, details) {
      const { email, password, confirme } = details;

      const auth = getAuth();
      if (password !== confirme) {
        showError("Autenticação", "Senhas digitadas não conferem");
      } else {
        try {
          await createUserWithEmailAndPassword(auth, email, password);
           showSuccess("Sucesso", "Registro Efetuado com Sucesso");
        } catch (error) {
          switch (error.code) {
            case "auth/email-already-in-use":
              showError("Autenticação", "E-mail já está em Uso");
              break;
            case "auth/invalid-email":
              showError("Autenticação", "Email está Inválido");
              break;
            case "auth/operation-not-allowed":
              showError("Autenticação", "Operação não Permitida");
              break;
            case "auth/weak-password":
              showError(
                "Autenticação",
                "Sua senha está Fraca ou Usuário ou Email não Cadastrado"
              );
              break;
            case "auth/user-not-found":
              showError("Autenticação", "Usuário ou Email não Cadastrado");
              break;
            case "auth/wrong-password":
              showError("Autenticação", "Usuário ou Senha estão incorreto");
              break;
            case "auth/internal-error":
              showError(
                "Autenticação",
                "Digite um email válido Ex:exemplo@exemplo.com"
              );
              break;
            default:
              showError("Autenticação", "Ops!!! Algo está errado");
          }
          return;
        }
        commit("SET_USER", auth.currentUser);

        router.push("/");
      }
    },

    async logout({ commit }) {
      const auth = getAuth();
      signOut(auth);
      commit("CLEAR_USER");
      localStorage.removeItem("user");
      router.replace("login");
    },

    fetchUser({ commit }) {
      const auth = getAuth();
      auth.onAuthStateChanged(async (user) => {
        if (user === null) {
          commit("CLEAR_USER");
        } else {
          commit("SET_USER", user);

          if (router.isReady() && router.currentRoute.value.path === "login") {
            router.replace("home");
          }
        }
      });
    },
  },
};

export default store;
