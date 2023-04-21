const HtmlWebpackPlugin = require("html-webpack-plugin"); 
const  MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry:{
    js: "./src/index.js",
    react: "./src/index_react.js",
    ts: "./src/index_ts.js"
  },
  output:{
    filename:"[name].[chunkhash].js"
  }, 
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
                test:/\.tsx?/,
                use: "ts-loader",
                exclude: /node_modules/,  
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
                use:[
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath : "./",
                        },
                    },
                    "css-loader",
                ]

            },
            {
                test:/\.(jpe?g|png|gif|svg|webp)$/i,
                use:["file-loader?name=assets/[name].[ext]","image-webpack-loader"],
            },
            {     
                test:/\.(woff )$/i,
                use:["file-loader?name=assets/[name].[ext]"],
            }
        ],
    },
  plugins:[ 
        new HtmlWebpackPlugin({
            // template:"./src/index.html",
            // filename: "./index.html",
            // Creamos nuevas atirbutos para los multiples puntos de entrada y salida.
             template: "./src/index.html",
             filename: "./index.html",
             chunks: ["js"],
             hash: true

        }),
        new HtmlWebpackPlugin({
            //Creamos uno para el archivo React
             template: "./src/index.html",
             filename: "./react.html",
             chunks: ["react"],
             hash: true

        }),
        new HtmlWebpackPlugin({
            //Creamos uno para el archivo React
             template: "./src/index.html",
             filename: "./ts.html",
             chunks: ["ts"],
             hash: true

        }),
        new MiniCssExtractPlugin(),
    ],
};