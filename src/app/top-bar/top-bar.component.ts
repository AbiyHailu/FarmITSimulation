import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../services/sharedData.service';
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  subject: Subject<void> = new Subject();
  notifications = []
  numberofNotiications: number
  constructor(
    private sharedDataService: SharedDataService
  ) {
    this.sharedDataService.currentNotificationData
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        this.notifications.push(res)
        console.log('this.notifications', this.notifications)
        this.numberofNotiications = this.notifications.length
        console.log('this.   this.numberofNotiications ', this.numberofNotiications)
      })

  }

  ngOnInit() {
  }

}
