import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  constructor(private fb: FormBuilder){
  }
  uForm = this.fb.group({
    name: ['',[Validators.required, Validators.minLength(5)]],
    email: ['',[Validators.required, Validators.minLength(3)]] 
  })

  uFormError(){
    return this.uForm.controls['name'].hasError('required') ? 'Please Enter Filed' : this.uForm.controls['name'].hasError('minlength') ?
    "Min Length Should be 5 Charecters" : '';
  }
  uFormEmail(){
    return this.uForm.controls['email'].hasError('required') ? 'Please Enter Field' : this.uForm.controls['email'].hasError('minlength') ?
    "Min length is 3 Charecters" : '';
  }


  fsubmit(){
    console.log(this.uForm.value)
  }
}
