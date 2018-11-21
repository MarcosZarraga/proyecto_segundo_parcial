import DS from 'ember-data';

export default DS.Model.extend({
	student: DS.belongsTo('student'),
	lesson: DS.belongsTo('lesson'),
	activity_type: DS.belongsTo('activity-type')
});