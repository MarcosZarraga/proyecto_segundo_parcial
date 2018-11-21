import DS from 'ember-data';

export default DS.Model.extend({
	start_date:DS.attr("date"),
	classroom:DS.attr("string"),
	school:DS.belongsTo("school"),
	teacher:DS.belongsTo("tecaher")
});
