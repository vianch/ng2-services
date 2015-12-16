var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: {
        homepage: "./app/modules/index",
        angular2: [
            // Angular 2 Deps
            'zone.js',
            'reflect-metadata',
            // to ensure these modules are grouped together in one file
            'angular2/angular2',
            'angular2/core',
            'angular2/router',
            'angular2/http',
            'lodash'
        ]
    },

    plugins: [
        new webpack.ProvidePlugin({
            "_": "lodash"
        }),
        new webpack.ContextReplacementPlugin(/buffer/, require('buffer'))

    ],

    devServer: {
        contentBase: 'wwwroot'
    },

    module: {
        preLoaders: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: "tslint-loader"
            }
        ],
        loaders: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: "ts-loader"
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: "html"
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader!autoprefixer-loader!sass-loader"
            },
            {
                test: /\.(png|jpg|gif|woff|woff2)(\?.*$|$)/,
                exclude: /node_modules/,
                loader: "url-loader?limit=100000"
            },
            {
                test: /\.(ttf|eot|svg)(\?.*$|$)/,
                exclude: /node_modules/,
                loader: "file"
            }
        ]
    },
    
  resolve: {
    extensions: ['','.ts','.js'],
    root: path.join(__dirname, 'wwwroot/assets/') //public
  }

};
