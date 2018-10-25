import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		addTeacher(){
			var name = this.get("name");
			var last_name= this.get("last_name");
			var phone= this.get("phone");
			if(last_name && name && phone)
			{		
				this.store.createRecord('teacher', {name:name , last_name:last_name, phone:phone}).save().then(()=>{
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
		eliminarTeacher(teacher){
			var resultado=confirm("¿Seguro que quieres borrar?");
			if (resultado) {
				teacher.destroyRecord().then(()=>{
					alert("Alumno borrado correctamente");
				});
			}
		},
		editarTeacher(teacher){
			var resultado=confirm("¿Deseas actualizar esta información?");
			if (resultado) {
				teacher.save().then(()=>{
					alert("Registro editado correctamente")
				});
			}
		}
	}
});
