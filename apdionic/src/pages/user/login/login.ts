import { Component } from '@angular/core';
import { ModalController,ToastController,ViewController} from 'ionic-angular';

import { TabsPage } from '../../tabs/tabs'
import {RegisterPage} from "../register/register";

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public modalCtrl: ModalController,public toastCtrl: ToastController,public viewCtrl:ViewController) {
  }

  /*ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }*/
  logIn(username: HTMLInputElement, password: HTMLInputElement) {
    if (username.value.length == 0) {
      this.toastCtrl.create({
        message: '请输入手机号',
        duration: 2000,
        position: 'center'
      }).present();
    } else if (password.value.length == 0) {
      this.toastCtrl.create({
        message: '请输入密码',
        duration: 2000,
        position: 'center'
      }).present();
    } else {
      let userinfo: string = '手机号：' + username.value + '密码：' + password.value;
      this.toastCtrl.create({
        message: userinfo,
        duration: 2000,
        position: 'top'
      }).present();
      let modal = this.modalCtrl.create(TabsPage);
      modal.present();
      this.viewCtrl.dismiss();
    }
  }

  GoRegister():void{
    this.modalCtrl.create(RegisterPage).present();
  }

}
