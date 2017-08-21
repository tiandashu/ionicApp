import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {LoginPage} from "../user/login/login";

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(public navCtrl: NavController ) {

  }
  goToRoot(){
    this.navCtrl.push(LoginPage);
  }
  //TODO 欢迎页不能每次打开的时候加载，安装或者升级后打开
}
