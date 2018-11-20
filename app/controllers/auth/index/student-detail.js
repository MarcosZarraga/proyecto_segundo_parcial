import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		changeLesson(student, lesson){

			student.set('current_activity', lesson);
					 		student.save().then(()=>{
					 			alert("Actividad Modificada")
					 		});
		}
	}
});
