export class BaseEnvt {
  constructor() {
    this.minify = false;
    this.distPath = './dist';
    this.jsPath = 'js';
    this.cssPath = 'css';
  }

  getJsDest(path) {
    return this.getDest(this.jsPath, path);
  }

  getCssDest(path) {
    return this.getDest(this.cssPath, path);
  }

  getDest(...args) {
    let _path = '';
    args.forEach(arg => { 
      if(arg){ _path += `/${arg}`; }
    });

    return `${this.distPath}${_path}`;
  }
}