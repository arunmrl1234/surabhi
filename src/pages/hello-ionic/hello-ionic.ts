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
    
    this.http.get("assets/data/basic.json").subscribe (data => {
            console.log(data)
    this.items = data.json(); 
    this.itemslist = this.items.items;   
    console.log(this.itemslist);
    }, error => {
      console.log(error);
    })

  }
  itemTapped ($event, itemslist) {
    this.navCtrl.push(ItemDetailsPage, {
        item: itemslist
      });
  }
  editdetails ($event, itemslist) {
    this.navCtrl.push(EditDetailsPage, {
      item: itemslist
    });
  }

}