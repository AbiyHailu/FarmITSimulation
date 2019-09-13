
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SharedDataService {

  private notificationDataSource = new BehaviorSubject("");
  currentNotificationData = this.notificationDataSource.asObservable();
  changeNotificationData(notification: any) {
    this.notificationDataSource.next(notification);
  }


}
