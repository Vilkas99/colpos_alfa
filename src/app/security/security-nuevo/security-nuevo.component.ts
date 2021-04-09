import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-security-nuevo',
  templateUrl: './security-nuevo.component.html',
  styleUrls: ['./security-nuevo.component.css']
})
export class SecurityNuevoComponent implements OnInit {

  registro: FormGroup = new FormGroup({
    "nombre": new FormControl("", [Validators.required]),
    "apellido": new FormControl("", [Validators.required]),
    "fecha": new FormControl("", [Validators.required]),
    "tipoUsuario": new FormControl("", [Validators.required]),
    "correo": new FormControl("", [Validators.required, Validators.email]),
    "calle": new FormControl("", [Validators.required]),
    "colonia": new FormControl("", [Validators.required]),
    "codpost": new FormControl("", [Validators.required]),
  })
  
  constructor() { }

  ngOnInit(): void {
  }

  getValues(): any {
    return {
      nombre: this.registro.controls["nombre"].value,
      apellido: this.registro.controls["apellido"].value,
      fecha: this.registro.controls["fecha"].value,
      tipoUsuario: this.registro.controls["tipoUsuario"].value,
      correo: this.registro.controls["correo"].value,
      calle: this.registro.controls["calle"].value,
      colonia: this.registro.controls["colonia"].value,
      codpost: this.registro.controls["codpost"].value,
    }
  }

  sendRegistro(): void {
    console.log(this.getValues())
  }

}
