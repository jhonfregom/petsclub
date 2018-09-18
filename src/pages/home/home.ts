import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  facebook = {
    iniciosesion: false,
    nombre: '',
    imagen: '',
    correo: ''
  }

  constructor(private fire: AngularFireAuth, public navCtrl: NavController) {


  }

  registrar_usuario(){    
    this.navCtrl.push('RegistrarUsuarioPage');
  }
  iniciar_sesion(){    
    this.navCtrl.push('PerfilAnimalistaPage');
  }

  iniciarSesionFacebook(){
    this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then( res => {
      this.facebook.iniciosesion = true;
      this.facebook.nombre = res.user.displayName;
      this.facebook.imagen = res.user.photoURL;
      this.facebook.correo = res.user.email;
      console.log(res);
    })
  }

  cerrarSesionFacebook(){
    this.fire.auth.signOut();
    this.facebook.iniciosesion = false;
  }

}
