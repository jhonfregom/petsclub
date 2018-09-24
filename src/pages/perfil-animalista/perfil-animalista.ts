import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { HomePage } from '../home/home';
import { AngularFireAuth} from 'angularfire2/auth'
import { AngularFireDatabase, AngularFireObject} from 'angularfire2/database';
import { Profile } from '../../models/profile';


/**
 * Generated class for the PerfilAnimalistaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil-animalista',
  templateUrl: 'perfil-animalista.html',
})
export class PerfilAnimalistaPage {

profileData:  AngularFireObject<Profile>



  constructor( private afAuth: AngularFireAuth, 
    private afDatabase: AngularFireDatabase,
    private toast: ToastController,
    public navCtrl: NavController, 
    public navParams: NavParams,
   ) {
  }

  ionViewDidLoad() {
    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid){
      this.toast.create({
        message:`Bienvenido a PetsClub, /${data.email}`,
        duration: 3000
      }).present();
        this.afDatabase.object(`perfil/${data.uid}`)
    }
    else{
      this.toast.create({
        message:'Error de usuario o contraseña}',
        duration: 3000
      }).present();
    }
  })
}
 logout(){

    this.navCtrl.push(HomePage);
}
}


