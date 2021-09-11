import { Component, OnInit } from '@angular/core';
import promoData from 'src/data/promoData';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  currentPromoNumber: number = 0;
  currentPromoText: string = promoData[0].promo;
  
  ngOnInit(): void {

  }

  handleLeftClick() {
    if (promoData[this.currentPromoNumber - 1]) {
        this.currentPromoNumber--;
    } else {
      this.currentPromoNumber = promoData.length - 1;
    }
    this.currentPromoText = promoData[this.currentPromoNumber].promo;
  }

  handleRightClick() {
    if (promoData[this.currentPromoNumber + 1]) {
      this.currentPromoNumber++;
    } else {
      this.currentPromoNumber = 0;
    }
    this.currentPromoText = promoData[this.currentPromoNumber].promo;
  }

}
