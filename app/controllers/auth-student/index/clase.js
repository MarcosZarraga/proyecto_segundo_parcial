import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		studentAddClass()
		{

		alert("Clase añadida correctamente");
		this.transitionToRoute('/authStudent/index');	
		}
	}
});
