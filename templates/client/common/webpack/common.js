const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  entry: './src/index.tsx', // set the extension according to your project
  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript', // remove if not using typescript
            ],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }, // remove this test if not using scss/sass
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: 'asset',
      },
    ],
  },
  optimization: {
    moduleIds: 'named',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.template.html',
      inject: 'body',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: './public',
        },
      ],
    }),
  ],
  performance: {
    hints: false,
  },
};
