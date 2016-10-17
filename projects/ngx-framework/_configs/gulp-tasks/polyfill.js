import { BaseTask } from './base-task';
import { Envt } from '../envts';

export class PolyfillTask extends BaseTask {
  run() {
    let _envt = new Envt(this.args);

    return this.gulp
    .src([
      './node_modules/es6-shim/es6-sham.min.js', 
      './node_modules/es6-shim/es6-shim.min.js',
      './node_modules/zone.js/dist/zone.min.js',
      './node_modules/reflect-metadata/Reflect.js'
    ])
    .pipe(this.gulp.dest(_envt.getJsDest()));
  }
}