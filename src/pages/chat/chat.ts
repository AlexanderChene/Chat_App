import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase} from 'angularfire2/database';
import 'rxjs/add/operator/map';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  username: string = '';
  message: string = '';
  _chatSubscription;
  
  messages:object[] = [];

  constructor(public db: AngularFireDatabase,
    public navCtrl: NavController, public navParams: NavParams) {
      this.username=this.navParams.get('username');
      this._chatSubscription= this.db.list('/chat').valueChanges().subscribe(data=>{
        this.messages = data;

      });
  }

  sendMessage(){
    this.db.list('/chat').push({
      username:this.username,
      message: this.message

    }).then( ()=>{

    });
    this.message='';

  }

  ionViewWillLeave(){
    console.log('User is about to go');
    this._chatSubscription.unsubscribe();
    this.db.list('/chat').push({
      specialMessage: true,
      message: `${this.username} has left the room`
    })
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad ChatPage');
    this.db.list('/chat').push({
      specialMessage: true,
      message: `${this.username} has joined the room`
    })
  }

}
