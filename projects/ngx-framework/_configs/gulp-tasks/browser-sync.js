import { BaseTask } from './base-task';
import { Envt } from '../envts';

export class BrowserSyncTask extends BaseTask {
  run() {
    let _envt = new Envt(this.args);

    this.browserSync({
      server: {
        baseDir: _envt.distPath,
        index: 'index.html'
      },
      port: 8080,
      open: true,
      notify: false
    });
  }
}