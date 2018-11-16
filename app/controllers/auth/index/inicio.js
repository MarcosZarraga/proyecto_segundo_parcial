import Ember from 'ember';

export default Ember.Controller.extend({
	actions :{
		eliminarSub(subscriber){
			var resultado=confirm("¿Seguro que quieres borrar?");
			if (resultado) {
				subscriber.destroyRecord().then(()=>{
					alert("Suscriptor borrado correctamente");
				});
			}
		},
		editarSub(subscriber){
			var resultado=confirm("¿Deseas actualizar esta información?");
			if (resultado) {
				subscriber.save().then(()=>{
					alert("Registro editado correctamente");
				});
			}
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
					alert("Registro editado correctamente");
				});
			}
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
					alert("Registro editado correctamente");
				});
			}
		}

	}
});
