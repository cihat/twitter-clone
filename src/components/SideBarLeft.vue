<script>
export default {};
</script>

<template>
  <div id="sidebar-left">
    <ul>
      <li>
        <router-link to="/" tag="a"
          ><img src="../assets/img/TwitterLogo.svg" alt="logo"
        /></router-link>
      </li>
      <li>
        <router-link to="/home" tag="a">
          <img src="../assets/img/Home.svg" alt="home" />
          <h4>Home</h4>
        </router-link>
      </li>
      <li>
        <router-link to="/explore" tag="a">
          <img src="../assets/img/explore.svg" alt="explore" />
          <h4>Explore</h4>
        </router-link>
      </li>
      <li>
        <router-link to="/notifitions" tag="a">
          <img src="../assets/img/notifications.svg" alt="notifications" />
          <h4>Notification</h4>
        </router-link>
      </li>
      <li>
        <router-link to="/messages" tag="a">
          <img src="../assets/img/messages.svg" alt="messages" />
          <h4>Messages</h4>
        </router-link>
      </li>
      <li>
        <router-link to="/bookmarks" tag="a">
          <img src="../assets/img/bookmarks.svg" alt="bookmarks" />
          <h4>Bookmarks</h4>
        </router-link>
      </li>
      <li>
        <router-link to="/lists" tag="a">
          <img src="../assets/img/lists.svg" alt="lists" />
          <h4>Lists</h4>
        </router-link>
      </li>
      <li>
        <router-link to="/profile" tag="a">
          <svg
            viewBox="0 0 24 24"
            class="r-1fmj7o5 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
          >
            <g>
              <path
                d="M12 11.816c1.355 0 2.872-.15 3.84-1.256.814-.93 1.078-2.368.806-4.392-.38-2.825-2.117-4.512-4.646-4.512S7.734 3.343 7.354 6.17c-.272 2.022-.008 3.46.806 4.39.968 1.107 2.485 1.256 3.84 1.256zM8.84 6.368c.162-1.2.787-3.212 3.16-3.212s2.998 2.013 3.16 3.212c.207 1.55.057 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.255-.223-2.71-.743c-.507-.578-.657-1.656-.45-3.205zm11.44 12.868c-.877-3.526-4.282-5.99-8.28-5.99s-7.403 2.464-8.28 5.99c-.172.692-.028 1.4.395 1.94.408.52 1.04.82 1.733.82h12.304c.693 0 1.325-.3 1.733-.82.424-.54.567-1.247.394-1.94zm-1.576 1.016c-.126.16-.316.246-.552.246H5.848c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.114 1.994 6.824 4.85c.06.242.017.48-.12.654z"
              ></path>
            </g>
          </svg>
          <h4>Profile</h4>
        </router-link>
      </li>
      <li>
        <router-link to="/More" tag="a">
          <img src="../assets/img/more.svg" alt="more" />
          <h4>More</h4>
        </router-link>
      </li>
      <li>
        <button>Tweet</button>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
#sidebar-left {
  // position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 285px;
  height: 1922px;
  box-shadow: inset -1px 0px 0px rgba(0, 0, 0, 0.08),
    inset 1px 0px 0px rgba(0, 0, 0, 0.08);
  ul {
    align-content: center;
    padding: auto;
    margin-top: 32px;
    padding-left: 80px;

    li {
      &:nth-child(1) {
        margin-bottom: 32px;
      }
      margin: 20px;
      a {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        svg {
          width: 21px;
          margin-right: 20px;
        }
        img {
          margin-right: 20px;
        }
        h4 {
          font-weight: 700;
          font-size: 19px;
          line-height: 22.27px;
          color: #333333;
        }
      }
      a:hover {
        h4 {
          color: #1da1f2;
        }
      }
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        width: 42px;
        padding: 16px 69px;
        border-radius: 100px;
        height: 18px;
        font-weight: 700;
        font-size: 15px;
        line-height: 17.58px;
        color: #fff;
        background-color: #1da1f2;
      }
    }
  }
}
</style>