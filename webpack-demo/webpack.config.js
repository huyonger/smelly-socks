// ./webpack.config.js
const path = require('path');

module.exports = {
    entry: {
        entry: path.resolve(__dirname, './src/index.js'),
    },
    context: process.cwd(),
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.txt$/,
                use: ['./src/demo-loader.js'],
                options: {
                    name: '梨花酱' // 将要变更的通过配置项传入        
                }
            }
        ]
    }
};
