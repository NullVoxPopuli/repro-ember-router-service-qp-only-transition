import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
  queryParams = ['test'];

  @service router;

  get currentUrl() {
    return this.router.currentURL;
  }

  get qps() {
    return JSON.stringify(this.router.currentRoute.queryParams, null, 2);
  }

  @action
  stepOne() {
    console.log('should transition to /some-route/');
    this.router.transitionTo('/some-route/');
  }

  @action
  stepTwo() {
    console.log('should transition to /some-route/?test=foo');
    this.router.transitionTo('/some-route/?test=foo');
  }
}
