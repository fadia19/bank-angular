import { Component, OnInit, Input } from '@angular/core';
import { GlobalService } from './../../services/global.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

  name : string;
  code : number;
  constructor(private service:GlobalService) { }

  ngOnInit() {
    
  }
  public getBank(){
    this.service.getBank(this.name , this.code);
    console.log(this.name , this.code);
  }

}

