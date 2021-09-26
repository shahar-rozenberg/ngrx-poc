import {createAction, props} from '@ngrx/store';
import {Blueprint} from '../blueprint';

export const addBlueprint = createAction(
  '[Blueprint List] Add Blueprint',
  props<{ blueprint: Blueprint }>()
);

export const removeBlueprint = createAction(
  '[Blueprint Collection] Remove Blueprint',
  props<{ blueprintId: number }>()
);

export const retrievedBlueprintsList = createAction(
  '[Blueprint List/API] Retrieve Blueprints Success',
  props<{ blueprints: Blueprint[] }>()
);
