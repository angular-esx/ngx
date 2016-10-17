import { BaseEnvt } from './_envt';

export class ProductionEnvt extends BaseEnvt {
  constructor() {
    super();

    this.minify = true;
  }
}