import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute,ParamMap } from '@angular/router';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {
  
  @Input() obj:any={};
  doctorId:any
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.doctorId = this.route.snapshot.paramMap.get('id');
   
  }

}
