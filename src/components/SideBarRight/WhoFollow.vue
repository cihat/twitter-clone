<script>
export default {
  name: "WhoFollow",
};
</script>

<template>
  <div id="who-follow">
    <h1>Who to follow</h1>
    <div class="people">
      <div class="container">
        <img src="../../assets/profile-pics/ProfilePic.png" alt="" />
        <div class="name">
          <h3>McFly</h3>
          <h4>@levraimcfly</h4>
        </div>
      </div>
      <button>Follow</button>
    </div>
    <div class="people">
      <div class="container">
        <img src="../../assets/profile-pics/ProfilePic.png" alt="" />
        <div class="name">
          <h3>McFly</h3>
          <h4>@levraimcfly</h4>
        </div>
      </div>
      <button>Follow</button>
    </div>
    <div class="people">
      <div class="container">
        <img src="../../assets/profile-pics/ProfilePic.png" alt="" />
        <div class="name">
          <h3>McFly</h3>
          <h4>@levraimcfly</h4>
        </div>
      </div>
      <button>Follow</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
#who-follow {
  max-width: 350px;
  margin-top: 0.2rem;
  margin-bottom: 24px;
  margin-left: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 14px;
  padding-left: 19px;
  background: #f6f8fa;
  border-radius: 12px;

  h1 {
    font-weight: 900;
    font-size: 19px;
    line-height: 22.27px;
    color: #000;
    margin-bottom: 1rem;
  }

  .people {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1rem;
    padding-top: 1rem;
    cursor: pointer;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);

    .container {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      img {
        margin-right: 8px;
      }
      div.name {
        h3 {
          font-weight: 700;
          font-size: 17px;
          line-height: 17.58px;
        }

        h4 {
          color: #828282;
          font-size: 14px;
          line-height: 16px;
        }
      }
    }

    button {
      color: #1da1f2;
      background-color: inherit;
      line-height: 18px;
      font-size: 15px;
      font-weight: 700;
      border: 1px solid #1da1f2;
      box-sizing: border-box;
      border-radius: 59px;
      width: 77px;
      height: 30px;
      margin-right: 1rem;
    }
    button:hover {
      border: 1px solid #fff;
      background-color: #1da1f2;
      color: #fff;
      transition: 1s color;
    }
  }
}
</style>