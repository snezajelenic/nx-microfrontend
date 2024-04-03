const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = (options) => {
  return {
    entry: "./index.js",
    output: {
      filename: "bundle.js",
      publicPath: "auto",
      uniqueName: "mfe4",
    },
    module: {
      rules: [
        {
          test: /.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                cacheDirectory: true,
                presets: ["@babel/react", "@babel/env"],
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new ModuleFederationPlugin({
        // For remotes (please adjust)
        name: "react",
        library: { type: "var", name: "react" },
        filename: "remoteEntry.js", // <-- Meta Data
        exposes: {
          "./react-component-first": "./component-first.js",
          "./react-component-second": "./component-second.js",
        },
        shared: ["react", "react-dom"],
      })
    ],
    devServer: {
      port: 4204,
      // allowedHosts: ['h'],
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
      }
    },
  };
};
