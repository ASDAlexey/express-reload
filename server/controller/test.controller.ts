import { controller, httpGet, interfaces } from 'inversify-express-utils';

@controller('/')
export class TestController implements interfaces.Controller {
  @httpGet('/')
  async index() {
    return 'Hello';
  }
}
