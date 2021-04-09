<script>
import SideBarLeft from "./components/SideBarLeft";
import SideBarRight from "./components/SideBarRight";
import WhoFollow from "./components/WhoFollow";

export default {
  name: "App",
  components: {
    SideBarLeft,
    SideBarRight,
    WhoFollow,
  },
};
</script>

<template>
  <div id="app">
    <SideBarLeft />
    <router-view id="router-view" />
    <div class="right">
      <SideBarRight />
      <WhoFollow />
    </div>
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
  #router-view {
    width: 692px;
  }
}
</style>
