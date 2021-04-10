<script>
export default {
  name: "SideBarLeft",
};
</script>

<template>
  <div id="sidebar-left">
    <ul>
      <li>
        <router-link to="/" tag="a"
          ><img src="../../assets/img/TwitterLogo.svg" alt="logo"
        /></router-link>
      </li>
      <li>
        <router-link to="/home" tag="a">
          <svg
            viewBox="0 0 24 24"
            class="r-18jsvk2 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
          >
            <g>
              <path
                d="M22.46 7.57L12.357 2.115c-.223-.12-.49-.12-.713 0L1.543 7.57c-.364.197-.5.652-.303 1.017.135.25.394.393.66.393.12 0 .243-.03.356-.09l.815-.44L4.7 19.963c.214 1.215 1.308 2.062 2.658 2.062h9.282c1.352 0 2.445-.848 2.663-2.087l1.626-11.49.818.442c.364.193.82.06 1.017-.304.196-.363.06-.818-.304-1.016zm-4.638 12.133c-.107.606-.703.822-1.18.822H7.36c-.48 0-1.075-.216-1.178-.798L4.48 7.69 12 3.628l7.522 4.06-1.7 12.015z"
              ></path>
              <path
                d="M8.22 12.184c0 2.084 1.695 3.78 3.78 3.78s3.78-1.696 3.78-3.78-1.695-3.78-3.78-3.78-3.78 1.696-3.78 3.78zm6.06 0c0 1.258-1.022 2.28-2.28 2.28s-2.28-1.022-2.28-2.28 1.022-2.28 2.28-2.28 2.28 1.022 2.28 2.28z"
              ></path>
            </g>
          </svg>

          <h4>Home</h4>
        </router-link>
      </li>
      <li>
        <router-link to="/explore" tag="a">
          <svg
            viewBox="0 0 24 24"
            class="r-18jsvk2 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
          >
            <g>
              <path
                d="M21 7.337h-3.93l.372-4.272c.036-.412-.27-.775-.682-.812-.417-.03-.776.27-.812.683l-.383 4.4h-6.32l.37-4.27c.037-.413-.27-.776-.68-.813-.42-.03-.777.27-.813.683l-.382 4.4H3.782c-.414 0-.75.337-.75.75s.336.75.75.75H7.61l-.55 6.327H3c-.414 0-.75.336-.75.75s.336.75.75.75h3.93l-.372 4.272c-.036.412.27.775.682.812l.066.003c.385 0 .712-.295.746-.686l.383-4.4h6.32l-.37 4.27c-.036.413.27.776.682.813l.066.003c.385 0 .712-.295.746-.686l.382-4.4h3.957c.413 0 .75-.337.75-.75s-.337-.75-.75-.75H16.39l.55-6.327H21c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-6.115 7.826h-6.32l.55-6.326h6.32l-.55 6.326z"
              ></path>
            </g>
          </svg>

          <h4>Explore</h4>
        </router-link>
      </li>
      <li>
        <router-link to="/notifications" tag="a">
          <svg
            viewBox="0 0 24 24"
            class="r-18jsvk2 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
          >
            <g>
              <path
                d="M21.697 16.468c-.02-.016-2.14-1.64-2.103-6.03.02-2.532-.812-4.782-2.347-6.335C15.872 2.71 14.01 1.94 12.005 1.93h-.013c-2.004.01-3.866.78-5.242 2.174-1.534 1.553-2.368 3.802-2.346 6.334.037 4.33-2.02 5.967-2.102 6.03-.26.193-.366.53-.265.838.102.308.39.515.712.515h4.92c.102 2.31 1.997 4.16 4.33 4.16s4.226-1.85 4.327-4.16h4.922c.322 0 .61-.206.71-.514.103-.307-.003-.645-.263-.838zM12 20.478c-1.505 0-2.73-1.177-2.828-2.658h5.656c-.1 1.48-1.323 2.66-2.828 2.66zM4.38 16.32c.74-1.132 1.548-3.028 1.524-5.896-.018-2.16.644-3.982 1.913-5.267C8.91 4.05 10.397 3.437 12 3.43c1.603.008 3.087.62 4.18 1.728 1.27 1.285 1.933 3.106 1.915 5.267-.024 2.868.785 4.765 1.525 5.896H4.38z"
              ></path>
            </g>
          </svg>

          <h4>Notifications</h4>
        </router-link>
      </li>
      <li>
        <router-link to="/messages" tag="a">
          <svg
            viewBox="0 0 24 24"
            class="r-18jsvk2 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
          >
            <g>
              <path
                d="M19.25 3.018H4.75C3.233 3.018 2 4.252 2 5.77v12.495c0 1.518 1.233 2.753 2.75 2.753h14.5c1.517 0 2.75-1.235 2.75-2.753V5.77c0-1.518-1.233-2.752-2.75-2.752zm-14.5 1.5h14.5c.69 0 1.25.56 1.25 1.25v.714l-8.05 5.367c-.273.18-.626.182-.9-.002L3.5 6.482v-.714c0-.69.56-1.25 1.25-1.25zm14.5 14.998H4.75c-.69 0-1.25-.56-1.25-1.25V8.24l7.24 4.83c.383.256.822.384 1.26.384.44 0 .877-.128 1.26-.383l7.24-4.83v10.022c0 .69-.56 1.25-1.25 1.25z"
              ></path>
            </g>
          </svg>

          <h4>Messages</h4>
        </router-link>
      </li>
      <li>
        <router-link to="/bookmarks" tag="a">
          <svg
            viewBox="0 0 24 24"
            class="r-18jsvk2 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
          >
            <g>
              <path
                d="M19.9 23.5c-.157 0-.312-.05-.442-.144L12 17.928l-7.458 5.43c-.228.164-.53.19-.782.06-.25-.127-.41-.385-.41-.667V5.6c0-1.24 1.01-2.25 2.25-2.25h12.798c1.24 0 2.25 1.01 2.25 2.25v17.15c0 .282-.158.54-.41.668-.106.055-.223.082-.34.082zM12 16.25c.155 0 .31.048.44.144l6.71 4.883V5.6c0-.412-.337-.75-.75-.75H5.6c-.413 0-.75.338-.75.75v15.677l6.71-4.883c.13-.096.285-.144.44-.144z"
              ></path>
            </g>
          </svg>

          <h4>Bookmarks</h4>
        </router-link>
      </li>
      <li>
        <router-link to="/lists" tag="a">
          <svg
            viewBox="0 0 24 24"
            class="r-18jsvk2 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
          >
            <g>
              <path
                d="M19.75 22H4.25C3.01 22 2 20.99 2 19.75V4.25C2 3.01 3.01 2 4.25 2h15.5C20.99 2 22 3.01 22 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM4.25 3.5c-.414 0-.75.337-.75.75v15.5c0 .413.336.75.75.75h15.5c.414 0 .75-.337.75-.75V4.25c0-.413-.336-.75-.75-.75H4.25z"
              ></path>
              <path
                d="M17 8.64H7c-.414 0-.75-.337-.75-.75s.336-.75.75-.75h10c.414 0 .75.335.75.75s-.336.75-.75.75zm0 4.11H7c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h10c.414 0 .75.336.75.75s-.336.75-.75.75zm-5 4.11H7c-.414 0-.75-.335-.75-.75s.336-.75.75-.75h5c.414 0 .75.337.75.75s-.336.75-.75.75z"
              ></path>
            </g>
          </svg>

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
          <svg
            viewBox="0 0 24 24"
            class="r-18jsvk2 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
          >
            <g>
              <circle cx="17" cy="12" r="1.5"></circle>
              <circle cx="12" cy="12" r="1.5"></circle>
              <circle cx="7" cy="12" r="1.5"></circle>
              <path
                d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"
              ></path>
            </g>
          </svg>

          <h4>More</h4>
        </router-link>
      </li>
      <li>
        <button>Tweet</button>
        <svg viewBox="0 0 24 24" class="hidden">
          <g>
            <path
              d="M8.8 7.2H5.6V3.9c0-.4-.3-.8-.8-.8s-.7.4-.7.8v3.3H.8c-.4 0-.8.3-.8.8s.3.8.8.8h3.3v3.3c0 .4.3.8.8.8s.8-.3.8-.8V8.7H9c.4 0 .8-.3.8-.8s-.5-.7-1-.7zm15-4.9v-.1h-.1c-.1 0-9.2 1.2-14.4 11.7-3.8 7.6-3.6 9.9-3.3 9.9.3.1 3.4-6.5 6.7-9.2 5.2-1.1 6.6-3.6 6.6-3.6s-1.5.2-2.1.2c-.8 0-1.4-.2-1.7-.3 1.3-1.2 2.4-1.5 3.5-1.7.9-.2 1.8-.4 3-1.2 2.2-1.6 1.9-5.5 1.8-5.7z"
            ></path>
          </g>
        </svg>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
