import { Component, OnInit , Input } from '@angular/core';
import { GlobalService } from './../../services/global.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

 username : string;
 password : string ;
  constructor(private service:GlobalService) { }

  ngOnInit() {
    
  }
  public getUser(){
    this.service.getUser(this.username , this.password);
    console.log(this.username , this.password);
  }

}



