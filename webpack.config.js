module.exports = {
    module:{ 
        rules:[
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader:"babel-loader",
                    },
            },
        ],
    },
};