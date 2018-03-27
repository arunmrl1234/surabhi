import { Component } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from 'ionic-angular';

@Component({
    selector: 'tab-details',
    templateUrl: 'tab1.html'
  })
  export class tabPage {
    private Orederplc : FormGroup;
    constructor(private formBuilder: FormBuilder, private alertCtrl: AlertController) {
      this.Orederplc = this.formBuilder.group({
        val1: ['', Validators.required],
        val2: ['', Validators.required],
        val3: ['', Validators.required],
        val4: ['', Validators.required],
        description: [''],
      });
    }
    presentAlert() {
      console.log("inside");
      let alert = this.alertCtrl.create({
        title: 'Success',
        subTitle: 'Order Placed Successfully',
        buttons: ['Dismiss']
      });
      alert.present();
    }
   
  }