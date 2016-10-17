import { BaseTask } from './base-task';

export class LintTask extends BaseTask {
  run() {
    return this.gulp
    .src([
      './cores/**/*.js',
      './modules/**/*.js',
      './_configs/envts/*.js',
      './_configs/gulp-tasks/*.js',
      './gulpfile.js'
    ])
    .pipe(this.jshint('./_configs/jshint/.jshintrc'))
    .pipe(this.jshint.reporter(this.jshintStylish));
  }
}
