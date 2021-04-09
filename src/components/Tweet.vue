<script>
export default {
  name: "tweet",
};
</script>

<template>
  <div id="tweet">
    <img src="../assets/img/AvatarProfilePic.png" alt="" class="avatar-image" />
    <div class="tweet-content">
      <div class="user-info">
        <p class="name">Annie</p>
        <p class="username">@annie</p>
        <span>•</span>
        <p class="date">14s</p>
      </div>
      <div class="tweet-body">
        <p>
          This is a tweet. It can be long, or short. Depends on what you have to
          say. It can have some hashtags too. #likethis This is a tweet. It can
          be long, or short. Depends on what you have to say. It can have some
          hashtags too. <span class="hashtag">#likethis</span>
        </p>
      </div>
      <div class="buttons">
        <img src="../assets/tweet-icons/first.svg" alt="" />
        <img src="../assets/tweet-icons/second.svg" alt="" />
        <img src="../assets/tweet-icons/third.svg" alt="" />
        <img src="../assets/tweet-icons/fourth.svg" alt="" />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
#tweet {
  display: flex;
  align-items: flex-start;
  padding: 1rem 31px 11px;
  cursor: pointer;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);

  img {
    margin-right: 1rem;
  }
  .user-info {
    display: flex;
    align-items: flex-start;
    margin-bottom: 11px;
    * {
      margin-right: 4px;
      line-height: 17.58px;
      font-size: 15px;
      color: #828282;
    }
    .name {
      font-weight: 700;
      color: #000;
    }
    span {
      color: #828282;
    }
  }

  .tweet-body {
    margin-bottom: 11px;
    p {
      font-size: 15px;
      line-height: 22px;
      color: #333333;
    }
    .hashtag {
      color: #1da1f2;
    }
    .hashtag:hover {
      text-decoration: underline;
    }
  }

  .buttons {
    display: flex;
    justify-content: space-around;
    img {
      cursor: pointer;
    }
  }
}
</style>