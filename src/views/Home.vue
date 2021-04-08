<script>
import ZoneTweet from "../components/ZoneTweet";
export default {
  name: "Home",
  components: {
    ZoneTweet,
  },
};
</script>

<template>
  <div id="home">
    <div class="title">
      <h3>Home</h3>
      <img src="../assets/img/starsicon.png" alt="" class="icon" />
    </div>
    <ZoneTweet />
  </div>
</template>

<style scoped lang="scss">
#home {
  margin-top: 54px;
  margin-left: 32px;
  margin-right: 32px;
  margin-bottom: 10px;
  width: 692px;

  .title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
    h3 {
      font-weight: 900;
      font-size: 19px;
      line-height: 22.27px;
      color: #000;
      cursor: pointer;
    }
    img {
      cursor: pointer;
    }
  }
}
</style>