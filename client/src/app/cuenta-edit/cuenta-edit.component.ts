import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Router} from '@angular/router';
import {CuentaService} from '../shared/cuenta/cuenta.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-cuenta-edit',
  templateUrl: './cuenta-edit.component.html',
  styleUrls: ['./cuenta-edit.component.css']
})
export class CuentaEditComponent implements OnInit, OnDestroy {
  cuenta: any = {};
  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private cuentaService: CuentaService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.cuentaService.get(id).subscribe((cuenta: any) => {
          if (cuenta) {
            this.cuenta = cuenta;
            this.cuenta.href = cuenta._links.self.href;
          } else {
            console.log(`La cuenta con id '{id}' no se encuentra, vuelve a la lista principal`);
            this.gotoList();
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/cuenta-list']);
  }
  save(form: NgForm) {
    this.cuentaService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
  remove(href) {
    this.cuentaService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
}
