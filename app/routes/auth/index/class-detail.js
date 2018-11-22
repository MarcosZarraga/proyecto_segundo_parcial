import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
	model(params){
		return RSVP.hash(
				{
					// student: this.store.findRecord('student', params1.id),
					activity: this.store.findRecord('activity', params.id)
				}
			);
		

	}

});
