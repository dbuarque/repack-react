var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    debug: true,
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/app/components/App.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel-loader' ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
