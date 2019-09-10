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

  barValue = 1
  plantage = 90
  interval
  getPlantAge() {
    this.interval = setInterval(() => {
      this.barValue = this.barValue + 1
      this.changeProgressValue()
      this.getpercentage()
      if (this.barValue > this.plantage) {
        clearInterval(this.interval)
      }
    }, 20000);
  }

  percentageBarValue = 0
  getpercentage() {
    this.percentageBarValue = this.barValue * 100 / this.plantage
  }

  changeProgressValue() {
    if (this.barValue) {
      document.getElementById('progress-time').style.width = this.percentageBarValue.toString() + '%'
    }
  }

  createNotifications() {
    if (this.percentageBarValue > 10 && this.percentageBarValue < 12) {
      console.log('Notification')
    }
  }

  createScoutReport() {
    if (this.percentageBarValue > 30 && this.percentageBarValue < 40) {
      console.log('createScoutReport')
    }
  }

  createMessages() {
    if (this.percentageBarValue > 20 && this.percentageBarValue < 30) {
      console.log('createMessages')
    }
  }

}



