<script>
export default {
  name: "ZoneTweet",
};
</script>

<template >
  <div id="zone-tweet">
    <img src="../assets/img/AvatarProfilePic.png" alt="" class="avatar-image" />
    <div class="input-context">
      <input type="text" placeholder="What's happening" />
      <div class="icons">
        <div class="left-icon">
          <img src="../assets/img/Image.svg" alt="" />
          <img src="../assets/img/Gif.svg" alt="" />
          <img src="../assets/img/Stats.svg" alt="" />
          <img src="../assets/img/Smiley.svg" alt="" />
        </div>
        <div class="right-icon">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <button>Tweet</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#zone-tweet {
  display: flex;
  img {
    margin-right: 1rem;
  }
  .input-context {
    display: flex;
    flex-direction: column;

    .icons {
      display: flex;
    }
  }
}
</style>