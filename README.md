# 基于 TS + React 开发的饿了么H5单页面应用

通过实现对饿了么H5单页面应用的开发，能够增加 TS 的熟练度，更加了解 TS 优缺点。

## 🤔 开发前准备工作

- 基于 TS + React 进行前端开发
- 使用 create-react-app ${projectName} --scripts-version=react-scripts-ts 进行项目初始化
- 后端数据使用 MockJs 模拟，后期打算使用KOA搭建服务器替换 MockJS
- CSS启用 CSS-module + stylus
- JS 使用 Airbnb 的开发规范
- 为git commit 添加钩子，检测JS代码规范
- 项目的热加载
- 测试使用Jest，目前研究尚欠，测试文件暂时搁置

## 🔨 开发中遇到问题

- 在 webpack 配置中加入 stylus
  
  阅读了一些文档之后，我寻思有两种方案可以解决这个问题：

  1. 在 webpack 的配置中加入直接加入 stylus-loader 
  2. create-react-app 提供了一个 postCSS 的 CSS 处理平台，上面提供了 stylus 相关的处理方案
  
  #### 方案一
  1. 首页需要安装 stylus 相关的处理器
  ```
  // 使用 yarn
  yarn add stylus stylus-loader -D
  // 使用 npm
  npm i stylus stylus-loader --save-d
  ```
  2. 通过修改 webpack.config.dev.js 文件
  ```
  {
    // 将 css 修改成 styl
    test: /\.styl$/,
    use: [
      require.resolve('style-loader'),
      // ...
      {
        loader: require.resolve('postcss-loader'),
        options: {
          // Necessary for external CSS imports to work
          // https://github.com/facebookincubator/create-react-app/issues/2677
          ident: 'postcss',
          plugins: () => [
            require('postcss-flexbugs-fixes'),
            autoprefixer({
              browsers: [
                '>1%',
                'last 4 versions',
                'Firefox ESR',
                'not ie < 9', // React doesn't support IE8 anyway
              ],
              flexbox: 'no-2009',
            }),
          ],
          // ⚠️ 此处需设置开启 sourceMap 否则终端可能会弹出警告
          sourceMap: true,
        },
      },
      // 新增 stylus
      require.resolve('stylus-loader'),
    ],
  },
  ```

  完成代码修改过后，重启项目，修改 css 文件为 styl 文件，🎉项目正常运行。

## 🎉 开发后项目总结
