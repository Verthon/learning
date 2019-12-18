import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileSearchResultsPage } from './profile-search-results';

@NgModule({
  declarations: [
    ProfileSearchResultsPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileSearchResultsPage),
  ],
})
export class ProfileSearchResultsPageModule {}
