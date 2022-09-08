
/* eslint-disable vue/multi-word-component-names */
import { createApp } from "vue";
import router from "./router";
import store from './store';
//import { Plugin } from './plugins/axios'

import "primeflex/primeflex.css";
import "primevue/resources/themes/tailwind-light/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css";
import "eva-icons/style/eva-icons.css";
import "css.gg/icons/all.css"
import "./assets/css/actflow.css"

import App from "./App.vue";
import PrimeVue from "primevue/config";
import ToastService from 'primevue/toastservice'; 

//Componentes PrimeVue
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import StyleClass from "primevue/styleclass";
import Button from "primevue/button";
import Checkbox from "primevue/checkbox";
import Ripple from "primevue/ripple";
import BadgeDirective from "primevue/badgedirective";
import TabMenu from 'primevue/tabmenu';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Sidebar from 'primevue/sidebar';
import Password from 'primevue/password';
import InputMask from 'primevue/inputmask';
import RadioButton from 'primevue/radiobutton';
import Message from 'primevue/message';
import InlineMessage from 'primevue/inlinemessage';
import Toast from 'primevue/toast';
import Dropdown from 'primevue/dropdown';

//Configuração do FireBase
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCLWm6jPI0epBGhJd2yrQx4DaUCxh0zioQ",  
    authDomain: "actflow-teste.firebaseapp.com",  
    projectId: "actflow-teste",  
    storageBucket: "actflow-teste.appspot.com",  
    messagingSenderId: "767832471420",  
    appId: "1:767832471420:web:93fec4c95e1975a33396f9",  
    measurementId: "G-HMQCYXRDZ3"  
  };

initializeApp(firebaseConfig)

// Utilização no app
export const app = createApp(App)

app.use(PrimeVue, { ripple: true });

app.use(router);
app.use(store);
app.use(ToastService);
//app.use(Plugin);

app.component("Dialog", Dialog);
app.component("InputText", InputText);
app.component("Button", Button);
app.component("Checkbox", Checkbox);
app.component("TabMenu", TabMenu);
app.component("TabPanel", TabPanel);
app.component("TabView", TabView);
app.component("Sidebar", Sidebar);
app.component("Password", Password);
app.component("InputMask", InputMask);
app.component("RadioButton", RadioButton);
app.component("Message", Message);
app.component("InlineMessage", InlineMessage);
app.component("Toast", Toast);
app.component("Dropdown", Dropdown);

app.directive("styleclass", StyleClass);
app.directive("ripple", Ripple);
app.directive("badge", BadgeDirective);

app.mount("#app");
