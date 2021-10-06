import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { PlayerUpdate } from 'src/app/actions/player.actions';
import { UiService } from 'src/app/services/ui/ui.service';
import { Player } from 'src/app/shared/models/Player'; 


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  players!: Player[];
  total!: number;
  isGameInProgress!: boolean;
  // subscription: Subscription;

  constructor(private store: Store<{players: Player[]}>, private uiService: UiService) {
    this.store.pipe(select("players"))
      .subscribe(players => this.players = players);

    this.isGameInProgress = true;
    // this.subscription = this.uiService
    //   .updateUi()
    //   .subscribe(isGameInProgress => this.isGameInProgress = isGameInProgress);
    
  }

  ngOnInit(): void {
    this.store.dispatch(new PlayerUpdate([
      { current: true }
    ]))
    console.log(this.isGameInProgress);
  }

}
