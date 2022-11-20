import { Component, OnInit, Input,OnChanges, Output } from '@angular/core';
import { EventEmitter } from 'stream';
import { Country } from '../Classes/Country';
import { CountryService } from '../Classes/CountryService';
@Component({
  selector: 'countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit,OnChanges {

  @Input() specificCountryToSearch:string = ''; //get data from parent app.component

  countries:Country[] = [];
  //@Output() countriesEmit: EventEmitter = new EventEmitter();
  ngOnInit(): void {
    this.cs.getData((data:any) => {this.countries = data});

   // this.countriesEmit.emit(this.countries);
  }

  ngOnChanges(): void {
    this.cs.searchedCountry = this.specificCountryToSearch;
    this.cs.getData((data:any) => {this.countries = data});
  }
  
  constructor(private cs:CountryService){
    
  }


}
