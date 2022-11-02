const { resolve } = require( 'path' );
const { ProvidePlugin } = require( 'webpack' );
const TsconfigPathsPlugin = require( 'tsconfig-paths-webpack-plugin' );

const { CSSLoader } = require( './constants' );

const appRoot = resolve( __dirname, '../../' );
const appSrc = resolve( `${appRoot}/src` );

const commonConfig = {
  module: {
    rules: [
      {
        test:    /\.(js|jsx)$/,
        exclude: /node_modules/,
        use:     [ 'babel-loader' ],
      },
      {
        test:    /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use:     {
          loader:  'ts-loader',
          options: {
            compilerOptions: {
              noEmit: false,
            },
          },
        },
      },
      {
        test:    /\.css$/,
        use:     [ 'style-loader', CSSLoader, 'postcss-loader' ],
        exclude: /node_modules/,
      },
      {
        test:    /\.(scss$)/,
        use:     [ 'style-loader', CSSLoader, 'sass-loader', 'postcss-loader' ],
        exclude: /node_modules/,
      },
      {
        test:    /\.(jpe?g|png|gif|eot|svg)$/i,
        loader:  'file-loader',
        exclude: /node_modules/,
        options: {
          name:   'assets/images/[name].[hash:8].[ext]',
          hash:   'sha512',
          digest: 'hex',
        },
      },
      {
        test:    /\.(woff(2)?|ttf|otf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader:  'file-loader',
        exclude: /node_modules/,
        options: {
          name:   'font/[hash].[ext]',
          hash:   'sha512',
          digest: 'hex',
        },
      },
    ],
  },
  resolve: {
    extensions: [ '.json', '.js', '.ts', '.tsx', '.css', '.scss' ],
    alias:      {
      '~':            appSrc,
      '@':            appSrc,
      '@assets':      resolve( `${appSrc}/assets` ),
      '@images':      resolve( `${appSrc}/assets/images` ),
      '@scss':        resolve( `${appSrc}/assets/scss` ),
      // '@constants':   resolve( `${appSrc}/constants` ),
      '@components':  resolve( `${appSrc}/components` ),
      '@pages':       resolve( `${appSrc}/pages` ),
      '@utils':       resolve( `${appSrc}/utils` ),
      '@helpers':     resolve( `${appSrc}/helpers` ),
      // '@store':       resolve( `${appSrc}/store` ),
      // '@mocks':       resolve( `${appSrc}/__mocks__` ),
      // '@definitions': resolve( `${appSrc}/definitions.ts` ),
    },
    plugins: [
      new TsconfigPathsPlugin(),
    ],
  },
  plugins: [
    new ProvidePlugin( {
      React: 'react',
    } ),
  ],
  performance: { hints: false },
  stats:       'minimal',
};

module.exports = commonConfig;
