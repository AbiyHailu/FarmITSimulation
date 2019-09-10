import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.css']
})
export class BottomBarComponent implements OnInit {

  constructor() {
   this.getPlantAge()
  }

  ngOnInit() {
  }

  barValue = 0
  count = 0
  plantage = 12
  interval 
  getPlantAge() {
    if (this.barValue <= this.plantage) {
       this.interval  =  setInterval(() => {
        this.barValue = this.barValue + 1
        console.log('barValue', this.barValue)
        this.changeProgressValue()
         if (this.barValue == this.plantage) {
            clearInterval(this.interval)
         }
      }, 1000);
    }
  }

  changeProgressValue() {
    if ( this.barValue) {
      document.getElementById('progress-time').style.width = this.barValue.toString()+'%'
    }
  }
}
