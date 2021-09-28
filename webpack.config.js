const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.jsx'), //qual o arquivo principal da aplicação, arquivo inicial da aplicação
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // publicPath: '',
    },
    //dev server não foi necessário configurar a propriedade com a versão instalada do webpack-dev-server, com essa proprieade configurada da erro na cli, Invalid options object
    // devServer: {
    //     contentBase: path.resolve(__dirname, 'public')
    // },
    plugins: [
        isDevelopment && new ReactRefreshWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')//template para gerar o bundle html na pasta dist
        })
    ].filter(Boolean),
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            isDevelopment && require.resolve('react-refresh/babel')
                        ].filter(Boolean)
                    }
                },
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.svg$/,
                use: {
                    loader: 'svg-url-loader'
                }
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: {
                    loader: 'file-loader'
                }
            }
        ]
    }
}

// const path = require('path')

// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const HtmlWebpackInjector = require('html-webpack-injector')

// const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

// const isDevelopment = process.env.NODE_ENV !== 'production'

// module.exports = {
//     mode: isDevelopment ? 'development' : 'production',
//     devtool: isDevelopment ? 'eval-source-map' : 'source-map',
//     entry: path.resolve(__dirname, 'src', 'index.jsx'),
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'bundle.js',
//         // publicPath: '/',
//     },
//     plugins: [
//         isDevelopment && new ReactRefreshWebpackPlugin(),
//         new HtmlWebpackPlugin({
//             template: path.resolve(__dirname, 'public', 'index.html'),
//         }),
//         // new HtmlWebpackInjector()
//     ].filter(Boolean),
//     resolve: {
//         extensions: ['.js', '.jsx']
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.jsx$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: 'babel-loader',
//                     options: {
//                         plugins: [
//                             isDevelopment && require.resolve('react-refresh/babel')
//                         ].filter(Boolean)
//                     }
//                 }
//             },
//             {
//                 test: /\.scss$/,
//                 exclude: /node_modules/,
//                 use: ['style-loader', 'css-loader', 'sass-loader']
//             },
//             {
//                 test: /\.svg$/,
//                 use: {
//                     loader: 'svg-url-loader'
//                 }
//             },
//             {
// 				test: /\.(png|jpe?g|gif)$/i,
// 				use: {
// 					loader: 'file-loader'
// 				}
// 			}
//         ]
//     }
// }