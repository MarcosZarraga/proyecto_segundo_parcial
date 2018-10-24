import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login',{path: '/'});
  this.route('auth', function() {
    this.route('index', function() {
      this.route('subscriber', {path: '/sub'});
      this.route('inicio' , {path: '/'});
      this.route('student');
    });
  });
});

export default Router;
