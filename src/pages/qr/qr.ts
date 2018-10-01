import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the QrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qr',
  templateUrl: 'qr.html',
})
export class QrPage {

  data = { };
  option:BarcodeScannerOptions;
  constructor(public navCtrl: NavController, public navParams: NavParams, public barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrPage');
  }

  scanner(){
    this.option = {      
      prompt:"Escanear el codigo"
    }
    this.barcodeScanner.scan(this.option).then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.data = barcodeData;
     }).catch(err => {
         console.log('Error', err);
     });
  }

}
