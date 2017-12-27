import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatIconModule, MatInputModule, MatListModule,
  MatToolbarModule
} from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule, MatIconModule],
  exports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule, MatIconModule],
})
export class MyOwnCustomMaterialModule { }
