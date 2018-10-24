import DS from 'ember-data';

export default DS.Model.extend({
	current_activity_id: DS.attr('number'),
	name: DS.attr('string'),
	last_name: DS.attr('string'),
	phone: DS.attr('number')

});
