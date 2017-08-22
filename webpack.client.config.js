const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/client/index.ts",
    target: 'web',
    output: {
        filename: 'client.bundle.js',
        path: path.resolve(__dirname, 'dist/client')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            pixi: path.join(__dirname, 'node_modules/phaser-ce/build/custom/pixi.js'),
            phaser: path.join(__dirname, 'node_modules/phaser-ce/build/custom/phaser-split.js'),
            p2: path.join(__dirname, 'node_modules/phaser-ce/build/custom/p2.js'),
            assets: path.join(__dirname, 'src/client/assets')
        }
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
                exclude: /(node_modules)/
            },
            { test: /pixi\.js$/, loader: 'expose-loader?PIXI' },
            { test: /phaser-split\.js$/, loader: 'expose-loader?Phaser' },
            { test: /p2\.js$/, loader: 'expose-loader?p2' },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], { dry: false }),
        new HtmlWebPlugin({
            title: 'tanks.io',
            filename: path.join(__dirname, 'dist/client/index.html')
        }),
        new webpack.DefinePlugin({
            WINDOW: {
                WIDTH: 800,
                HEIGHT: 600
            }
        })
    ]
};