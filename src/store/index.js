import { createStore } from "vuex";
import LoginModule from './modules/login-module'

export default createStore({  
    modules: {    
      login: LoginModule
    },
  });
  