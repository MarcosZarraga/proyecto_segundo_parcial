import DS from 'ember-data';

export default DS.Model.extend({
	capacity: DS.attr('number'),
	activity_type: DS.belongsto("activity-type"),
	rule: DS.hasMany("rule")
});
