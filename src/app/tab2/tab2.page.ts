import { Component, Input } from '@angular/core';
import {
  BarcodeScannerOptions,
  BarcodeScanner
} from "@ionic-native/barcode-scanner/ngx";
import { queryRefresh } from '@angular/core/src/render3';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import swal from 'sweetalert';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  arraycar = [
    {name:'Panama', img:'https://besalel-1.nyc3.digitaloceanspaces.com/newtrip/2018/08/panama.jpg' },
    {name:'Francia', img:'https://besalel-1.nyc3.digitaloceanspaces.com/newtrip/2018/08/eiffel-tower-wallpapers-28565-4205428.jpg' },
    {name:'Aruba', img:'https://besalel-1.nyc3.digitaloceanspaces.com/newtrip/2018/08/santa-marta1.jpg' }
  ];
  


  @Input() qr = '';
   myForm: FormGroup;
   nombre; imagen;
  @Input() dtos =true;
  scannedData: {};
  barcodeScannerOptions: BarcodeScannerOptions;
  constructor(private barcodeScanner: BarcodeScanner,
    public formBuilder: FormBuilder){
 this.myForm = this.createMyForm();
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
  }

  scanCode() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
       
        this.scannedData = barcodeData;
        this.qr = this.scannedData['text'];
        if(this.qr != ''){
          swal("Good job!", "You clicked the button!", "success");
           this.dtos =  true;
        }else{
          swal("Good job!", "You clicked the button!", "error");
          this.dtos =  false;
        }
      })
      .catch(err => {
        this.dtos =  false;
        console.log("Error", err);
      });
  }
 saveData(){
   
    let env = {
      name: this.myForm.value.name,
      lastName: this.myForm.value.lastName,
      email: this.myForm.value.email,
      qr: this.qr     
    }
    console.log(env);
    this.dtos = false;
  
  }
 private createMyForm(){
    return this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      passwordRetry: this.formBuilder.group({
        password: ['', Validators.required],
        passwordConfirmation: ['', Validators.required]
      }),
      
    });
  }
  

}
