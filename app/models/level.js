import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	lesson: DS.hasMany('lesson')
});