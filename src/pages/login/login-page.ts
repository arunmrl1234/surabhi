import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';

@Component({
  selector: 'page-login',
  templateUrl: 'login-page.html'
})
export class LoginPage {
  constructor(public navCtrl: NavController) {
    
  }
  itemTapped(event) {
    //console.log("a")
    this.navCtrl.push(HelloIonicPage);
  }
}
