import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProviderUsersProvider } from '../../providers/provider-users/provider-users'; 

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  public users;
  constructor(public navCtrl: NavController, public navParams: NavParams, public UsersProvider: ProviderUsersProvider) {
  }
  
  ionViewWillEnter(){
    this.getUsers()
  }

  ionViewDidLoad() {
    this.getUsers()
    console.log('ionViewDidLoad HomePage');
  }

  navToCreateUser(){
    console.log('fire')
    this.navCtrl.push('CreateUserPage')
  }

  getUsers() {
    this.UsersProvider.getAllUsers()
    .then(data => {
      this.users = data;
    });
  }

}
