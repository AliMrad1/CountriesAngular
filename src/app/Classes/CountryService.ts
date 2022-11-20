import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Country } from "./Country";

@Injectable({
  providedIn: 'root',
 })
 export class CountryService{
    searchedCountry:string = '';

    Countries : Country[] = [];

    constructor(private httpCL:HttpClient) {}

  getData(fillData:any)
  {
    this.Countries = [];
    console.log(this.Countries);
    var _URL;
    if(this.searchedCountry == ""){
        _URL = "http://localhost:3000/v1/countries";
    }else{
      _URL = "http://localhost:3000/v1/countries/"+this.searchedCountry;
    }

    // fetch(_URL)
    //   .then(response => response.json())
    //   .then(json => {
    //     json.forEach((country : any) => {
    //       let c = new Country();
    //       c.name = country.name.common;
    //       c.imgsrc = country.flags.png;
    //       c.region = country.region;
    //       c.population = country.population;
    //       this.Countries.push(c);
    //     });

    //     if(fillData != null){
    //         fillData(this.Countries);
    //     }
    //   })

    this.httpCL.get(_URL)
               .subscribe((json : any) => {
                json.forEach((country : any) => {
                  let c = new Country();
                  c.name = country.name;
                  c.imgsrc = country.imgsrc;
                  c.region = country.region;
                  c.population = country.population;
                  this.Countries.push(c);
                 });
        
                  if(fillData != null){
                      fillData(this.Countries);
                  }
                });

                console.log(".........");

  }

  addCountry(data:Country){
      const body = 
      {
        name:data.name,
        imgsrc:data.imgsrc,
        region:data.region,
        population:data.population
      };
      this.httpCL.post('http://localhost:3000/v1/addCountry',body)
                 .subscribe(data => console.log(data));
  }
}