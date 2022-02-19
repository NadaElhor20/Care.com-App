import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from'@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  addDoctorForm!: FormGroup;
  isSubmitted = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.addDoctorForm = this.fb.group({
      password: [ '', [
        Validators.required, 
        Validators.minLength(6), 
        Validators.maxLength(11) ]  
      ],
      email: [ '', [
        Validators.required, 
        Validators.minLength(13), 
        Validators.maxLength(25) ]  
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


