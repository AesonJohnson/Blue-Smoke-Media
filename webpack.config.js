module.exports = {
  module: {
    rules: [{
        test: /\.mp4$/,
        use: "file-loader?name=videos/[name].[ext]",
      },
      // {
      //   test: /\.css$/,
      //   use: [{
      //     loader: 'url-loader',
      //     options: {
      //       esModule: false,
      //     },
      //   }],
      // },
    ],
  },
};
