import {createReducer, on} from '@ngrx/store';
import { retrievedBlueprintsList, addBlueprint, removeBlueprint } from './blueprint.actions';
import {Blueprint} from '../blueprint';

export const initialState: ReadonlyArray<Blueprint> = [];

export const blueprintReducer = createReducer(
  initialState,
  on(addBlueprint, (state, {blueprint}) => {
    console.log(blueprint);
    return [...state, blueprint];
  }),
  on(removeBlueprint, (state, {blueprintId}) => state.filter(i => i.id !== blueprintId)),
  on(retrievedBlueprintsList, (state, {blueprints}) => [...blueprints])
);
