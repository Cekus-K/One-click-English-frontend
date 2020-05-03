import { Component, OnInit } from '@angular/core';
import {User} from '../../common/user';
import {RegisterService} from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string;
  password: string;
  passwordConfirm: string;
  registerSuccess = false;
  successMessage: string;

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
  }

  handleRegister() {
    this.registerService.addUser(new User(this.username, this.password, this.passwordConfirm)).subscribe(data => {
      this.registerSuccess = true;
      this.successMessage = 'Rejestracja przebiegła pomyślnie: ' + data.username;
    });
  }
}
