import { Component, OnInit } from '@angular/core';
import { CuentaService } from '../shared/cuenta/cuenta.service';

@Component({
  selector: 'app-cuenta-list',
  templateUrl: './cuenta-list.component.html',
  styleUrls: ['./cuenta-list.component.css']
})
export class CuentaListComponent implements OnInit {
  cuentas: Array<any>;

  constructor(private cuentaService: CuentaService) { }

  ngOnInit() {
    this.cuentaService.getAll().subscribe(data => {
      this.cuentas = data;
    });
  }

}
