import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
		model(params){
		return RSVP.hash(
				{
					lesson: this.store.findAll('lesson'),
					student: this.store.findRecord('student', params.id),

				}
			);
		// return this.store.findRecord('meal', params.id),
		

	}
});
