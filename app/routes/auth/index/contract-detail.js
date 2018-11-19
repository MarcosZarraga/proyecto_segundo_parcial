import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
		model(){
		return RSVP.hash(
				{
					contract: this.store.findAll('contract'),
					student: this.store.findAll('student'),
				}
			);
		// return this.store.findRecord('meal', params.id),
		

	}
});
