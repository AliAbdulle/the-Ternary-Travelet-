module.exports = {
    scripts: {
        files: [
            "../scripts/**/*.js",
            "!node_modules/**/*.js"
        ],
        ternary: ["eslint", "browserify"],
        options: {
            spawn: false,
            debounceDelay: 1000
        }
    }
}