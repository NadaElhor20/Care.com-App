import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-loading',
  templateUrl: './btn-loading.component.html',
  styleUrls: ['./btn-loading.component.css']
})
export class BtnLoadingComponent implements OnInit {
btnTitle="Book"
isloading=false
  constructor() { }

  ngOnInit(): void {
  }
  getLoadingTitle(){
    this.isloading=true;
    this.btnTitle="loading..."
    setTimeout(()=>{
      this.isloading=false;
    this.btnTitle="Book"
    },3000)
  }

}
