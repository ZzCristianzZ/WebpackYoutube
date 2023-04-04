const HtmlWebpackPlugin = require("html-webpack-plugin"); 
// Se llama el modulo para Css
const  MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  module:{ 
        rules: [
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test:/\.html/i,
                use:[
                  {
                    loader:"html-loader",
                    options:{
                        minimize: true,
                    }
                  }  
                ]
            },
            // Creamos otra regla para css
            {
                test:/\.css$/i,
                use:[MiniCssExtractPlugin.loader,"css-loader"],
            }
        ],
    },
  plugins:[ 
        new HtmlWebpackPlugin({
            template:"./src/index.html",
            filename: "./index.html",
        }),
        // El nuevo plugin 
        new MiniCssExtractPlugin(),
    ],
};