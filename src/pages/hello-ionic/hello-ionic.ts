import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, NavParams } from 'ionic-angular';

import {ItemDetailsPage} from '../item-details/item-details';
import {EditDetailsPage} from '../Edit-details/edit-details';

@Component({
  selector: 'page-details-basic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
      items:any;
      itemslist:any;
    
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {

    this.items = navParams.get('item');
    
    this.http.get("http://localhost/api/api.php").subscribe (data => {
            console.log(data)
  
    this.items = data.json().item;
    //this.itemslist = this.items.item;    
    console.log("<<>>"+this.items);
   // return(this.itemslist);
    }, error => {
      console.log(error);
    })

  }
  itemTapped ($event, item) {
    this.navCtrl.push(ItemDetailsPage, {
        item: item
      });
  }
  editdetails ($event, item) {
    this.navCtrl.push(EditDetailsPage, {
      item: item    });
  }

}