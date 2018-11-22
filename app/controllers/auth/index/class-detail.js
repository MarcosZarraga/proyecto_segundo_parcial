import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		addReservation(){
			var grade = this.get("grade");
			var status = this.get("status");
			if(grade && status==1)
			{		
				this.store.createRecord('reservation', {name:name , status:0}).save().then(()=>{
					alert("Información añadida");
					this.transitionToRoute("auth.index");
				});
			}
			else if(grade && status==0)
			{
				this.store.createRecord('reservation', {name:name , status:1}).save().then(()=>{
					alert("Información añadida");
					this.transitionToRoute("auth.index");
				});
			}
			else
			{
				alert("Completar todos los campos");
			}


		}
	}
});
