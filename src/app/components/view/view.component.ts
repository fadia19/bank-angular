import { Component, OnInit } from '@angular/core';
import { GlobalService } from './../../services/global.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
bankName : string;
bankCode : number;
userName : string;
password : string;

  constructor(private service:GlobalService) { }

  ngOnInit() {
    this.bankName = this.service.bankname;
    this.bankCode = this.service.bankcode;
    this.userName = this.service.username;
    this.password = this.service.password;
  }

}
