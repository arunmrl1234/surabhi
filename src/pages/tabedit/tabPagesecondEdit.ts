import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from 'ionic-angular';


@Component({
    selector: 'tab2-detailsEdit',
    templateUrl: 'tabedit2.html'
  })
  export class tabPagesecondEdit {
    private invoiceEdit : FormGroup;
    constructor(public navCtrl: NavController,private formBuilder: FormBuilder, private alertCtrl: AlertController) {
      this.invoiceEdit = this.formBuilder.group({
        inovice1: ['', Validators.required],
        inovice2: ['', Validators.required],
        inovice3: ['', Validators.required],
        inovice4: ['', Validators.required],
        inovice5: ['', Validators.required],
        inovice6: ['', Validators.required],
        inovice7: ['', Validators.required],
        inovice8: ['', Validators.required],
        inovice9: ['', Validators.required],
        inovice10: ['', Validators.required],
        inovice11: ['', Validators.required],
        inovice12: ['', Validators.required],
        description: [''],
    });
  }
  presentAlert() {
    console.log("inside");
    let alert = this.alertCtrl.create({
      title: 'Success',
      subTitle: 'Invoice Placed Successfully',
      buttons: ['Dismiss']
    });
    alert.present();
  }
  }