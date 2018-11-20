const HtmlWebpackPlugin = require("html-webpack-plugin");
const mode = process.env.NODE_ENV;

const [isDev, isProd] = ["development", "production"].map(env => mode === env);

module.exports = (env = {}) => ({
  mode,
  devtool: "source-map",
  entry: { "react-redux-lazy": isProd ? "./src/index.js" : "./dev/index.jsx" },
  externals: isDev? {} : {
    react: "react",
    redux: "redux",
    "react-redux": "react-redux"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  plugins: [isDev ? new HtmlWebpackPlugin() : null].filter(p => p)
});
