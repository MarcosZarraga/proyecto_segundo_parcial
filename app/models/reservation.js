import DS from 'ember-data';

export default DS.Model.extend({
	lecture:DS.belongsTo("lecture"),
	activity:DS.belongsTo("activity"),
	student:DS.belongsTo("student"),
	grade:DS.attr("number"),
	status:DS.attr("number")


});
