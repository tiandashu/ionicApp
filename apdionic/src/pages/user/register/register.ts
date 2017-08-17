import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http,Response } from '@angular/http';

/**
 * Generated class for the Register page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  listData: Object;


  constructor(public navCtrl: NavController, public http:Http) {}

  Register(username,password){
    this.http.get('http://localhost:3000/register?username='+username.value)
      .subscribe((res:Response)=>{
        console.log(res['_body']);
      })
  }

}
