<script>
import WhoFollow from "./WhoFollow.vue";
import SearchTrend from "./SearchTrend";

export default {
  name: "SideBarRight",
  components: {
    SearchTrend,
    WhoFollow,
  },
};
</script>

<template>
  <div id="sidebar-right">
    <SearchTrend />
    <WhoFollow />
  </div>
</template>

<style scoped lang="scss">
#sidebar-right {
  max-width: 350px;
}
</style>