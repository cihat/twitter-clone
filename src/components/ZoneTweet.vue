<script>
export default {
  name: 'ZoneTweet',
  components: {}
}
</script>

<template >
  <div id="zone-tweet">
    <img src="https://100k-faces.glitch.me/random-image" class="avatar-image" />
    <div class="input-context">
      <input type="text" placeholder="What's happening" />
      <div class="icons">
        <div class="left-icon">
          <!-- <base-icon icon="image"></base-icon> -->
          <img src="../assets/img/Image.svg" alt="" />
          <img src="../assets/img/Gif.svg" alt="" />
          <img src="../assets/img/Stats.svg" alt="" />
          <img src="../assets/img/Smiley.svg" alt="" />
        </div>
        <div class="right-icon">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              opacity="0.3"
              cx="12"
              cy="12"
              r="11"
              stroke="#4F4F4F"
              stroke-width="2"
            />
          </svg>
          <span>|</span>
          <svg
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.1489 13.3232H18.2588V14.3623H14.1489V18.834H13.0264V14.3623H9V13.3232H13.0264V9H14.1489V13.3232Z"
              fill="#2F80ED"
            />
            <circle opacity="0.5" cx="13.5" cy="13.5" r="13" stroke="#2F80ED" />
          </svg>

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
  // width: 100%;
  // display: flex;
  width: 598px;

  padding-left: 1rem;
  padding-top: 8px;
  // padding-bottom: 22px;

  display: flex;
  align-items: flex-start;
  img {
    margin-right: 1rem;
  }
  img.avatar-image {
    margin-right: 1rem;
    border-radius: 50%;
    width: 48px;
    height: 48px;
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
    input:active {
      outline: none;
      border: none;
    }
    input:focus {
      outline: 0;
    }

    .icons {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 22px;
      .left-icon {
        display: flex;
      }

      .right-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        * {
          margin-right: 16px;
          cursor: pointer;
        }
        svg {
          width: 25px;
        }
        span {
          color: #4f4f4f;
        }
        button {
          margin-right: 0px;
          background-color: #1da1f2;
          width: 98px;
          height: 42px;
          border-radius: 100px;
          font-weight: 700;
          font-size: 15px;
          line-height: 17.58px;
          cursor: pointer;
          color: #fff;
          transition: 1s color, 1s background-color;
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
      }
    }
  }
}

@media (max-width: 758px) {
  #zone-tweet {
    width: 100%;
  }
}

@media (max-width: 476px) {
  #zone-tweet {
    display: none;
  }
}
</style>