import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder } from '@angular/forms';
import {HomePage} from '../../pages/home/home';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  todo = {
  	email:'',
  	password:''
  }
  logForm(form) {
    console.log(form.value);
    this.navCtrl.push(HomePage, {'email':form.value.email, 'password':form.value.password});
  }

}
