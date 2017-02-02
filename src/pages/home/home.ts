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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.email = navParams.get("email");
  	this.password = navParams.get("password");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    console.log("email: "+this.email);
    console.log("password: "+this.password);
  }

}
