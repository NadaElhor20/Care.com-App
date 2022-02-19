import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from'@angular/forms';

@Component({
  selector: 'app-add-doctors',
  templateUrl: './add-doctors.component.html',
  styleUrls: ['./add-doctors.component.css']
})
export class AddDoctorsComponent implements OnInit {

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
      email: '',
      sps: '',
      phone: ['', Validators.required],
      address: ''
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

