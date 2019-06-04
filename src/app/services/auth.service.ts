import { Injectable } from '@angular/core';
import { AngularFireAuth } from  "@angular/fire/auth";
import { auth } from  'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public  afAuth:  AngularFireAuth) { }

  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
    }  
  
  AuthLogin(provider) {
      return this.afAuth.auth.signInWithPopup(provider)
      .then((result) => {
      console.log('You have been successfully logged in!');
      }).catch((error) => {
      console.log(error)
      })
      }

//   async  loginWithGoogle(){
//     // await  this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
// }
}
