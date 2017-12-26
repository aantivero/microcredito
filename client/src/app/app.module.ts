import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MyOwnCustomMaterialModule } from './own.module';
import { CuentaService } from './shared/cuenta/cuenta.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule,
    HttpClientModule
  ],
  providers: [CuentaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
