let path = require('path');
let webpack = require('webpack');
let HTMLPlugin = require('html-webpack-plugin');
const isDev=process.env.NODE_ENV=='development'
const config={
  target:'web',
  entry:path.join(__dirname,'src/main.js'),
  output:{
    filename:'bundle.js',
    path:path.join(__dirname,'dist')
  },
  module:{
    rules:[
      {
        test:/\.vue$/,
        loader:'vue-loader'
      },
      {
        test:/\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      },
      {
        test:/\.(jpg|gif|jpeg|svg)$/,
        use:[
          {
            loader:'url-loader',//把图片转成base64
            options:{
              limit:1024,//文件大小小于1024，就把图片转成base64
              name:'[name].[ext]'//定义输出文件的名字
            }
          }
        ]
      },
      {
        test:/.jsx$/,
        loader:'babel-loader'
      },
      {
        test:/.less$/,
        use:[
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  plugins:[
    new webpack.DefinePlugin({
      'process.env':{
        NODE_ENV:isDev?'"development"':'"production"'
      }
    }),
    new HTMLPlugin()
  ]
};
if(isDev){
  config.devServer={
    // port:8000,
    // host:'0.0.0.0',
    overlay:{
      error:true
    }
  }
}
module.exports = config;
