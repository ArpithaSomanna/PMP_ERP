import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface TableConfig {
  displayedColumns: string[], displayedData: any[],  additionalConfig?: {inputType?: {key: string, value: string, selectInput?: any[]}[]}
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {
  @Input() dataTableInputs: TableConfig;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.dataTableInputs && changes.dataTableInputs.currentValue) {
      this.createTableData();
    }
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  createTableData() {
    this.displayedColumns = this.dataTableInputs.displayedColumns;
    
     this.dataSource = new MatTableDataSource(this.dataTableInputs.displayedData)
    console.log(this.dataSource);    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}