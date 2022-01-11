import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  datos: any = [];
  nombre: any = [];
  cargo: any = [];
  empresa: any = [];
  nit: any = [];
  capa: any = [];
  segmento: any = [];

  constructor(private dataservices: DataService) { }

  ngOnInit(): void {
    this.datos = this.dataservices.createUsuarioDb();
    this.nombre = this.datos.usuario[0].name;
    this.cargo = this.datos.usuario[0].cargo;
    this.empresa = this.datos.usuario[1].nombre;
    this.nit = this.datos.usuario[1].nit;
    this.capa = this.datos.usuario[1].capa;
    this.segmento = this.datos.usuario[1].segmento;
    console.log(this.datos.usuario[1].segmento);
  }

}
