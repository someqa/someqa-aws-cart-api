const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './src/lambda.ts',
    target: 'node',
    externals: [nodeExternals()],
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist-webpack'),
        libraryTarget: 'commonjs',
    },
};
