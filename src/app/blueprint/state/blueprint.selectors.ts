import {createSelector} from '@ngrx/store';
import {Blueprint} from '../blueprint';
import {BlueprintState} from './index';

export const selectBlueprints = createSelector(
  (state: BlueprintState) => {
    console.log('s1', state);
    return state.items;
  },
  (blueprints: Array<Blueprint>) => {
    console.log(blueprints);
    return blueprints;
  }
);
