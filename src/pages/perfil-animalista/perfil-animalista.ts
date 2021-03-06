import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
//import { Profile } from '../../models/profile';
import { Observable } from 'rxjs/Observable';






@IonicPage()
@Component({
  selector: 'page-perfil-animalista',
  templateUrl: 'perfil-animalista.html',
})
export class PerfilAnimalistaPage {

  profileData: Observable<any>;
  correo: String;


  constructor(private afAuth: AngularFireAuth,
    private afDatabase: AngularFireDatabase,
    public navCtrl: NavController,
    public navParams: NavParams,
    private toast: ToastController,
  ) {
  }

  ionViewDidLoad() {
    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid) {
        this.toast.create({
          message: `Bienvenido a PetsClub, /${data.email}`,
          duration: 3000
        }).present();

        console.log('perfil/' + data.uid);
        this.afDatabase.object('perfil/' + data.uid).valueChanges().subscribe(action => {
          this.profileData = action["username"];
        });

      }
      else {
        this.toast.create({
          message: 'Error de usuario o contraseña',
          duration: 3000
        }).present();
      }

    })
  }

  logout() {
    this.afAuth.auth.signOut();
    this.navCtrl.setRoot(HomePage);
  }
}



