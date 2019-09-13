import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedDataService } from '../services/sharedData.service';

@Component({
  selector: 'bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.css']
})
export class BottomBarComponent implements OnInit, OnDestroy {

  constructor(
    private sharedDataService: SharedDataService
  ) {
   
    this.getPlantAge()
  }

  ngOnInit() {
  }

  barValue = 1

  plantage = 90
  interval
  getPlantAge() {
    clearInterval(this.interval)
    this.barValue = 1
    this.percentageBarValue = 0
    this.interval = setInterval(() => {
      if (this.barValue) {
        this.barValue = this.barValue + 1
        console.log(this.barValue,     this.percentageBarValue)
        this.changeProgressValue(this.barValue)
        this.getpercentage(this.barValue)
        if (this.barValue > this.plantage) {
          clearInterval(this.interval)
        }
      }

    }, 1000);
  }

  percentageBarValue = 0
  getpercentage(barValue) {
    this.percentageBarValue = barValue* 100 / this.plantage
    this.createNotifications()
  }

  changeProgressValue(barValue) {
    if (barValue) {
      document.getElementById('progress-time').style.width = this.percentageBarValue.toString() + '%'
    }
  }

  createNotifications() {
    if (this.percentageBarValue > 10 && this.percentageBarValue < 12) {
      console.log('Notification')
      this.sharedDataService.changeNotificationData(Notification)
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
  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}



