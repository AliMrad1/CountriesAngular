import { Component, OnInit, Input ,OnDestroy} from '@angular/core';

@Component({
  selector: 'country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit  {
  @Input() title: string = ''
  @Input() region: string = 'My Description'
  @Input() population: number = -1;
  @Input() imgsrc = 'https://cdn.pixabay.com/photo/2022/09/08/10/19/eye-7440640_960_720.jpg'

  showPopulation(){
    alert(this.population)
  }
  constructor(){
    //console.log(this.title)
  }
  ngOnInit(): void {
   // console.log(this.title)
  }

}
