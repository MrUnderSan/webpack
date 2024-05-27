import {Configuration} from 'mini-css-extract-plugin';
import {buildPlugins} from './buildPlugins';
import {buildLoaders} from './buildLoaders';
import {buildResolvers} from './buildResolvers.ts';
import {buildDevServer} from './buildDevServer';
import {BuildOptions} from './types/types';


export function buildWebpack(options: BuildOptions): Configuration {

  const {mode, paths} = options

  const isDev = mode === 'development'

  return {
    mode: mode ?? 'development',
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.output,
      clean: true
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev && 'inline-source-map',
    devServer: isDev ? buildDevServer(options) : undefined,
  }
}