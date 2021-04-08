module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/twitter-clone/'
    : '/',
};

// css: {
//     loaderOptions: {
//       sass: {
//           prependData: `
//           @import "@/assets/scss/responsive.scss";
//           `
//       }
//     }
//   }