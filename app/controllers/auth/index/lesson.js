import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		addLesson(){
			var name = this.get("name");
			var level_id= this.get("level_id");
			if(level_id && name)
			{		
				this.store.createRecord('lesson', {name:name , level_id:level_id}).save().then(()=>{
					this.transitionToRoute("/auth/index");
				});
			}
			else
			{
				alert("Completar todos los campos");

			}
			this.set("name","");
			this.set("level_id","");
		},
		eliminarLesson(lesson){
			var resultado=confirm("¿Seguro que quieres borrar?");
			if (resultado) {
				lesson.destroyRecord().then(()=>{
					alert("Clase borrado correctamente");
				});
			}
		},
		editarLesson(lesson){
			var resultado=confirm("¿Deseas actualizar esta información?");
			if (resultado) {
				lesson.save().then(()=>{
					alert("Registro editado correctamente");
				});
			}
		}
	}
});
