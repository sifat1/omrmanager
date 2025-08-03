import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})


export class Register {

  name = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
  conformPassword = new FormControl('');

  submit() {
    console.log('Name:', this.name.value);
    console.log('Email:', this.email.value);
    if(this.password.value !== this.conformPassword.value) {
      console.error('Passwords do not match');
    } else {
      console.log('Registration successful with password');
    }
  }

}
