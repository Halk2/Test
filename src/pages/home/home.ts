import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LoginPage} from '../../pages/login/login';
import {OnePage} from '../../pages/one/one';


/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  email:string;
  password:string;
  users = [{ id: 25, name: 'Andrii', username: 'hulk'},
  { id: 26, name: 'Oleg', username: 'batman'},
  { id: 27, name: 'Nazar', username: 'superman'}];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.email = navParams.get("email");
  	this.password = navParams.get("password");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    console.log("email: "+this.email);
    console.log("password: "+this.password);
  }
  addPlayerCard(){
     console.log("sdfasdfasf"); 
  }

}
