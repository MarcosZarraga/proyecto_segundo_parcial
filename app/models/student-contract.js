import DS from 'ember-data';

export default DS.Model.extend({
	contract:DS.belongsTo('contract'),
	student:DS.belongsTo('student'),
	start_date: DS.attr('string')
});