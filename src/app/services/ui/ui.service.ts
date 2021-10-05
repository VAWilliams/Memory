import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private isGameInProgress: boolean;
  private subject: Subject<any> = new Subject<any>()

  constructor() {
    this.isGameInProgress = false;
  }

  toggleGame(): void {
    this.isGameInProgress = !this.isGameInProgress
    this.subject.next(this.isGameInProgress);
  }

  updateUi(): Observable<any> {
    console.log(this.subject)
    return this.subject.asObservable();
  }
  
}
