import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name = 'Angular';
  imageObject = [{
      Image: "../../assets/images/debat1.png",
      thumbImage: '../../assets/images/debat1.png',
      title: 'Soyez l\'animateur du débat ou participant'
  }, {
      image: '../../assets/images/debat2.png',
      thumbImage: '../../assets/images/debat2.png',
     //title: 'tiiitre'
  }, {
      image: '../../assets/images/debat3.png',
      thumbImage: '../../assets/images/debat3.png',
      //title: 'tiiitre'
  },{
      image: '../../assets/images/statdark.png',
      thumbImage: '../../assets/images/statdark.png',
      //title: 'tiiitre'
  },{
      image: '../../assets/images/netdark.png',
      thumbImage: '../../assets/images/netdark.png',
      title:'Faites partie de notre grand résaux'
  }];

  constructor() { }

  ngOnInit(): void {
  } 

}
