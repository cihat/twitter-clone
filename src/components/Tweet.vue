<script>
const axios = require("axios");

export default {
  name: "tweet",
  data() {
    return {
      likeNumber: null,
      reTweetNumber: null,
      replyNumber: null,
      date: null,
      userData: {
        firstName: null,
        lastName: null,
        pictureUrl: null,
        userId: null,
      },
      tweetBody: {
        content: "",
        author: "",
      },
      isVideoMode: false,
    };
  },
  methods: {
    addLike() {
      this.likeNumber += 1;
    },
    async randomUser() {
      await axios
        .get("https://randomuser.me/api/")
        .then((response) => {
          // handle success
          const value = [...response.data.results][0];
          // console.log(value);
          this.userData.firstName = value.name.first;
          this.userData.lastName = value.name.last;
          this.userData.pictureUrl = value.picture.medium;
          this.userData.userId = value.id.name;
        })
        .catch((error) => {
          // handle error
          console.log(error);
        })
        .then(() => {
          // console.log(this.userData);
        });
    },
    async getQuote() {
      await axios.get("https://api.quotable.io/random/").then((response) => {
        const data = response.data;
        this.tweetBody.content = data.content;
        this.tweetBody.author = data.author;
      });
    },

    setRandomValue() {
      let number = Math.floor(Math.random() * 100);
      let number2 = Math.floor(Math.random() * 56);
      this.reTweetNumber = Math.floor(number + (number2 / 4) ** 2);
      this.likeNumber = Math.floor(number + (number2 / 6) ** 2);
      this.date = Math.floor(Math.random() * 24) + 1;
      this.replyNumber = number;
    },
  },
  async created() {
    await this.getQuote();
    await this.randomUser();
    this.setRandomValue();

    setTimeout(() => {
      this.isVideoMode = true;
    }, 1000);
  },
};
</script>

<template>
  <div id="tweet" v-show="isVideoMode">
    <img :src="userData.pictureUrl" />
    <!-- https://100k-faces.glitch.me/random-image" class="avatar-image -->
    <div class="tweet-content">
      <div class="user-info">
        <p class="name">{{ userData.firstName + " " + userData.lastName }}</p>
        <p class="username" v-show="userData.userId">@{{ userData.userId }}</p>
        <span>•</span>
        <p class="date">{{ date }}h</p>
      </div>
      <div class="tweet-body">
        <p>
          {{ tweetBody.content
          }}<span class="hashtag">#{{ tweetBody.author }}</span>
        </p>
      </div>
      <div class="buttons">
        <div class="button" id="reply">
          <svg class="reply" viewBox="0 0 24 24">
            <g>
              <path
                d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"
              ></path>
            </g>
          </svg>
          <span v-show="replyNumber">{{ replyNumber }}</span>
        </div>
        <div class="button" id="retweet">
          <svg class="retweet" viewBox="0 0 24 24">
            <g>
              <path
                d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"
              ></path>
            </g>
          </svg>
          <span v-show="reTweetNumber">{{ reTweetNumber }}</span>
        </div>
        <div class="button" id="like">
          <svg class="like" viewBox="0 0 24 24" v-on:click="addLike">
            <g>
              <path
                d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"
              ></path>
            </g>
          </svg>
          <span v-show="likeNumber">{{ likeNumber }}</span>
        </div>
        <div class="button" id="share">
          <svg class="share" viewBox="0 0 24 24">
            <g>
              <path
                d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"
              ></path>
              <path
                d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"
              ></path>
            </g>
          </svg>
        </div>
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
    border-radius: 50%;
    width: 48px;
    height: 48px;
  }
  .tweet-content {
    width: 100%;
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
      width: 100%;
      #reply:hover {
        fill: rgba(#1da1f2, 0.8);
        background-color: rgba(#1da1f2, 0.08);
        border-radius: 100px;
        span {
          color: rgba(#1da1f2, 0.8);
        }
      }
      #retweet:hover {
        fill: rgba(green, 0.8);
        background-color: rgba(green, 0.08);
        border-radius: 100px;
        span {
          color: rgba(green, 0.8);
        }
      }
      #like:hover {
        fill: rgba(red, 0.8);
        background-color: rgba(red, 0.08);
        border-radius: 100px;
        span {
          color: rgba(red, 0.8);
        }
      }
      #share:hover {
        fill: rgba(green, 0.8);
        background-color: rgba(green, 0.08);
        border-radius: 50%;
        span {
          color: rgba(green, 0.8);
        }
      }
      .button {
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
          cursor: pointer;
          width: 24.75px;
          padding: 5px;
          margin-right: 4px;
        }
        span {
          font-size: 12px;
        }
      }
    }
  }
}
</style>