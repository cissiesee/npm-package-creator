var webpack = require("webpack");
var path = require("path");
var TypedocWebpackPlugin = require("typedoc-webpack-plugin");
//require("es5-shim");
//var es3ifyPlugin = require("es3ify-webpack-plugin");

var libraryName = "lib";
var outputFile = libraryName + ".js";
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var argv = process.argv;
var plugins = [];

if (argv.indexOf("-dev") === -1) {
    plugins.push(new UglifyJsPlugin({
        minimize: true,
    }));
    plugins.push(new TypedocWebpackPlugin({}, "./src"));
    outputFile = libraryName + ".min.js";
} else {
    outputFile = libraryName + ".js";
}

var config = {
    entry: ["es5-shim", "es5-shim/es5-sham", __dirname + "/src/index.ts"],
    devtool: "source-map",
    output: {
        path: __dirname + "/dist",
        filename: outputFile,
        library: libraryName,
        libraryTarget: "umd",
        umdNamedDefine: true,
    },
    module: {
        loaders: [{
            test: /(\.tsx|\.ts)$/,
            loader: "babel-loader!ts-loader",
            exclude: /(node_modules|bower_components)/,
        }],
    },
    resolve: {
        root: path.resolve("./src"),
        extensions: ["", ".ts", ".js"],
    },
    plugins: plugins,
};

module.exports = config;
