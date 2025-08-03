import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})

export class Login {
  email : string = ``;
  password : string = ``;

  constructor() {}

  onSubmit() {
    if(this.password === "d" && this.email === "d@gmail.com") {
      console.log("Login successful");
      // Here you would typically handle the login logic, e.g., call an authentication service
    }
  }
}
