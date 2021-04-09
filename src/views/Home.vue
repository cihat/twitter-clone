<script>
import ZoneTweet from "../components/ZoneTweet";
import Tweet from "../components/Tweet";

export default {
  name: "Home",
  components: {
    ZoneTweet,
    Tweet,
  },
};
</script>

<template>
  <div id="home-page" class="home">
    <div class="title">
      <h3>Home</h3>
      <img src="../assets/img/starsicon.png" alt="" class="icon" />
    </div>
    <ZoneTweet />
    <Tweet />
    <Tweet />
    <Tweet />
    <Tweet />
    <Tweet />
  </div>
</template>

<style scoped lang="scss">
.home {
  border: 1px solid rgba(0, 0, 0, 0.08);

  .title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
    padding: 1rem;
    h3 {
      font-weight: 900;
      font-size: 23px;
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