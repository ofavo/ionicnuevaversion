import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormsModule } from '@angular/forms';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  myForm: FormGroup;
  @Input() qr;
  constructor( public formBuilder: FormBuilder){
    this.myForm = this.createMyForm();
  }
  saveData(){
    console.log(this.myForm.value);
    console.log(this.qr);
    alert(this.myForm.value);
    alert(this.qr);
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
