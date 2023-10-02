import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadExcelComponent } from './read-excel/read-excel.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
    ReadExcelComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    HttpClientModule
  ],
  exports: [
    ReadExcelComponent,
    HttpClientModule,
    TableComponent
  ],
  providers: [
    HttpService
  ]
})
export class CommonLogicModule { }
