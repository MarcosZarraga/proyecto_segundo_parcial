import Ember from 'ember';

export default Ember.Controller.extend({
	lessonSelected:null,

	activities: Ember.computed('lessonSelected', function(){
		return this.store.query('activity', {lesson_id:this.get('lessonSelected.id')});
	}),
	actions:{
		changeLesson(student, lesson){

			student.set('current_activity', lesson);
			student.save().then(()=>
			{
				this.set('lessonSelected', lesson)
				alert("Actividad Modificada");
					 			// this.transitionToRoute("auth.index");

			});
			
		}
	}
});
