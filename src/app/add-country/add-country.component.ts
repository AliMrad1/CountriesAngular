import { Component, OnInit } from '@angular/core';
import { Country } from '../Classes/Country';
import { CountryService } from '../Classes/CountryService';

@Component({
  selector: 'add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent implements OnInit {

  c:Country = new Country();

  constructor(private cs:CountryService) { }

  ngOnInit(): void {
  }

  sendData(){
       this.cs.addCountry(this.c);
  }

}
