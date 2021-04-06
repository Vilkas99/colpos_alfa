import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-security-login',
  templateUrl: './security-login.component.html',
  styleUrls: ['./security-login.component.css']
})
export class SecurityLoginComponent implements OnInit {

  login: FormGroup = new FormGroup({
    "correo": new FormControl("", [Validators.required, Validators.email]),
    "password": new FormControl("", [Validators.required])
  })
  
  constructor() { }

  ngOnInit(): void {
  }

  getValues(): any {
    return {
      correo: this.login.controls["correo"].value,
      password: this.login.controls["password"].value
    }
  }

  sendLogin(): void {
    console.log(this.getValues())
  }


}
