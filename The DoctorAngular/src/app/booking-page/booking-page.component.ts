import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.css']
})
export class BookingPageComponent implements OnInit {
@Input()item:any='';

  constructor() { }

  ngOnInit(): void {
  }

}
