import { Configuration, DefinePlugin } from "webpack";
import * as dotenv from "dotenv";

const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const cssRegex = /\.css$/;
const sassRegex = /\.(scss|sass)$/;
const lessRegex = /\.less$/;
const stylRegex = /\.styl$/;

const styleLoadersArray = [
  "style-loader",
  {
    loader: "css-loader",
    options: {
      modules: {
        localIdentName: "[path][name]__[local]--[hash:5]",
      },
    },
  },
  'post-loader'
];

console.log("NODE_ENV", process.env.NODE_ENV);
console.log("BASE_ENV", process.env.BASE_ENV);

// 加载配置文件
const envConfig = dotenv.config({
  path: path.resolve(__dirname, "../env/.env." + process.env.BASE_ENV),
});

const baseConfig: Configuration = {
  entry: path.join(__dirname, "../src/index.tsx"), // 入口文件
  // 打包出口文件
  output: {
    filename: "static/js/[name].js", // 每个输出js的名称
    path: path.join(__dirname, "../dist"), // 打包结果输出路径
    clean: true, // webpack4需要配置clean-webpack-plugin来删除dist文件,webpack5内置了
    publicPath: "/", // 打包后文件的公共前缀路径
  },
  // loader 配置
  module: {
    rules: [
      {
        test: /.(ts|tsx)$/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: cssRegex, //匹配 css 文件
        use: styleLoadersArray,
      },
      {
        test: lessRegex,
        use: [
          ...styleLoadersArray,
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                importLoaders: 2,
                modules: true,
                // 如果要在less中写类型js的语法，需要加这一个配置
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: sassRegex,
        use: [...styleLoadersArray, "sass-loader"],
      },
      {
        test: stylRegex,
        use: [...styleLoadersArray, "stylus-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
    alias: {
      "@": path.join(__dirname, "../src"),
    },
    modules: [path.resolve(__dirname, "src"), "node_modules"],
  },
  // plugins 的配置
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack5-react-ts",
      filename: "index.html",
      template: path.join(__dirname, "../public/index.html"),
      inject: true, // 自动注入静态资源
      hash: true,
      cache: false,
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        minifyJS: true, // 在脚本元素和事件属性中缩小JavaScript(使用UglifyJS)
        minifyCSS: true, // 缩小CSS样式元素和样式属性
      },
      nodeModules: path.resolve(__dirname, "../node_modules"),
    }),
    new DefinePlugin({
      "process.env": JSON.stringify(envConfig.parsed),
      "process.env.BASE_ENV": JSON.stringify(process.env.BASE_ENV),
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
  ].filter(Boolean),
};

export default baseConfig;
