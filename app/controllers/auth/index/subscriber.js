import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		addSubs(){
			var name = this.get("name");
			var last_name= this.get("lastName");
			var contract_signature_date=this.get("contract_signature_date");
			if(last_name && name)
			{		
				this.store.createRecord('subscriber', {name:name , last_name:last_name}).save().then((subscriber)=>{
					this.store.createRecord('contract', {subscriber_id:subscriber.id , contract_signature_date:contract_signature_date}).save().then(()=>{
						this.transitionToRoute("/auth/index");
				});
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
