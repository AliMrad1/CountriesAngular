import { Component, OnInit } from '@angular/core';
import { Country } from '../Classes/Country';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  specificCountryToSearch:string = '';

  countries:Country[] = [];

  listenToChild(_country:string) {
        this.specificCountryToSearch = _country;
  }

//   listenToChildCountries(countries:Country[]) {
//     this.countries = countries;
// }
  constructor() { }

  ngOnInit(): void {
  }

}
