import * as path from 'path';

export class BaseWebpack {
  constructor(gulpPlugins) {
    this.context = path.resolve(__dirname, '../..');
    this.plugins = [
      /*
        Disabled temporarily this plugin to solve the issue:
        Template cannot be applied as TemplateArgument: HarmonyImportDependency
       */
      //new gulpPlugins.webpack.optimize.DedupePlugin(),
      /*
        This plugin is used temporarily to solve the issue:
        WARNING in ./~/@angular/core/src/linker/system_js_ng_module_factory_loader.js 
        Critical dependency: the request of a dependency is an expression 
      */
      new gulpPlugins.webpack.ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/, __dirname),
      new gulpPlugins.webpack.LoaderOptionsPlugin({
        options: {
          postcss: [
            gulpPlugins.autoprefixer,
          ]
        }
      })
    ];
    this.module = {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'angular2-template-loader'
        },
        { test: /\.html$/, loader: 'html-loader' },
        { test: /\.json$/, loader: 'json-loader' },
        {
          test: /\.(scss|sass)$/,
          loader: [
            './_configs/webpack/loaders/clean-code-loader',
            '!sass-loader',
            '!postcss-loader'
          ].join('')
        }
      ]
    };
  }
}