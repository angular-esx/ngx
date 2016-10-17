import { BaseTask } from './base-task';
import { Envt } from '../envts';

export class WatchTask extends BaseTask {
  run() {
    let _envt = new Envt(this.args);

    this.gulp.watch([
      './cores/**/*.js',
      './cores/**/*.scss',
      './cores/**/*.html',
      './modules/**/*.js',
      './modules/**/*.scss',
      './modules/**/*.html'
    ], 
    () => this.runSequence('lint', 'scss', 'webpack', 'reload'));
  }
}