import { Component } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from 'ionic-angular';


@Component({
    selector: 'tab-detailsEdit',
    templateUrl: 'tabedit1.html'
  })
  export class tabPageEdit {
    private editOreder : FormGroup;
    constructor(private formBuilder: FormBuilder, private alertCtrl: AlertController) {
      this.editOreder = this.formBuilder.group({
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
        subTitle: 'Order Edited Successfully',
        buttons: ['Dismiss']
      });
      alert.present();
    }
  }

  



  