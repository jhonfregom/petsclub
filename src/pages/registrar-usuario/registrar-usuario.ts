import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
@IonicPage()
@Component({
  selector: 'page-registrar-usuario',
  templateUrl: 'registrar-usuario.html',
})
export class RegistrarUsuarioPage {
  testCheckboxOpen: boolean;
  testCheckboxResult;
  mycontrolGroup: FormGroup;
  datosUsuario:any[] = [];

constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
private fb: FormBuilder) {
    this.mycontrolGroup = this.fb.group({
    name: [this.datosUsuario['name'],[Validators.required]],
    id:  [this.datosUsuario['id'], [Validators.required, Validators.minLength(5),Validators.maxLength(12)]],
    email: [this.datosUsuario['email'], [Validators.required, Validators.email]],
    password: [this.datosUsuario['password'], [Validators.required]],
    cpassword: [this.datosUsuario['cpassword'], [Validators.required]],  
  })
  ;
}

saveData(){
  console.log(this.datosUsuario)
  let alerta = this.alertCtrl.create({
    title:"Datos enviados!",
    subTitle:"Información",
    message:"Los registros fueron enviados correctamente",
    buttons:['Ok']
  });
  alerta.present()
  this.mycontrolGroup.reset()
  this.datosUsuario =[];
 }



/*
doCheckbox() {
  let alert = this.alertCtrl.create();
  alert.setTitle('Términos y condiciones');
  alert.setMessage('INFORMACIÓN RELEVANTE');
  alert.setMessage('Es requisito necesario para la adquisición de los productos que se ofrecen en este sitio, que lea y acepte los siguientes Términos y Condiciones que a continuación se redactan. El uso de nuestros servicios así como la compra de nuestros productos implicará que usted ha leído y aceptado los Términos y Condiciones de Uso en el presente documento. Todas los productos  que son ofrecidos por nuestro sitio web pudieran ser creadas, cobradas, enviadas o presentadas por una página web tercera y en tal caso estarían sujetas a sus propios Términos y Condiciones. En algunos casos, para adquirir un producto, será necesario el registro por parte del usuario, con ingreso de datos personales fidedignos y definición de una contraseña.');
  alert.addInput({
    type: 'checkbox',
    label: 'Acepto',
    value: 'value1',
    checked: true
  });
 alert.addButton('Cancelar');
    alert.addButton({
      text: 'OK',
      handler: data => {
        console.log('Checkbox data:', data);
        this.testCheckboxOpen = false;
        this.testCheckboxResult = data;
      }
    });
    alert.present();
  }
  */
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarUsuarioPage');
  }}