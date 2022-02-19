import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from'@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
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
      date:[ '', [
        Validators.required, 
     ]  
      ]
     
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
