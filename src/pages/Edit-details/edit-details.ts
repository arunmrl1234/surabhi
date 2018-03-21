import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { tabPageEdit } from '../tabedit/tabPageEdit';
import { tabPagesecondEdit } from '../tabedit/tabPagesecondEdit';

@Component({
  selector: 'page-edit-details',
  templateUrl: 'edit-details.html'
})
export class EditDetailsPage {
  selectedItem: any;
  chatRootedit = tabPageEdit;
  chatRootedit2 = tabPagesecondEdit;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    console.log(this.selectedItem);
  }
}
