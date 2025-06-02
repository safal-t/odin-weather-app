import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    output: {
        path: path.resolve(process.cwd(), "dist"),
        filename: "bundle.js"
    },
    plugins: [new HtmlWebpackPlugin()],
    mode: "production",
};