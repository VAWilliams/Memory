import { PlayerActionTypes } from "../shared/enums/player-action-types.enum";
import { ActionParent } from "../actions/player.actions";
import { Player } from "../shared/models/Player"; 

const initialState: Player[] = [
    new Player(''),
    new Player('')
];

export function PlayerReducer(
        state: Player[] = initialState,
        action: ActionParent
    ): Player[] {
    
    switch(action.type) {
        case PlayerActionTypes.Update:
            return state.map(
                (player, index) => Object.assign({ ...player }, action.payload[index])
            );

        default:
            return state;
    }

}