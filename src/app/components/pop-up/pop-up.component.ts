import { Component, Input, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { PlayerUpdate } from 'src/app/actions/player.actions';
import { UiService } from 'src/app/services/ui/ui.service';
import { Player } from 'src/app/shared/models/Player';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {
  colors = {
    warning: '#F4A236',
    error: '#D4190C',
    success: '#0AB169'
  }
  players!: Player[];
  firstPlayerName: string = "";
  secondPlayerName: string = "";

  constructor(private store: Store<{players: Player[]}>, private uiService: UiService) {
    this.store.pipe(select("players"))
      .subscribe(players => this.players = players);
  }
    

  ngOnInit(): void {
  }

  onSubmit() {
    this.store.dispatch(new PlayerUpdate([
      { name: this.firstPlayerName },
      { name: this.secondPlayerName }
    ]));
    this.uiService.toggleGame();
  }

}
