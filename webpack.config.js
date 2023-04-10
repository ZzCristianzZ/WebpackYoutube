const HtmlWebpackPlugin = require("html-webpack-plugin"); 
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
            {
                test:/\.css$/i,
                use:[MiniCssExtractPlugin.loader,"css-loader"],
            },
           // Creamos las reglas para el loader de archivos
            {
                test:/\.(jpe?g|png|gif|svg|webp)$/i,
                use:["file-loader?name=assets/[name].[ext]"],
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