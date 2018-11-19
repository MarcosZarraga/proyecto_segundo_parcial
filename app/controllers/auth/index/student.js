import Ember from 'ember';

export default Ember.Controller.extend({

 
	actions:{
		setLesson(lesson){
			// var nombre= lesson.id
			this.set('current_activity', lesson);

		},
		addStudent(){
			var contract= this.get("model.contract");
			var current_activity= this.get("current_activity");
			var name = this.get("name");
			var last_name= this.get("last_name");
			var phone= this.get("phone");
			var email= this.get("email");
			if(last_name && name && phone && email)
			{		
				let studentS = this.store.createRecord('student', {current_activity:current_activity, name:name , last_name:last_name, phone:phone, email:email})
				studentS.save().then(()=>{
					 let contratoTemp =  this.store.createRecord('student-contract', {student:studentS, contract:contract, start_date:contract.get("contract_signature_date")})
						contratoTemp.save().then(()=>{
					 		studentS.set('student_contract', contratoTemp);
					 		studentS.save().then(()=>{
					 			this.transitionToRoute("auth.index");
					 		});
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
