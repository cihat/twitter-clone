<script>
import SideBarLeft from "./components/SideBarLeft/SideBarLeft";
import SideBarRight from "./components/SideBarRight/SideBarRight";

export default {
  name: "App",
  components: {
    SideBarLeft,
    SideBarRight,
  },
};
</script>

<template>
  <div id="app">
    <SideBarLeft />
    <router-view id="router-view" />
    <SideBarRight />
  </div>
</template>

<style lang="scss">
@import "./assets/css/reset.css";
@import "./assets/scss/responsive.scss";
@import "./assets/scss/global-variables.scss";
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap");

#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  margin: auto;
}
</style>
