export class AuthService {
  isAuth = false;

  signIn() {
    return this.isAuth = true

  }

  signOut() {
    return this.isAuth = false
  }
}