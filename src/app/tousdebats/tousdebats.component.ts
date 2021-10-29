import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tousdebats',
  templateUrl: './tousdebats.component.html',
  styleUrls: ['./tousdebats.component.css']
})
export class TousdebatsComponent implements OnInit {
 
  name = 'Angular';
  imageObject = [{
      Image: "../../assets/images/live.png",
      thumbImage: '../../assets/images/live.png',
      title: 'Sujet1'
  }, {
      image: '../../assets/images/live.png',
      thumbImage: '../../assets/images/live.png',
     title: 'Sujet'
  }, {
      image: '../../assets/images/live.png',
      thumbImage: '../../assets/images/live.png',
      title: 'Sujet3'
  },{
      image: '../../assets/images/live.png',
      thumbImage: '../../assets/images/live.png',
      title: 'Sujet4'
  },{
      image: '../../assets/images/live.png',
      thumbImage: '../../assets/images/live.png',
      title:'Sujet5'
  },{
      image: '../../assets/images/live.png',
      thumbImage: '../../assets/images/live.png',
      title:'Sujet6'
  },{
      image: '../../assets/images/live.png',
      thumbImage: '../../assets/images/live.png',
      title:'Sujet7'
  }

];

   constructor() { }

  ngOnInit(): void {
      }
    }
