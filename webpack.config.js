var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var merge = require('webpack-merge')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrors = require('friendly-errors-webpack-plugin')

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
  	//因为index.html在根目录.如果webpack指定根目录如src,
  	//则 path:__dirname + '/src',
    path:__dirname, 
    // publicPath: '/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, 'node_modules')],

    alias: {
      'src': path.resolve(__dirname, 'src'),
      'common': path.resolve(__dirname, 'src/common'),
      'components': path.resolve(__dirname, 'src/components')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, 'node_modules')]
  },
  module: {
    // preLoaders: [
    //   {
    //     test: /\.vue$/,
    //     loader: 'eslint',
    //     include: [
    //       path.join('./', 'src')
    //     ],
    //     exclude: /node_modules/
    //   },
    //   {
    //     test: /\.js$/,
    //     loader: 'eslint',
    //     include: [
    //       path.join('./', 'src')
    //     ],
    //     exclude: /node_modules/
    //   }
    // ],
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        // query:{ presets:['es2015']},
        include: [
          path.join(__dirname, 'src')
        ],
        exclude: /node_modules/
      },
      {
      	test:/\.(png|jpg|gif|woff|woff2|ttf|eot|svg|swf)$/,
      	loader: "file-loader?name=images/[name].[ext]"
      },
      //样式
      // utils.styleLoaders({ sourceMap: false })
      // { test: /\.css$/, loader: 'style!css' },
      { test: /\.css$/, loader: 'vue-style-loader!css-loader' },
      { test: /\.(styl|stylus)$/, loader: 'style!css!stylus' }
      // { test: /\.(styl|stylus)$/, loader: 'vue-loader!vue-style-loader!css-loader!stylus-loader' }
    ]
  },
  // eslint: {
  //   formatter: require('eslint-friendly-formatter')
  // },
  // vue: {
  //   loaders: utils.cssLoaders({ sourceMap: false }),
  //   postcss: [
  //     require('autoprefixer')({
  //       browsers: ['last 2 versions']
  //     })
  //   ]
  // },

  //这个配置在 npm scripts里也可以 
  //webpack-dev-server --devtool eval --progress --colors --hot --open --content-base app --history-api-fallback
	devServer: {
	    historyApiFallback: true,
	    hot: true,
	    inline: true,
	    progress: true,
	    contentBase: './',
	    host: '0.0.0.0',
	    port: 8090,
	    open:true, //自动打开页面,和OpenBrowserPlugin 插件功能一样
	    proxy: {
	    '/api/*': {
	      target: 'http://localhost:8081',
	      secure: false,
	      changeOrigin: true
	    }
	  }
	},

	devtool: '#eval-source-map',
	plugins: [
	    // new webpack.optimize.OccurrenceOrderPlugin(),
	    // new webpack.HotModuleReplacementPlugin(),
	    new webpack.NoErrorsPlugin(),
	    new HtmlWebpackPlugin({
	      filename: 'index.html',
	      template: 'index.html',
	      inject: true
	    }),
	    new FriendlyErrors()
	]
}
