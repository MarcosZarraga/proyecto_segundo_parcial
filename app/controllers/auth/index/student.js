import Ember from 'ember';

export default Ember.Controller.extend({

	// lessonsList: Ember.computed(function () {//funcion que recupera todos los registros de las unidades para mostrarlos en el power-select para el filtrado de informacion
 //    	return this.get('store').findAll('lesson');

 //  }),

 	lessonSelected: null,
 	
 
	actions:{
		selectedLesson(selected){
			this.set('lessonSelected', selected)
		},
		addStudent(){
			var current_activity_id = this.get("current_activity_id");
			var name = this.get("name");
			var last_name= this.get("last_name");
			var phone= this.get("phone");
			var email= this.get("email");
			if(last_name && name && phone)
			{		
				this.store.createRecord('student', {current_activity_id:current_activity_id, name:name , last_name:last_name, phone:phone, email:email}).save().then(()=>{
					this.transitionToRoute("/auth/index");
				});
			}
			else
			{
				alert("Completar todos los campos");

			}
			this.set("name","");
			this.set("lastName","");
		}
		
	}
});
