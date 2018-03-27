import { Component, ViewChild  } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from 'ionic-angular';

import { NavController } from 'ionic-angular';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';

@Component({
    selector: 'tab2-details',
    templateUrl: 'tab2.html'
  })
  export class tabPagesecond {
    signature = '';
    isDrawing = false;
    private invoicePlc : FormGroup;
    @ViewChild(SignaturePad) signaturePad: SignaturePad;
  private signaturePadOptions: Object = { 
    'minWidth': 2,
    'minheight':1,   
    'backgroundColor': '#f6fbff',
    'penColor': '#666a73'
  };
    constructor(public navCtrl: NavController,  public storage: Storage, public toastCtrl: ToastController,private formBuilder: FormBuilder, private alertCtrl: AlertController) {
      this.invoicePlc = this.formBuilder.group({
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
    ionViewDidEnter() {
      this.signaturePad.clear()
      this.storage.get('savedSignature').then((data) => {
        this.signature = data;
      });
    }
   
    drawComplete() {
      this.isDrawing = false;
    }
   
    drawStart() {
      this.isDrawing = true;
    }
   
    savePad() {
      this.signature = this.signaturePad.toDataURL();
      this.storage.set('savedSignature', this.signature);
      this.signaturePad.clear();
      let toast = this.toastCtrl.create({
        message: 'New Signature saved.',
        duration: 3000
      });
      toast.present();
    }
   
    clearPad() {
      this.signaturePad.clear();
    }
  
  }