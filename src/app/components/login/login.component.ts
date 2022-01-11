import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  loginResp: any;
  datos: any = [];
  nombre: any = [];
  cargo: any = [];
  viewalert: boolean = false;
  viewalert2: boolean = false;


  constructor(private ruta: Router, private dataservices: DataService) {

    this.formLogin = new FormGroup({
      'usuario': new FormControl('', [Validators.required, Validators.minLength(6)])

    });
  }

  ngOnInit(): void {
    this.datos = this.dataservices.createUsuarioDb();
    console.log(this.datos);
    localStorage.setItem("nombre", this.datos.usuario[0].name);
    localStorage.setItem("cargo", this.datos.usuario[0].cargo);
    this.nombre = this.datos.usuario[0].name;
    this.cargo = this.datos.usuario[0].cargo;
  }




  validar() {
    if (this.formLogin.value.usuario != this.datos.usuario[0].usuario) {
      this.formLogin.reset();
      this.viewalert = true;

    } else {
      this.ruta.navigateByUrl("/dashboard");
    }
  }

}
