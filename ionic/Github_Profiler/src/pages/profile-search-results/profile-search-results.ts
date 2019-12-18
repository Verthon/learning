import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GithubServiceProvider} from '../../providers/github-service'
/**
 * Generated class for the ProfileSearchResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-search-results',
  templateUrl: 'profile-search-results.html',
})
export class ProfileSearchResultsPage {
  username: string
  constructor(private github: GithubServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  getUserInformation():void {
    this.github.mockGetUserInfo(this.username).subscribe(data => console.log(data))
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileSearchResultsPage');
  }

  ionViewWillLoad() {
    this.username = this.navParams.get('username')
    if(this.username) {
      this.getUserInformation()
    }
  }

}
