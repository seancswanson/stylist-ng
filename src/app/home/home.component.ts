import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  providers: [DatePipe]
})
export class HomeComponent implements OnInit {
  myDate = new Date();
  myDateString: string = 'Getting date';
  outfits = [

    {
      dateAdded: Date.now(),
      items: [{
        color: 'blue',
        brand: 'Outlier',
        category: 'top',
        type: 'shirt',
        fabric: 'chambray',
      },
      {
        color: 'White',
        brand: 'Reigning Champ',
        category: 'top',
        type: 'sweatshirt',
        fabric: 'cotton',
      },
      {
        color: 'black',
        brand: 'Outlier',
        category: 'bottom',
        type: 'pants',
        fabric: 'linen',
      }]
    },
    {
      dateAdded: Date.now(),
      items: [{
        color: 'blue',
        brand: 'Outlier',
        category: 'top',
        type: 'shirt',
        fabric: 'chambray',
      },
      {
        color: 'White',
        brand: 'Reigning Champ',
        category: 'top',
        type: 'sweatshirt',
        fabric: 'cotton',
      },
      {
        color: 'black',
        brand: 'Outlier',
        category: 'bottom',
        type: 'pants',
        fabric: 'linen',
      }]
    },
  ]
  constructor(private datePipe: DatePipe) {
    this.myDateString = this.datePipe.transform(this.myDate, 'longDate');
  }

  ngOnInit(): void {
  }

}
