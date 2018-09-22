import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, IonicPage } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Profile} from '../../models/profile';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase} from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-edit-perfil',
  templateUrl: 'edit-perfil.html',

})
export class EditPerfilPage {
  myForm: FormGroup;
  profile ={} as Profile;
  constructor( private afAuth: AngularFireAuth, 
    private afDatabase: AngularFireDatabase,
    public formBuilder: FormBuilder, 
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public navParams: NavParams) {

      this.myForm = this.formBuilder.group({
        id: ['', Validators.required],
        name: ['', Validators.required]
      });
    }
    addProfile(){
      this.afAuth.authState.take(1).subscribe(auth =>{
        this.afDatabase.object(`perfil/${auth.uid}`).set(this.profile)
        .then(() => this.navCtrl.setRoot('PerfilAnimalistaPage'))
      })
    }
}
