import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../shared/interfaces/app-state.interface';
import { PlayerReducer } from './player.reducer'; 


export const rootReducer = {};
export const reducers: ActionReducerMap<AppState, any> = {
    players: PlayerReducer
};