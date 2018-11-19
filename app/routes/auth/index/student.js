import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
	model(params){
		return RSVP.hash(
				{
					student: this.store.findAll('student'),
					lesson: this.store.findAll('lesson'),
					contract: this.store.findRecord('contract', params.id)

				}
			);
		// return this.store.findRecord('meal', params.id),
		

	}
});
