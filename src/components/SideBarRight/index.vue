<script>
import WhoFollow from '@/components/SideBarRight/SideBarRightWhoFollow.vue'
import SearchTrend from '@/components/SideBarRight/SideBarRightTrend'

export default {
  name: 'SideBarRight',
  data() {
    return {
      display: true
    }
  },
  components: {
    SearchTrend,
    WhoFollow
  }
}
</script>

<template>
  <div id="sidebar-right" class="dneme">
    <search-trend id="search-trend" />
    <who-follow id="who-follow" />
  </div>
</template>

<style scoped lang="scss">
#sidebar-right {
  display: block;
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