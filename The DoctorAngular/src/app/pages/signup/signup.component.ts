import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from'@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  addDoctorForm!: FormGroup;
  isSubmitted = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.addDoctorForm = this.fb.group({
      name: [ '', [
        Validators.required, 
        Validators.minLength(4), 
        Validators.maxLength(25) ]  
      ],
      email:[ '', [
        Validators.required, 
        Validators.minLength(13), 
        Validators.maxLength(25) ]  
      ],
      address: [ '', [
        Validators.required, 
         ]  
      ],
      phone:[ '', [
        Validators.required, 
        Validators.minLength(11), 
        Validators.maxLength(11) ]  
      ],
      password:[ '', [
        Validators.required, 
        Validators.minLength(6), 
        Validators.maxLength(11) ]  
      ],
     
    });

  }

  onSubmit() {
    this.isSubmitted = true;

    console.log(this.addDoctorForm.value);

    console.log(this.f["name"].errors?.["required"]);

    setTimeout(() => {
      this.isSubmitted = false;
    }, 3000);
  }

  get f() {
    return this.addDoctorForm.controls;
  }

}


