export function buildBabelLoader(isDev: boolean) {
    return {
        test: /\.(js|tsx|jsx|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [isDev && require.resolve('react-refresh/babel')].filter(Boolean),
            },
        },
    };
}
