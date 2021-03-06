const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry:"./script/script.js",
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"index_bundle.js"
    },
    plugins:[
        new HtmlWebpackPlugin()
    ],
    mode:"production"
}