#sidebar-left {
  top: 0;
  left: 0;
  display: flex;
  max-width: 251px;
  ul {
    align-content: center;
    padding: auto;
    margin-right: 3rem;

    li {
      &:nth-child(1) {
        margin-bottom: 1rem;
      }
      // margin: 20px;
      margin-top: 12px;
      a {
        transition: background-color 0.5s;
        display: inline-flex;
        align-items: center;
        padding: 0.2rem 0.5rem;
        // justify-content: flex-start;
        border-radius: 100px;
        svg {
          transition: fill 0.5s;
          width: 26px;
          margin-right: 20px;
        }
        h4 {
          transition: color 0.5s;
          font-weight: 700;
          font-size: 20px;
          line-height: 22.27px;
          color: #333333;
          padding: 0.5rem;
        }
      }
      a:hover {
        background-color: rgba(#1da1f2, 0.08);
        svg {
          fill: #1da1f2;
        }

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
        width: 232px;
        height: 48px;
        padding: 16px 69px;
        border-radius: 100px;
        font-weight: 700;
        font-size: 15px;
        line-height: 17.58px;
        color: #fff;
        background-color: #1da1f2;
        transition: 1s color, 1s background-color;
        svg {
          display: none;
        }
      }
      button:hover {
        color: #1da1f2;
        background-color: #fff;
        border: 1px solid #1da1f2;
      }
      button:active {
        outline: none;
        border: none;
      }
      button:focus {
        outline: 0;
      }

      .hidden {
        display: none;
      }
    }
  }
}

@media (max-width: 1264px) {
  html {
    font-size: 14px;
  }
  #sidebar-left {
    width: 88px;
    ul {
      margin-left: auto;
      margin-right: auto;
      li {
        a {
          // border-radius: 100px;
          h4 {
            display: none;
          }
          svg {
            margin-left: auto;
            margin-right: auto;
            margin-left: 0.4rem;
            margin-right: 0.4rem;
          }
        }
        button {
          display: none;
        }
        .hidden {
          display: inline;
          transition: fill 0.5s;
          width: 26px;
          fill: #fff;
          background-color: #1da1f2;
          margin-right: 8px;
          width: 3rem;
          padding: 8px;
          border-radius: 100px;
        }
      }
    }
  }
}
</style>