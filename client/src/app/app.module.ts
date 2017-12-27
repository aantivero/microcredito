import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MyOwnCustomMaterialModule } from './own.module';
import { CuentaService } from './shared/cuenta/cuenta.service';
import { HttpClientModule } from '@angular/common/http';
import { CuentaListComponent } from './cuenta-list/cuenta-list.component';
import { CuentaEditComponent } from './cuenta-edit/cuenta-edit.component';
import { FormsModule} from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/cuenta-list',
    pathMatch: 'full'
  },
  {
    path: 'cuenta-list',
    component: CuentaListComponent
  },
  {
    path: 'cuenta-add',
    component: CuentaEditComponent
  },
  {
    path: 'cuenta-edit/:id',
    component: CuentaEditComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CuentaListComponent,
    CuentaEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CuentaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
