import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
  queryParams = ['test'];

  appName = 'Ember Twiddle';

  @service router;
  
  @action
  testTransition() {
    console.log('should transition to ?test=foo');
    this.router.transitionTo('/?test=foo');
  }
}
