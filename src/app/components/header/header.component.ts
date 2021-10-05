import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Memory';
  colors = {
    warning: '#F4A236',
    error: '#D4190C'
  }
  isGameInProgress!: boolean;
  isGameDone!: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .updateUi()
      .subscribe(isGameInProgress => this.isGameInProgress = isGameInProgress);
  }

  ngOnInit(): void {
    this.isGameDone = false;
  }

  restartGame() {
    location.reload();
  }

  exitGame() {
    window.close();
  }

}
