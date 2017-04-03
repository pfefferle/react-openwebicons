module.exports = {
    entry: "./index.tsx",
    output: {
        path: "./",
        filename: "index.js"
    },
    module: {
        rules:  [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: "node_modules/"
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js"]
    }
};