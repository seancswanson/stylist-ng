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
  outfits = JSON.parse(localStorage.getItem('outfits'));

  // Setting localStorage for dev purposes with:
  // localStorage.setItem('outfits', JSON.stringify([
  //   {
  //     dateAdded: Date.now(),
  //     items: {
  //       tops:
  //         [{
  //           color: 'blue',
  //           brand: 'Outlier',
  //           category: 'top',
  //           type: 'shirt',
  //           fabric: 'chambray',
  //         },
  //         {
  //           color: 'White',
  //           brand: 'Reigning Champ',
  //           category: 'top',
  //           type: 'sweatshirt',
  //           fabric: 'cotton',
  //         }],
  //       bottoms: [
  //         {
  //           color: 'black',
  //           brand: 'Outlier',
  //           category: 'bottom',
  //           type: 'pants',
  //           fabric: 'linen',
  //         }
  //       ]
  //     }
  //   },
  // ]))

  constructor(private datePipe: DatePipe) {
    this.myDateString = this.datePipe.transform(this.myDate, 'longDate');
  }

  ngOnInit(): void {
  }

}
