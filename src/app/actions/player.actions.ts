import { Action } from "@ngrx/store";
import { PlayerActionTypes } from "../shared/enums/player-action-types.enum";
import { Player } from "../shared/models/Player";

export class ActionParent implements Action {
    type: any;
    payload: any;
}

export class PlayerUpdate implements ActionParent {
    type: PlayerActionTypes = PlayerActionTypes.Update;
    
    constructor(public payload: any[]) { }
}