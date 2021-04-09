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
};
</script>

<template>
  <div id="sidebar-right" class="dneme">
    <SearchTrend id="search-trend" />
    <WhoFollow id="who-follow" />
  </div>
</template>

<style scoped lang="scss">
#sidebar-right {
  max-width: 350px;
  @media (max-width: 758px) {
    html {
      font-size: 12px;
    }
    #sidebar-right {
      width: 0px;
      display: none !important;
      background-color: red;
    }
    #search-trend {
      display: none !important;
      width: 0px;
    }
    #who-follow {
      display: none !important;
      width: 0px;
    }
  }
}
</style>