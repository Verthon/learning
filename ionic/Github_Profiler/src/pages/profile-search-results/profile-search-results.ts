import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GithubServiceProvider} from '../../providers/github-service';
import { User } from '../../model/user.interface';
import { Repository } from '../../model/respository.interface';
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
  user: User;
  repositories: Repository[];

  constructor(private github: GithubServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  getUserInformation():void {
    this.github.getUserInformation(this.username).subscribe((data: User) => this.user = data);
    // this.github.mockGetUserInfo(this.username).subscribe((data: User) => this.user = data)
    // this.github.mockGetRepositoryInfo(this.username).subscribe((data: Repository[]) => this.repositories = data)
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
