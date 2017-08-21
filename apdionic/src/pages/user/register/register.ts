import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http,Response,Headers,RequestOptions } from '@angular/http';

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

  constructor(public navCtrl: NavController, public http:Http) {
  }
  private header = new Headers({'Content-Type': 'application/x-www-form-urlencoded'})
  Register(username,password){
    console.log(username.value);
    this.http.post('http://tianaitian.com:3000/register', JSON.stringify({username:username.value,password:password.value}), new RequestOptions({headers: this.header}))
      .subscribe((res: Response) => {
        alert(res['_body']);
      })

  }

}
