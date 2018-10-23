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
					alert("Registro editado correctamente")
				});
			}
		}
	}
});
