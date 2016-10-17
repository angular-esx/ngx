import { BaseTask } from './base-task';
import { WebpackConfig } from '../webpack';

export let WebpackTask = (() => {
  let _gulpPlugins = new WeakMap();

  class WebpackTask extends BaseTask {
    constructor(params) {
      super(params);
      _gulpPlugins.set(this, params.plugins);
    }

    run() {
      return new Promise((resolve, reject) => {
        let _webpackConfig = new WebpackConfig(_gulpPlugins.get(this));

        this.webpack(_webpackConfig, (ex, stats) => {
          if (ex) {
            console.log(ex);
            reject();
          }

          if (stats) {
            console.log(stats.toString({
              colors: true,
              children: false,
              chunks: false,
              modules: false
            }));
          }

          resolve();
        });
      });
    }
  }

  return WebpackTask;
})();