import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
			eliminarCont(contract){
			var resultado=confirm("¿Seguro que quieres borrar?");
			if (resultado) {
				contract.destroyRecord().then(()=>{
					alert("Suscriptor borrado correctamente");
				});
			}
		},
		editarCont(contract){
			var resultado=confirm("¿Deseas actualizar esta información?");
			if (resultado) {
				contract.save().then(()=>{
					alert("Registro editado correctamente");
				});
			}
		},

		addStudent(idContract){
			this.transitionToRoute("auth.index.student",idContract);
		}
	}
});
