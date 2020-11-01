import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from "@angular/router";

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
    return this.auth.signInWithEmailAndPassword(email, password).then((user) => {
      this.router.navigateByUrl('/');
    }).catch(() => {
      alert('Erro ao tentar fazer o login.')
    });
  }
}
