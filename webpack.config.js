
module.exports = (options, webpack) => {
    const lazyImports = [
        '@nestjs/microservices/microservices-module',
        '@nestjs/websockets/socket-module',
    ];

    return {
        ...options,
        externals: [],
        entry: './src/main-4-docker.ts',
        output: {
            ...options.output,
            libraryTarget: 'commonjs2',
        },
        plugins: [
            ...options.plugins,
            new webpack.IgnorePlugin({
                checkResource(resource) {
                    if (lazyImports.includes(resource)) {
                        try {
                            require.resolve(resource);
                        } catch (err) {
                            return true;
                        }
                    }
                    return false;
                },
            }),
        ],
    };
};
