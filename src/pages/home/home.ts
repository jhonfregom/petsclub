import { Component } from '@angular/core';
import { NavController,LoadingController, Loading, AlertController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';


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

  myForm: FormGroup;
  user: Observable<firebase.User>;
  public loading:Loading;

  constructor(private fire: AngularFireAuth, public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController
    ) {
      this.myForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      });
      this.user = fire.authState;

  }
  loginUser(){

    console.log("Email:" + this.myForm.value.email);
    console.log("Password:" + this.myForm.value.password);
   

    this.fire.auth.signInWithEmailAndPassword(this.myForm.value.email, this.myForm.value.password).then(() => {
      console.log("User logging");
      this.navCtrl.setRoot('PerfilAnimalistaPage');
    }, (err) => {
      this.loading.dismiss().then( () => {
        let alert = this.alertCtrl.create({
          message: err.message,
          buttons: [
            {
              text: "Ok",
              role: 'cancel'
            }
          ]
        });
        alert.present();
      });
    });

    this.loading = this.loadingCtrl.create({
      dismissOnPageChange: true,
    });
    this.loading.present();
  }
  registrar_usuario(){    
    this.navCtrl.push('RegistrarUsuarioPage');
  }
  
  iniciarSesionFacebook(){
    this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then( res => {
      /*this.facebook.iniciosesion = true;
      this.facebook.nombre = res.user.displayName;
      this.facebook.imagen = res.user.photoURL;
      */
      this.navCtrl.setRoot('PerfilAnimalistaPage');
      console.log(res);
    })
  }

  cerrarSesionFacebook(){
    this.fire.auth.signOut();
    this.facebook.iniciosesion = false;
  }
}
