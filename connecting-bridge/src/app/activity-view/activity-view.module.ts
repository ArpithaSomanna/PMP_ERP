import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityViewRoutingModule } from './activity-view-routing.module';
import { ActivityViewComponent } from './activity-view/activity-view.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { CommonLogicModule } from '../common-logic/common-logic.module';


@NgModule({
  declarations: [
    ActivityViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    CommonLogicModule,
    ActivityViewRoutingModule
  ]
})
export class ActivityViewModule { }
