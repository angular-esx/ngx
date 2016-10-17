import gulpLoadPlugins from 'gulp-load-plugins';
import gulp from 'gulp';

import * as gulpTasks from './_configs/gulp-tasks';
import { Envt } from './_configs/envts';

let _plugins = gulpLoadPlugins({
  pattern: [
    'yargs', 'del', 'gulp-jshint', 'jshint-stylish', 'gulp-sass',
    'gulp-rename', 'run-sequence', 'merge-stream', 'browser-sync',
    'webpack', 'autoprefixer'
  ],
  renameFn: (name) => {  
    return name
    .replace('gulp-', '')
    .replace(/-([a-z])/g, (x, y) => y.toUpperCase());
  }
});

gulp.task('test-ui', () => {
  _plugins.runSequence('clean', ['lint', 'scss', 'polyfill', 'index', 'webpack'], ['browser-sync', 'watch']);
});

_registerTask('clean');

_registerTask('scss');

_registerTask('polyfill');

_registerTask('lint');

_registerTask('browser-sync');

_registerTask('watch');

_registerTask('webpack');

gulp.task('reload', () => {
  _plugins.browserSync.reload();
});

gulp.task('index', () => {
  let _envt = new Envt(_plugins.yargs.argv);

  return gulp.src('./index.template.html')
  .pipe(_plugins.rename('index.html'))
  .pipe(gulp.dest(_envt.distPath));
});

function _registerTask(taskName, dependencies) {
  if(dependencies){
    gulp.task(taskName, dependencies, _getTask(taskName));
  }
  else {
    gulp.task(taskName, _getTask(taskName));
  }
}

function _getTask(taskName) {
  var _taskName = taskName.toLowerCase().replace(/-([a-z])/g, (x, y) => { return y.toUpperCase(); });
  _taskName = `${_taskName.charAt(0).toUpperCase()}${_taskName.slice(1)}Task`;

  return new gulpTasks[_taskName]({
    gulp: gulp,
    plugins: _plugins
  })
  .getStream();
}