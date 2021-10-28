import { Component, OnInit } from '@angular/core';


import { Debats } from '../Models/Debats';


import { ForumsService } from '../services/forums.service';


@Component({
  selector: 'app-form-f',
  templateUrl: './form-f.component.html',
  styleUrls: ['./form-f.component.css']
})
export class FormFComponent implements OnInit {


  Debats : Debats[] | undefined;
  //Debats! : any[];
  authorName:string = "";
  title:string = "";
  container:string = "";
  theme:string = "";
  autres: string ="";
  type: string="";
  typeRep: string="";
  duree: Number=0;

  selectedFile :any;
   img = new FormData();
  constructor(public forumsservice:ForumsService) { }

  ngOnInit(): void {

    this.forumsservice.get_allDebat().subscribe(data => {
      this.Debats = data.map(e => {
        return {
          id : e.payload.doc.id,
        ...e.payload.doc.data() as Debats
        };
        
      })
    });

    // this.forumsservice.get_allDebat().subscribe(data =>{
    //   console.log(data);
    //   this.Debats = data;
    // });

  }

  addSubject(){
      

    if (this.theme == "Autres") this.theme = this.autres;

      let subjectTmp :Debats = new Debats();
      subjectTmp.author= this.authorName;
      subjectTmp.title=  this.title;
      subjectTmp.container= this.container;
      subjectTmp.theme= this.theme;
      subjectTmp.type= this.type;
      subjectTmp.date = new Date();



       this.forumsservice.create_Debat(subjectTmp).then(res => {
         this.authorName = "";
         this.title = "";
         this.container = "";
         this.theme = "";
         this.autres = "";
         this.type = "";
         console.log(res);
       }).catch(error => {
         console.log(error);
       });

      
  }

}
