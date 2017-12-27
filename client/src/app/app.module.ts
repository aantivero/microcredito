import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MyOwnCustomMaterialModule } from './own.module';
import { CuentaService } from './shared/cuenta/cuenta.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { CuentaListComponent } from './cuenta-list/cuenta-list.component';
import { CuentaEditComponent } from './cuenta-edit/cuenta-edit.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { OktaCallbackComponent, OktaAuthModule } from '@okta/okta-angular';
import { AuthInterceptor } from './shared/okta/auth.interceptor';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
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
  },
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

const config = {
  issuer: 'https://dev-472261.oktapreview.com/oauth2/default',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '0oadf3rz2xNcT5AI10h7'
}

@NgModule({
  declarations: [
    AppComponent,
    CuentaListComponent,
    CuentaEditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    OktaAuthModule.initAuth(config)
  ],
  providers: [CuentaService, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
