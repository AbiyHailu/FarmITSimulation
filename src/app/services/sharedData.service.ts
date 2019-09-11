
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {

  private notificationDataSource = new BehaviorSubject("");
  currentNotificationDataData = this.notificationDataSource.asObservable();

  changeData(notification: any) {
    this.notificationDataSource.next(notification);
  }
}
