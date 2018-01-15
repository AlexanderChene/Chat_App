import { Component } from '@angular/core';
import { NavController, AlertController} from 'ionic-angular';
import { ChatPage } from '../chat/chat';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username:string="";

  constructor(public navCtrl: NavController,
  public alertCtrl:AlertController) {

  }

  alert(title:string, message: string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }


  LoginUser(){
    if(/^[a-zA-Z0-9]+$/.test(this.username)){
      this.navCtrl.push(ChatPage,{
        username: this.username

      });

    }else{
      this.alert('Error','Invalid username');
    }
  }

}
