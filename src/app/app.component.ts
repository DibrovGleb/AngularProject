import { Component, OnInit } from '@angular/core';
import dbData from './db.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Angularproject';

  public users:{_id:String,amount:Number,type:String,name:{first: String,last: String},
    company: String,
    email: String,
    phone: String,
    address: String}[] = dbData;
  
  constructor(
  ) { }
}
