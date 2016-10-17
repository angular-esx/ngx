import { BaseWebpack } from './_webpack';
import { DeverlopWebpack } from './webpack.develop';

export class WebpackConfig extends BaseWebpack {
  constructor(gulpPlugins) {
    super(gulpPlugins);
    
    let _envt = gulpPlugins.yargs.argv.envt;
    let _webpack;
    if(!_envt){ 
      _webpack = new DeverlopWebpack(gulpPlugins); 
    }
    else {
      switch(_envt){
        case 'develop':
          _webpack = new DeverlopWebpack(gulpPlugins);
          break;
        default:
          throw `Not found envt: ${_envt}`;
      }
    }

    Object.keys(_webpack).map(prop => {
      this[prop] = _webpack[prop];
    });
  }
}