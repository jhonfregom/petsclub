import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase} from 'angularfire2/database';
import { Profile} from '../../models/profile';



@IonicPage()
@Component({
  selector: 'page-edit-perfil',
  templateUrl: 'edit-perfil.html',

})
export class EditPerfilPage {

  
profile ={} as Profile;

  constructor(private afAuth: AngularFireAuth, 
    private afDatabase: AngularFireDatabase,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  createProfile(){
    this.afAuth.authState.take(1).subscribe(auth =>{
      this.afDatabase.object(`profile/${auth.uid}`).set(this.profile)
      .then(() => this.navCtrl.setRoot('PerfilAnimalistaPage'))
    })
  }

}
