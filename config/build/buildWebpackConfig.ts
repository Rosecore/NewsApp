import { BuildOptions } from "./types/config";
import webpack from 'webpack' 
import path from 'path';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolver } from './buildResolver';
import { buildDevServer } from "./buildDevServer";
export function buildWebpackConfig(options: BuildOptions):webpack.Configuration {
    const {paths, mode} = options;
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            publicPath:'/'
        },
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolver(options)
        ,
        plugins: buildPlugins(options),
        devtool: 'inline-source-map',
        devServer: buildDevServer(options)
    };
}