import Ember from 'ember';
export default Ember.Controller.extend({
	actions:{
		addTeacher(){
			var name = this.get("name");
			var last_name= this.get("last_name");
			var phone= this.get("phone");
			var email= this.get("email");
			if(last_name && name && phone)
			{		
				this.store.createRecord('teacher', {mail:email, name:name , last_name:last_name, phone:phone}).save().then(()=>{
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
