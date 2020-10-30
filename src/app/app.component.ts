import { Component } from '@angular/core';
import * as cardValidator from 'card-validator';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public type:any | 'any';
  public cardnumber:any;
  public cardnum:any = '';
  
  public mask = {
    mask: [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, ' ',
    /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, ' ',
    /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, ' ',
    /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, ]
          
  }
  constructor() { }

  ngOnInit() {
  }
  updateCard() {
    this.cardnumber = this.cardnum.split(/[\_\s]+/ig).join(' ');
    this.type = cardValidator.number(this.cardnumber);
    
  }
}
