import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlueprintsComponent } from './blueprints/blueprints.component';
import {StoreModule} from '@ngrx/store';
import {reducers} from './state';

@NgModule({
  declarations: [
    BlueprintsComponent
  ],
  exports: [
    BlueprintsComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('items', reducers),
  ]
})
export class BlueprintModule { }
