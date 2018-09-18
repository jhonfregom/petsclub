import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';


import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
/*
  Generated class for the SessionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SessionProvider {

  
  user: Observable<firebase.User>;
  correo: string;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;

}

loginUser(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
}

getUser() {

    let afUsuario = this.afAuth.auth.currentUser;
    this.correo = afUsuario.email;
    console.log(this.correo);
    return this.correo;
}
}
