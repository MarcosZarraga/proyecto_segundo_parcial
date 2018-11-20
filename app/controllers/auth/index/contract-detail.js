import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		addStudent(idContract){
			this.transitionToRoute("auth.index.student" , idContract);
		}
	}
});
