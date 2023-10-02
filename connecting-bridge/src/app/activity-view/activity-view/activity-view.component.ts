import { Component, OnInit } from '@angular/core';
import { TableConfig } from 'src/app/common-logic/table/table.component';
import { InputTypes } from '../../common-logic/input-types'

export interface ExceSheetData {
  QUANTITY: number, VALUE: string, DEVICE: string, 'MANUFACTURER PART NUMBER': string, 'DIGI KEY PART NUMBER': string,
  PACK: string, PIN: number, RESULT: string
}


@Component({
  selector: 'app-activity-view',
  templateUrl: './activity-view.component.html',
  styleUrls: ['./activity-view.component.scss']
})
export class ActivityViewComponent implements OnInit {
  excelData = [];
  dataInput: TableConfig =
  {
    displayedColumns: ['QUANTITY', 'VALUE', 'DEVICE', 
    'MANUFACTURER PART NUMBER', 
    'DIGI KEY PART NUMBER', 'PACK', 'PIN', 'RESULT'], displayedData: [],
    additionalConfig: {
      inputType: [
        { key: 'PACK', value: InputTypes.DROP_DOWN, selectInput: ['TH', 'SMD'] },
        { key: 'PIN', value: InputTypes.TEXT }
      ]
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

  onExcelData($event) {
    this.excelData = $event;
    this.excelData.splice(0, 1);    
    this.prepExcelData();
  }

  prepExcelData() {
    
    const modifiedData = this.excelData.map((data, index) => {
      return {
        QUANTITY: data[0], 
        VALUE: data[1],
        DEVICE: data[2],
        'MANUFACTURER PART NUMBER': data[3], 
        'DIGI KEY PART NUMBER': data[4],
        PACK: data[5], 
        PIN: data[6], 
        RESULT: data[7]
      }
    })
    console.log(modifiedData);
    this.dataInput.displayedData = modifiedData;   
  }
}