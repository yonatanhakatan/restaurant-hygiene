const HtmlWebpackPlugin = require("html-webpack-plugin")
const WebpackPwaManifest = require("webpack-pwa-manifest")
const WorkboxPlugin = require("workbox-webpack-plugin")
const path = require("path")

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      // Fonts
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/"
            }
          }
        ]
      }
    ]
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          chunks: "all"
        }
      }
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      filename: "index.html"
    }),
    new WorkboxPlugin.GenerateSW(),
    new WebpackPwaManifest({
      short_name: "Restaurant Hygiene",
      name: "Restaurant Hygiene",
      start_url: "/",
      display: "standalone",
      theme_color: "#000000",
      background_color: "#000000",
      icons: [
        {
          src: path.resolve("./public/images/icon-72x72.png"),
          sizes: "72x72",
          type: "image/png"
        },
        {
          src: path.resolve("./public/images/icon-96x96.png"),
          sizes: "96x96",
          type: "image/png"
        },
        {
          src: path.resolve("./public/images/icon-128x128.png"),
          sizes: "128x128",
          type: "image/png"
        },
        {
          src: path.resolve("./public/images/icon-144x144.png"),
          sizes: "144x144",
          type: "image/png"
        },
        {
          src: path.resolve("./public/images/icon-152x152.png"),
          sizes: "152x152",
          type: "image/png"
        },
        {
          src: path.resolve("./public/images/icon-192x192.png"),
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: path.resolve("./public/images/icon-384x384.png"),
          sizes: "384x384",
          type: "image/png"
        },
        {
          src: path.resolve("./public/images/icon-512x512.png"),
          sizes: "512x512",
          type: "image/png"
        }
      ]
    })
  ]
}
