<template>
  <div class="min-h-screen flex relative lg:static">
    <!-- Sidebar Menu -->
    <div
      id="sidebar"
      class="
        bg-bluegray-50
        h-screen
        hidden
        lg:block
        flex-shrink-0
        absolute
        lg:static
        left-0
        top-0
        z-1
        select-none
      "
      style="width: 210px"
    >
      <div class="flex flex-column h-full">
        <!-- Logo Menu -->
        <div
          class="
            flex
            justify-content-center
            align-items-center
            p-4
            flex-shrink-0
            actflow-primary
          "
          style="height: 60px"
        >
          <img src="images/blocks/logos/logo_h.svg" alt="Image" height="40" />
        </div>
        <!-- Items Menu -->
        <div class="overflow-y-auto">
          <ul class="list-none p-1 m-0">
            <!-- PAINEL -->
            <li>
              <div
                v-ripple
                class="
                  p-3
                  flex
                  align-items-center
                  justify-content-between
                  text-500
                  cursor-pointer
                  p-ripple
                "
                v-styleclass="{
                  selector: '@next',
                  enterClass: 'hidden',
                  enterActiveClass: 'slidedown',
                  leaveToClass: 'hidden',
                  leaveActiveClass: 'slideup',
                }"
              >
                <span class="font-medium">PAINEL</span>
                <i class="pi pi-chevron-down"></i>
              </div>
              <ul class="list-none p-0 m-0 overflow-hidden">
                <MenuItemCMP
                  icon="pi-chart-line"
                  link="/dashboard"
                  name="Painel de Controle"
                />
                <MenuItemCMP
                  icon="pi-cog"
                  link="/dispatcher"
                  name="Automações"
                />
                <MenuItemCMP
                  icon="pi-shopping-bag"
                  link="/menssagem"
                  name="Serviços"
                />
              </ul>
            </li>
            <!-- FIM PAINEL -->
            <!-- ADMINISTRAÇÃO -->
            <li>
              <div
                v-ripple
                class="
                  p-3
                  flex
                  align-items-center
                  justify-content-between
                  text-600
                  cursor-pointer
                  p-ripple
                "
                v-styleclass="{
                  selector: '@next',
                  enterClass: 'hidden',
                  enterActiveClass: 'slidedown',
                  leaveToClass: 'hidden',
                  leaveActiveClass: 'slideup',
                }"
              >
                <span class="font-medium">ADMINISTRAÇÃO</span>
                <i class="pi pi-chevron-down"></i>
              </div>
              <ul class="list-none p-0 m-0 overflow-hidden">
                <MenuItemCMP
                  icon="pi-building"
                  link="/escritorio"
                  name="Escritório"
                />
              </ul>
            </li>
            <!-- FIM ADMINISTRAÇÃO -->
          </ul>
        </div>
      </div>
    </div>
    <!-- TopBar -->
    <div class="min-h-screen flex flex-column relative flex-auto">
      <div
        class="
          flex
          justify-content-between
          align-items-center
          px-5
          shadow-none
          relative
          lg:static
          border-bottom-5
          surface-border
          actflow-primary
        "
        style="height: 60px"
      >
        <div class="flex">
          <a
            v-ripple
            class="cursor-pointer block lg:hidden text-700 mr-3 mt-1 p-ripple"
            v-styleclass="{
              selector: '#sidebar',
              enterClass: 'hidden',
              enterActiveClass: 'fadeinleft',
              leaveToClass: 'hidden',
              leaveActiveClass: 'fadeoutleft',
              hideOnOutsideClick: true,
            }"
          >
            <i class="pi pi-bars text-4xl"></i>
          </a>
          <span class="p-input-icon-left">
            <i class="pi pi-search"></i>
            <InputText
              type="text"
              class="border-none w-10rem sm:w-20rem"
              placeholder="Buscar"
              id="search"
            />
          </span>
        </div>
        <a
          v-ripple
          class="cursor-pointer block lg:hidden text-700 p-ripple"
          v-styleclass="{
            selector: '@next',
            enterClass: 'hidden',
            enterActiveClass: 'fadein',
            leaveToClass: 'hidden',
            leaveActiveClass: 'fadeout',
            hideOnOutsideClick: true,
          }"
        >
          <i class="pi pi-ellipsis-v text-2xl"></i>
        </a>
        <ul
          class="
            list-none
            p-0
            m-0
            hidden
            lg:flex lg:align-items-center
            select-none
            lg:flex-row
            border-1
            lg:border-none
            surface-border
            right-0
            top-100
            z-1
            shadow-none
            lg:shadow-none
            absolute
            lg:static
            actflow-primary
          "
        >
          <ToolbarItemCMP
            link="/contabilidadelistar"
            name="Settings"
            icon="pi-sliders-h"
          />

           <ToolbarItemCMP
            link="/contabilidadelistar"
            name="SignOut"
            icon="pi-sign-out"
            @click="$store.dispatch('login/logout')"
          />         
        </ul>
      </div>
      <!-- ContentPage -->
      <ContentCMP />
    </div>
  </div>
</template>

<script>

import { onBeforeMount } from "vue";
import { useStore } from "vuex";
import ContentCMP from "@/components/home/ContentCMP.vue";
import ToolbarItemCMP from "@/components/home/ToolbarItemCMP.vue";
import MenuItemCMP from "@/components/home/MenuItemCMP.vue";

export default {
  name: "HomePage",
  components: {
    MenuItemCMP,
    ContentCMP,
    ToolbarItemCMP
  },
  data() {
    return {
      visibleLeft: false,
    };
  },

  setup() {
    const store = useStore();

    onBeforeMount(() => {
      store.dispatch("login/fetchUser");
    });
  },
};
</script>

<style>
</style>