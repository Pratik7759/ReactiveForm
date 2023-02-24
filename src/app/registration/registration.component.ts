import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {

  constructor(private fb: FormBuilder) { }

  // myForm = new FormGroup({
  //   name: new FormControl(''),
  //   email: new FormControl(''),
  //   age: new FormControl(''),
  //   contact: new FormControl(''),
  //   place: new FormControl(''),
  // });

  myForm = this.fb.group({
    name:['',Validators.required],
    email:['',Validators.required],
    age:['',Validators.required],
    contact:['',Validators.required],
    place:[''],
  })
  
 

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.myForm.value);
  }
}
