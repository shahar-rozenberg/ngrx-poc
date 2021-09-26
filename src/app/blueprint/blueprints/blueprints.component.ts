import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectBlueprints} from '../state/blueprint.selectors';
import {addBlueprint} from '../state/blueprint.actions';

@Component({
  selector: 'app-blueprints',
  templateUrl: './blueprints.component.html',
  styleUrls: ['./blueprints.component.scss']
})
export class BlueprintsComponent implements OnInit {

  blueprints$ = this.store.pipe(select(selectBlueprints));

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  public addBlueprint(): void {
    this.store.dispatch(addBlueprint({blueprint: {id: 1, name: 'hi'}}));
  }
}
