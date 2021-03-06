import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  //função login
  loginUser(
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  //função registrar
  signupUser(
    email: string, 
    password: string
    ): Promise<any> {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
  }

  //reset password

  resetPassword(email:string): Promise<void> {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  //função logout

  logoutUser():Promise<void> {
    return firebase.auth().signOut();
  }


  
}
