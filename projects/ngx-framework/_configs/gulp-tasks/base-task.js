export class BaseTask {
  constructor(params) {
    Object.keys(params).map(prop => {
      if(prop === 'plugins'){
        Object.keys(params.plugins).map(plugin => {
          if(plugin === 'yargs'){
            this.args = params.plugins.yargs.argv;
          }
          else{
            this[plugin] = params.plugins[plugin];
          }
        });
      }
      else{
        this[prop] = params[prop];
      }
    });
  }

  run() {
    throw 'run() is required for implement';
  }

  getStream() {
    return () => this.run();
  }
}