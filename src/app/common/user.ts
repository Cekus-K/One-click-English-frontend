export class User {
  username: string;
  password: string;
  passwordConfirm: string;

  constructor(username: string, password: string, passwordConfirm: string) {
    this.username = username;
    this.password = password;
    this.passwordConfirm = passwordConfirm;
  }
}
