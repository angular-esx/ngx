import { BaseTask } from './base-task';
import { Envt } from '../envts';

export class ScssTask extends BaseTask {
  run() {
    let _envt = new Envt(this.args);

    let _ngxNormalizeStream = this.gulp.src('./cores/styles/normalize/index.scss')
    .pipe(this.sass({ outputStyle: 'compressed' }).on('error', this.sass.logError))
    .pipe(this.rename('ngx-normalize.css'));

    let _ngxCssStream = this.gulp.src('./cores/styles/ngx.scss');
    if(_envt.minify){
      _ngxCssStream = _ngxCssStream
      .pipe(this.sass({ outputStyle: 'compressed' }).on('error', this.sass.logError));
    }
    else {
      _ngxCssStream = _ngxCssStream
      .pipe(this.sass({ outputStyle: 'expanded' }).on('error', this.sass.logError));
    }

    return this.mergeStream(
      _ngxNormalizeStream,
      _ngxCssStream
    )
    .pipe(this.gulp.dest(_envt.getCssDest()));
  }
}