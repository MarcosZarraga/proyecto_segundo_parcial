import DS from 'ember-data';

export default DS.Model.extend({
	class:DS.belongsTo("class"),
	activity:DS.belongsTo("activity"),
	student:DS.belongsTo("student"),
	grade:DS.attr("number"),
	 status:DS.attr("bool")


});
