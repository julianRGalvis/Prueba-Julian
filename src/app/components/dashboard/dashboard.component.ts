import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  datos: any = [];


  viewalert: boolean = false;
  constructor(private dataservices: DataService) { }

  ngOnInit(): void {
    this.datos = this.dataservices.createUsuarioDb();

  }

  alertButton(valor: any) {
    if (valor == 1) {
      this.viewalert = true;
    } else if (valor == 2) {
      this.viewalert = false;
    }

  }

}
