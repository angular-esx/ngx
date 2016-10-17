import { BaseWebpack } from './_webpack';

export class DeverlopWebpack extends BaseWebpack {
  constructor(gulpPlugins) {
    super(gulpPlugins);

    let _module = gulpPlugins.yargs.argv.module;
    if(!_module) { throw 'Module argument is required for DeverlopWebpack'; }

    this.cache = true;
    this.devtool = 'source-map';

    this.entry = {
      ngx: `./modules/${_module}/tests/ui/isolated/main.js`
    };

    this.output = {
      path: './dist/js',
      filename: '[name].js'
    };
  }
}