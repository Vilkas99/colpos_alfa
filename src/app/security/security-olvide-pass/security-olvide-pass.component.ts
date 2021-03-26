import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security-olvide-pass',
  templateUrl: './security-olvide-pass.component.html',
  styleUrls: ['./security-olvide-pass.component.css']
})
export class SecurityOlvidePassComponent implements OnInit {

  btnText: string = "Confirmar";
  dirCorreo: string = "";
  correo: string = "";


  constructor() { }

  ngOnInit(): void {
  }

  saveCorreo() {
    this.correo = this.dirCorreo;
  }

}
