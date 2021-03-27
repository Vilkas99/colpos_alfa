import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-security-perfil-editar',
  templateUrl: './security-perfil-editar.component.html',
  styleUrls: ['./security-perfil-editar.component.css']
})
export class SecurityPerfilEditarComponent implements OnInit {

  editarPerfil: FormGroup = new FormGroup({
    "nombre": new FormControl("", Validators.required),
    "apellido": new FormControl("", Validators.required),
    "direcc": new FormControl("", Validators.required),
  });

  form: FormGroup | undefined;

  constructor() {
    this.form = this.editarPerfil;
    this.loadData();
  }

  ngOnInit(): void {
  }

  editar(){
    console.log(this.form.value);
  }

  cancelar(){
    console.log("Cancelado");
  }

  loadData() {
    this.form!.reset({
      "nombre": 'Dany',
      "apellido": 'Hdz',
      "direcc": 'ITESM Campus Puebla',
    });
  }

}

