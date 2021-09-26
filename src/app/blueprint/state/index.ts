import { ActionReducerMap } from '@ngrx/store';
import {Blueprint} from '../blueprint';
import {blueprintReducer} from './blueprint.reducer';
import * as fromRoot from './../../state/app.state';

export interface BlueprintState {
  items: ReadonlyArray<Blueprint>;
}

export interface State extends fromRoot.AppState {
  blueprints: BlueprintState;
}

export const reducers: ActionReducerMap<BlueprintState> = {
  items: blueprintReducer
};
