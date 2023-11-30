import { Configuration } from "webpack";
import { merge } from "webpack-merge";
import baseConfig from "./webpack.base";
import CopyPlugin from "copy-webpack-plugin";
import path from "path";

const prodConfig: Configuration = merge(baseConfig, {
  mode: "production", // 生产模式,会开启tree-shaking和压缩代码,以及其他优化，
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "../public"),
          to: path.resolve(__dirname, "../dist"),
          filter: (source) => !source.includes("index.html"), // 忽略index.html
        },
      ],
    }),
  ],
});

export default prodConfig;
