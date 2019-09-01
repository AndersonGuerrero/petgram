const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
const path = require('path')

module.exports = {
  output: {
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    // generate Manifeste file. PWA
    new WebpackPwaManifestPlugin({
      name: 'PetGram - Tu app de fotos de mascotas',
      shortname: 'PetGram - :)',
      description: 'Con petgram puedes encontar fotos de animales domesticos',
      background_color: '#fff',
      theme_color: '#b1a',
      icons: [
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 5121],
          ios: true
        }
      ]
    }),
    // Configuracion offline app
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp('https://(res.cloudinary.com|images.unsplash.com)'),
          // Revisa el cache primero
          handler: 'CacheFirst',
          options: {
            cacheName: 'images'
          }
        },
        {
          // cache offline para el api
          urlPattern: new RegExp('https://petgram-server.now.sh'),
          // Revisa la network primero
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api'
          }
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
}
