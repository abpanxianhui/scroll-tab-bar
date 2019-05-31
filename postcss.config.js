module.exports = {
    plugins: [
        require("autoprefixer")({ browsers: [
                "> 1%",
                "last 7 versions",
                "not ie <= 8",
                "ios >= 8",
                "android >= 4.0"] }),
        require('cssnano')(),
        require('postcss-preset-env')()
    ]
}