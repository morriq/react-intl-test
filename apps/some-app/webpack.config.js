const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (_, { mode }) => {
  return {
    entry: [path.resolve(__dirname, 'src/index.tsx')],
    mode,
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    output: {
      path: path.resolve(__dirname, './dist'),
    },
    plugins: [new HtmlWebpackPlugin()],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-typescript',
                [
                  '@babel/preset-react',
                  {
                    runtime: 'automatic',
                  },
                ],
              ],
              plugins: [
                [
                  'formatjs',
                  {
                    idInterpolationPattern: '[sha512:contenthash:base64:6]',
                    ast: true,
                  },
                ],
              ],
            },
          },
        },
      ],
    },
  };
};
