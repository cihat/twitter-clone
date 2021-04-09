<script>
import WhoFollow from "./WhoFollow.vue";
import SearchTrend from "./SearchTrend";

export default {
  name: "SideBarRight",
  data() {
    return {
      display: true,
    };
  },
  components: {
    SearchTrend,
    WhoFollow,
  },
  methods: {
    onResize() {
      if (window.innerWidth < 699) {
        this.display = false;
      } else {
        this.display = true;
      }
    },
  },
  created() {
    window.addEventListener("resize", this.onResize);
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
};
</script>

<template>
  <div id="sidebar-right">
    <SearchTrend id="search-trend" />
    <WhoFollow id="who-follow" />
  </div>
</template>

<style scoped lang="scss">
#sidebar-right {
  min-width: 350px;
}
</style>