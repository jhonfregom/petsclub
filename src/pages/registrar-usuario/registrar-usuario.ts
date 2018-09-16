import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Loading, LoadingController } from 'ionic-angular';
import { AngularFireAuth} from "angularfire2/auth";
import { User } from '../../models/user';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
@IonicPage()
@Component({
  selector: 'page-registrar-usuario',
  templateUrl: 'registrar-usuario.html',
})
export class RegistrarUsuarioPage {
    user = {} as User;
    myForm: FormGroup;
    public loading: Loading;
    constructor(private alertCtrl: AlertController, private afAuth: AngularFireAuth, 
      public formBuilder: FormBuilder,
      public navCtrl: NavController, 
      public loadingCtrl : LoadingController,
      public navParams: NavParams) {
      this.myForm = this.formBuilder.group({
        email: ['',Validators.required],
        password:['',Validators.required]
      });
    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad RegistrarUsuarioPage');
    }

  register() {

    console.log("Email:" + this.myForm.value.email);
    console.log("Password:" + this.myForm.value.password);


    this.afAuth.auth.createUserWithEmailAndPassword(this.myForm.value.email, this.myForm.value.password)
      .then(
        res => {
          this.navCtrl.setRoot('EditPerfilPage');
        }, error => {
          this.loading.dismiss().then(() => {
            let alert = this.alertCtrl.create({
              message: error.message,
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

}




  