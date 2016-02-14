var path = require("path");

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, ""),
        publicPath: "/",
        filename: "index.js",
        libraryTarget: 'commonjs2'
    },
    externals: {
        rsvp: 'rsvp',
        '@mifunstudio/pixi.js': '@mifunstudio/pixi.js'
    },
    devtool: 'hidden-source-map',
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel?presets[]=es2015'
            }
        ]
    },
};
