import DS from 'ember-data';

export default DS.Model.extend({
	 subscriber_id:DS.attr('number'),
	 contract_signature_date:DS.attr('date')


});
