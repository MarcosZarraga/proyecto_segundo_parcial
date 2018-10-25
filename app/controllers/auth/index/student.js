import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		addStudent(){
			var current_activity_id = this.get("current_activity_id");
			var name = this.get("name");
			var last_name= this.get("last_name");
			var phone= this.get("phone");
			if(last_name && name && phone)
			{		
				this.store.createRecord('student', {current_activity_id:current_activity_id, name:name , last_name:last_name, phone:phone}).save().then(()=>{
					this.transitionToRoute("/auth/index");
				});
			}
			else
			{
				alert("Completar todos los campos");

			}
			this.set("name","");
			this.set("lastName","");
		},
		eliminarStudent(student){
			var resultado=confirm("¿Seguro que quieres borrar?");
			if (resultado) {
				student.destroyRecord().then(()=>{
					alert("Alumno borrado correctamente");
				});
			}
		},
		editarStudent(student){
			var resultado=confirm("¿Deseas actualizar esta información?");
			if (resultado) {
				student.save().then(()=>{
					alert("Registro editado correctamente")
				});
			}
		}
	}
});
