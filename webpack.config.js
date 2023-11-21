const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development",
    entry: './js/project/main.js',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            }
        ],
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, "./dist/")
    },

    devServer: {
        static: {
            directory: path.join(__dirname, "./dist/")
        },
        compress: true,
        port: 9000
    },

    plugins: [
        new CopyPlugin({
          patterns: [
            { from: "Assets", to: "Assets" },
            { from: "styles", to: "styles" },

            { from: "index_publish.html", to: "index.html" },

            //Libs
            { from: "js/babylon.gui.js", to: "libs/babylon.gui.js" },
            { from: "js/babylon.js", to: "libs/babylon.js" },
            { from: "js/babylonjs.loaders.min.js", to: "libs/babylonjs.loaders.min.js" },
          ],
        }),
      ],
};