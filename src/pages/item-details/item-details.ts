import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { tabPage } from '../tabs/tabPage';
import { tabPagesecond } from '../tabs/tabPagesecond';

@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;
  chatRoot = tabPage;
  chatRoot2 = tabPagesecond;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    console.log(this.selectedItem);
  }
}
