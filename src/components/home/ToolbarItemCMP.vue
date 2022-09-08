<template>
  <li>
    <router-link v-bind:to="link" class="actflow-link-menu">
      <a
        v-ripple
        class="
          flex
          p-3
          lg:px-3 lg:py-2
          align-items-center          
          hover:bg-orange-100          
          font-medium
          border-round
          cursor-pointer
          transition-duration-150 transition-colors
          p-ripple
        "
      >
        <i
          :class="
            'pi ' + icon + ' text-base text-gray-100 lg:text-2xl mr-2 lg:mr-0 hover:text-red-900'
          "
        ></i>
        <span class="block lg:hidden font-medium">{{ name }}</span>
      </a>
    </router-link>
  </li>
</template>

<script>
export default {
  name: "ToolbarItemCMP",
  props: ["link", "icon", "name"],
};
</script>

<style>

</style>