import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { HomePage } from '../home/home';


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



  constructor( public navCtrl: NavController, 
    public navParams: NavParams,
    public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilAnimalistaPage');
  }

  
  logout(){

    this.navCtrl.push(HomePage);
}
}


