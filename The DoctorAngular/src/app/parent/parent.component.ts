import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  parentarr: any = [
    {
      id: 1,
      name: 'Aya Amgd',
      title: 'Dental and Cosmetic Dental CenterDentist',
      im: 'https://media.istockphoto.com/photos/smiling-female-doctor-picture-id176796285?k=20&m=176796285&s=612x612&w=0&h=V7B5nHnZsT5Tbpn80gezmozEo7IeRYcKN-VkXPv0RqQ=',
      fees: '300 EGP',
      location: 'Ismallia',
      wt: '20 Minutes',
      phone: '10079-Cost for regular call',
    },
    {
      id: 2,
      name: 'Ehab Mahr',
      title: 'Dental and Cosmetic Dental Center',
      im: 'https://media.istockphoto.com/photos/happy-healthcare-practitioner-picture-id138205019?k=20&m=138205019&s=612x612&w=0&h=KpsSMVsplkOqTnAJmOye4y6DcciVYIBe5dYDgYXLVW4=',
      fees: '400 EGP',
      location: 'El-Giza',
      wt: '30 Minutes',
      phone: '16679-Cost for regular call',
    },
    {
      id: 3,
      name: 'Ahmed Badr',
      title: 'Specialist in fixed prosthodontics',
      im: 'https://th.bing.com/th/id/OIP.A1wxxaKg8cGPMMlMbxCzQgHaK_?pid=ImgDet&rs=1',
      fees: '200 EGP',
      location: 'El-Giza',
      wt: '12 Minutes',
      phone: '16679-Cost for regular call',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
