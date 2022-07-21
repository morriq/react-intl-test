const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = (_, { mode }) => {
  return {
    entry: [path.resolve(__dirname, 'src/index.tsx')],
    mode,
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    externals: [
      nodeExternals({
        modulesDir: path.resolve(__dirname, 'node_modules'),
      }),
      nodeExternals({
        modulesDir: path.resolve(__dirname, '../../', 'node_modules'),
      }),
    ],
    output: {
      path: path.resolve(__dirname, './dist'),
      libraryTarget: 'commonjs2',
    },
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
