<template>
  <li>
    <router-link class="actflow-link-menu" v-bind:to="link">
      <a
        v-ripple
        class="
          flex
          align-items-center
          cursor-pointer
          p-3
          hover:bg-red-100
          border-round
          text-gray-500
          hover:text-gray-800
          transition-duration-150 transition-colors
          p-ripple
        "
      >
        <i :class="' pi ' + ' mr-2 ' + icon"></i>
        <span class="font-medium">{{ name }}</span>
      </a>
    </router-link>
  </li>
</template>

<script>
export default {
  name: "MenuItemCMP",
  props: ["link", "icon", "name"],
};
</script>

<style>
</style>