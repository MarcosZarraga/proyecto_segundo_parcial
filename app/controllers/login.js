import Ember from 'ember';

export default Ember.Controller.extend({
		actions:{
			submitLogin()
		{
			var usuario= this.get('username');
			if(usuario==="1271642" && this.get('password')==="1234"){
					this.transitionToRoute('auth');	
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
