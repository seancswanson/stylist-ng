import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-outfit-form',
  templateUrl: './outfit-form.component.html',
  styleUrls: ['./outfit-form.component.less']
})
export class OutfitFormComponent implements OnInit {
  colorCtr = new FormControl('color')
  disabled = false;
  touchUi = false;
  color: string = 'black';
  constructor() { }

  ngOnInit(): void {
  }

}
