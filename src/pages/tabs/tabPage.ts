import { Component } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from 'ionic-angular';

@Component({
    selector: 'tab-details',
    templateUrl: 'tab1.html'
  })
  export class tabPage {
    data: any;
    private Orederplc : FormGroup;
    
    constructor(private formBuilder: FormBuilder, private alertCtrl: AlertController,private http: Http) {
       this.Orederplc = this.formBuilder.group({
        val1: ['', Validators.required],
        val2: ['', Validators.required],
        val3: ['', Validators.required],
        val4: ['', Validators.required],
        val5: ['', Validators.required],
        val6: ['', Validators.required],
        val7: ['', Validators.required],
        val8: ['', Validators.required],
        description: [''],
      });
      
    }
  
    presentAlert() {
     
      var url="http://localhost/api/insert.php";
     
     let postData = new FormData();
     postData.append("jasmine", this.Orederplc.value.val2);
     postData.append("mullai", this.Orederplc.value.val2);
     postData.append("rose", this.Orederplc.value.val3);
     postData.append("lily", this.Orederplc.value.val4);
     postData.append("arali", this.Orederplc.value.val5);
     postData.append("lotus", this.Orederplc.value.val6);
     postData.append("marigold", this.Orederplc.value.val7);
     postData.append("banana", this.Orederplc.value.val8);
    
     //let body = JSON.stringify(postData);
     //let postdata2= this.formData(body);
    // console.log("Result : " + JSON.stringify(postData) );



     let head = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'      
  });

 this.data = this.http.post(url,postData,head);
 this.data.subscribe(data=> {
       console.log(data);
     });
      let alert = this.alertCtrl.create({
        title: 'Success',
        subTitle: 'Order Placed Successfully',
        buttons: ['Dismiss']
      });
      alert.present();
    }
   
  }