<template>
  <Toast />
  <div id="app">   
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      visibleLeft: false,
    };
  },
};
</script>

<style>
body {
  margin: auto;
}

.logo-destaque {
  margin-top: -100px;
  margin-left: -50px;
  position: absolute; 
  opacity: 0.2; 
   
}

#app {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.actflow-bg-login {
  background: rgb(189, 21, 61);
  background: linear-gradient(
    90deg,
    rgba(189, 21, 61, 1) 13%,
    rgba(240, 148, 69, 1) 85%
  );
}

</style>