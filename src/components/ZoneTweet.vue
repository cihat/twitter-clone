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
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);

  padding-left: 31px;
  padding-top: 12px;
  padding-bottom: 22px;

  display: flex;
  align-items: flex-start;
  img {
    margin-right: 1rem;
  }
  .input-context {
    margin-right: 2rem;
    display: flex;
    flex-direction: column;
    flex: 1;

    input {
      color: #828282;
      font-weight: 400;
      line-height: 22.27px;
      font-size: 19px;
      padding: 1rem 1rem 40px 1rem;
    }

    .icons {
      display: flex;
      justify-content: space-between;
      align-items: center;
      /* .left-icon {
      } */

      .right-icon {
        button {
          background-color: #1da1f2;
          width: 98px;
          height: 42px;
          border-radius: 100px;
          font-weight: 700;
          font-size: 15px;
          line-height: 17.58px;
          cursor: pointer;
          color: #fff;
        }
      }
    }
  }
}
</style>