import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from "@angular/router";
import firebase from "firebase";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private auth: AngularFireAuth,
    private router: Router,
  ) {
  }

  userLogin(email: string, password: string) {
    return this.auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() => {
      return this.auth.signInWithEmailAndPassword(email, password).then((user) => {
        this.router.navigateByUrl('home');
      }).catch(() => {
        alert('Erro ao tentar fazer o login.');
      });
    }).catch();

  }

  userLogout() {
    return this.auth.signOut().then(() => {
      this.router.navigateByUrl('/login')
    }).catch(() => {
      this.router.navigateByUrl('/login')
    });
  }
}
