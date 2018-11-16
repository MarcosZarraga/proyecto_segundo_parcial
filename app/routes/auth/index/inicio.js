import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
	model(){
		return RSVP.hash(
				{
					student: this.store.findAll('student'),
					subscriber: this.store.findAll('subscriber'),
					teacher: this.store.findAll('teacher')
				}
			);
		// return this.store.findRecord('meal', params.id),
		

	}

});
