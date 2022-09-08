<template>
  <div class="p-3 flex flex-column flex-auto">
    <div
      class="
        border-2 border-dashed
        surface-border
        border-round
        surface-section
        flex-auto
        "
    >
      <router-view /> 
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentCMP",
};
</script>

<style>
</style>