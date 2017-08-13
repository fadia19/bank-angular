import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { UserComponent } from './../components/user/user.component';
import { ViewComponent } from './../components/view/view.component';
import { BankComponent } from './../components/bank/bank.component';

@Injectable()
export class GlobalService {
bankname : string;
bankcode : number;
username : string;
password : string;

  constructor() { }
public getBank(name , code){
this.bankname = name;
this.bankcode = code;
}

public getUser(name , password){
  this.username = name;
  this.password = password;
}
}
