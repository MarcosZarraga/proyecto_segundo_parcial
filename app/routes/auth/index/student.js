import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
	model(){
		return RSVP.hash(
				{
					student: this.store.findAll('student'),
					lesson: this.store.findAll('lesson')
				}
			);
		// return this.store.findRecord('meal', params.id),
		

	}
});
