import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Country } from '../Classes/Country';
import { CountryService } from '../Classes/CountryService';

@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  countries:Country[] = [];
  searchedCountry:string = '';

  @Output() seachButtonClicked = new EventEmitter<string>();

  constructor(private cs:CountryService) {   }

  ngOnInit(): void {
    //this.cs.getData((data:any) => {this.countries = data});
  }

  searchSpecificCountry(){
    this.seachButtonClicked.emit(this.searchedCountry);
  }

  handleSelectedCountr(){
    this.seachButtonClicked.emit(this.searchedCountry);
  }

}
