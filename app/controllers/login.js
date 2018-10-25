import Ember from 'ember';

export default Ember.Controller.extend({
		actions:{
			submitLogin()
		{
			var usuario= this.get('username');
			if(usuario==="1" && this.get('password')==="1"){
					this.transitionToRoute('auth');	
				console.log("usuario valido");
			}
			else if(usuario==="2" && this.get('password')==="2"){
					this.transitionToRoute('authStudent');	
				console.log("usuario valido");
			}
			else if(usuario==="3" && this.get('password')==="3"){
					this.transitionToRoute('authTeacher');	
				console.log("usuario valido");
			}
			else {
				alert('invalid user');
				console.log("Usuario invalido");
			}

			this.set('user',"");
			this.set('password',"");
			
		}
		}
});
