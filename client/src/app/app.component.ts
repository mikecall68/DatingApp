import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any;
  //localuserdata: any;

  constructor(private accountService: AccountService){}

  ngOnInit(){
      this.setCurrentUser();
  }

  setCurrentUser()
  {

    //if(localStorage.getItem('user') != null)
   //{
    //  this.localuserdata = localStorage.getItem('user');
    //}

    const user: User = JSON.parse(localStorage.getItem('user')||' {}');
    this.accountService.setCurrentUser(user);
   
  }

  
}
