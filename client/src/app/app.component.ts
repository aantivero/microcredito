import { Component } from '@angular/core';
import {OktaAuthService} from '@okta/okta-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Microcreditos';
  constructor(private oktaAuth: OktaAuthService) {}
}
