<script>
import SideBarLeft from "./components/SideBarLeft";
import SideBarRight from "./components/SideBarRight";

export default {
  name: "App",
  components: {
    SideBarLeft,
    SideBarRight,
  },
  data() {
    return {
      isVideoMode: false,
    };
  },

};
</script>

<template>
  <div id="app">
    <SideBarLeft />
    <router-view id="router-view"/>
    <SideBarRight />
  </div>
</template>

<style lang="scss">
@import "./assets/css/reset.css";
@import "./assets/scss/responsive.scss";
@import "./assets/scss/global-variables.scss";
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap");
@import './assets/theme/colors.scss';

body {
  background-color: $color-bg;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  // grid-template-columns: 275px 598px 350px;
  // display: grid;
  // grid-gap: 10px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
}


#router-view {
  flex: auto;
  max-width: 600px;
  // flex-grow: 40;
}
</style>
