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
      this.route('student', {path: '/:id'});
      this.route('teacher', {path: '/teacher'});
      this.route('lesson');
      this.route('studentDetail' , {path: 'student-detail/:id'});
      this.route('contract-detail');
    });
  });
  this.route('authStudent', function() {
    this.route('index', function() {
      this.route('clase' );
      this.route('StudentTeacher' ,{path: '/teacher'});
      this.route('inicio',{path: '/'});
      this.route('payments');
    });
  });
  this.route('authTeacher', function() {
    this.route('index', function() {
      this.route('inicio',{path: '/'});
      this.route('cursos');
    });
  });

});

export default Router;
