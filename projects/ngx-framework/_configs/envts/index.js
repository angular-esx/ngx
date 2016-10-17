import { BaseEnvt } from './_envt';
import { DeverlopEnvt } from './envt.develop';
import { ProductionEnvt } from './envt.production';

export class Envt extends BaseEnvt {
  constructor(options) {
    super();
    
    let _envt;

    if(!options.envt){ 
      _envt = new DeverlopEnvt(); 
    }
    else {
      switch(options.envt){
        case 'develop':
          _envt = new DeverlopEnvt();
          break;
        case 'production':
          _envt = new ProductionEnvt();
          break;
        default:
          throw `Not found envt: ${options.envt}`;
      }
    }

    Object.keys(_envt).map(prop => {
      if(_envt[prop] && options[prop]){
        this[prop] = options[prop];
      }
      else if(_envt[prop] && !options[prop]){
        this[prop] = _envt[prop];
      }
    });
  }
}