import DS from 'ember-data';

export default DS.Model.extend({
	student: DS.hasMany('student'),
	lesson: DS.belongsTo('lesson'),
	activity_type: DS.belongsTo('activity-type')
});