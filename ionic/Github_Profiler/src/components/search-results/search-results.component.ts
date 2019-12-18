import { Component, Input } from '@angular/core';

/**
 * Generated class for the SearchResultsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search-results',
  templateUrl: 'search-results.html'
})
export class SearchResultsComponent {

  text: string;

  constructor() {
    console.log('Hello SearchResultsComponent Component');
    this.text = 'Hello World';
  }

}
