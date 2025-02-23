import {DefinePlugin, ProgressPlugin} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin, {Configuration} from 'mini-css-extract-plugin';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
import {BuildOptions} from './types/types';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import path from 'path';
import CopyPlugin from 'copy-webpack-plugin';

export function buildPlugins(options: BuildOptions): Configuration['plugins'] {

  const {mode, paths, analyzer, platform} = options

  const isDev = mode === 'development'
  const isProd = mode === 'production'

  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({
      template: paths.html,
      favicon: path.resolve(paths.public, 'favicon.ico')
    }),
    new DefinePlugin({
      __ENV__: JSON.stringify(mode),
      __PLATFORM__: JSON.stringify(platform),
    })
  ]

  if (isDev) {
    plugins.push(new ProgressPlugin())
    plugins.push(new ForkTsCheckerWebpackPlugin())
    plugins.push(new ReactRefreshWebpackPlugin())
  }

  if (isProd) {
    plugins.push(new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }))
    plugins.push(new CopyPlugin({
      patterns: [
        {
          from: path.resolve(paths.public, 'locales'),
          to: path.resolve(paths.output, 'locales'),
        },
      ],
    }))
  }

  if (analyzer) {
    plugins.push(new BundleAnalyzerPlugin())
  }

  return plugins
}