import { Component, OnInit } from '@angular/core';
import { asapScheduler } from 'rxjs';
import { User } from '../../types/user';

@Component({
  selector: 'app-profile-management',
  templateUrl: './profile-management.component.html',
  styleUrls: ['./profile-management.component.scss']
})
export class ProfileManagementComponent implements OnInit {
  disableForm=true;
  user = {
    username: "asa",
    password: "****",
    realName: "Adrian Aabech"
  }
  enable(){
    if(this.disableForm=false) this.disableForm=true;
    else this.disableForm=false;
  }
  sendUpdate() {
    window.alert("UPDATED");
  }
  constructor() { }

  ngOnInit(): void {
  }

}
