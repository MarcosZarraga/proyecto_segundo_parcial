import Ember from 'ember';

export default Ember.Controller.extend({

 
	actions:{
		setLesson(lesson){
			// var nombre= lesson.id
			this.set('current_activity', lesson);

		},
		addStudent(){
			var current_activity= this.get("current_activity");
			console.log(current_activity);
			var name = this.get("name");
			var last_name= this.get("last_name");
			var phone= this.get("phone");
			var email= this.get("email");
			if(last_name && name && phone && email)
			{		
				this.store.createRecord('student', {current_activity:current_activity, name:name , last_name:last_name, phone:phone, email:email}).save().then(()=>{
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
