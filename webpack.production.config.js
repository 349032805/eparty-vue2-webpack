var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    // vendor: ["vue", "vue-resource","vue-router","babel-runtime","better-scroll","vuex"],
    app: "./src/main.js"
  },
  output: {
    path: __dirname + '/build',
    // path: path.join(__dirname, 'build'),
    // publicPath: '', //资源路径前缀
    filename: "scripts/[name]-[chunkhash:8].js",
    // chunkFilename: "scripts/[id]-[chunkhash:8].js"
  },

  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, 'node_modules')],

    alias: {
      'src': path.resolve(__dirname, 'src'),
      'common': path.resolve(__dirname, 'src/common'),
      'components': path.resolve(__dirname, 'src/components'),
      'views': path.resolve(__dirname, 'src/views'),
      'tip': path.resolve(__dirname, 'src/tip')
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
      	test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      	loader: "url-loader?limit=10000&name=/images/[name]-[hash:8].[ext]"
      },
      //样式
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({ fallback: 'vue-style-loader', use: 'css-loader' }),
      }, 
      {
        test: /\.(scss|sass)$/,
        loader: ExtractTextPlugin.extract({ fallback: 'vue-loader', use: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'}),
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract({ fallback: 'vue-loader', use: 'vue-style-loader!css-loader!stylus-loader'}),
      },
      {
        test: /\.stylus$/,
        loader: ExtractTextPlugin.extract({ fallback: 'vue-loader', use: 'vue-style-loader!css-loader!stylus-loader'}),
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader?limit=10000&name=fonts/[name].[hash:8].[ext]'
      }
    ]
  },
  // eslint: {
  //   formatter: require('eslint-friendly-formatter')
  // },
  vue: {
    postcss: [
      require('autoprefixer')({
        browsers: ['last 2 versions']
      })
    ]
  },
	plugins: [
		new CleanWebpackPlugin('build', {
	      verbose: true,
	      dry: false
    }),
		new ExtractTextPlugin("styles/[name]-[contenthash:8].css"),
		new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }),
    //压缩
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false,
            drop_console: true
        },
        comments: false,
        sourceMap: false
    }),
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    })

	]
}
