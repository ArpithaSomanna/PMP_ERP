import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import * as XLSX from 'xlsx';
type AOA = any[][];

@Component({
  selector: 'app-read-excel',
  templateUrl: './read-excel.component.html',
  styleUrls: ['./read-excel.component.css']
})
export class ReadExcelComponent implements OnInit {
  @Output() excelData = new EventEmitter<any>();
  data: AOA | undefined;
  wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
  fileName: string = 'SheetJS.xlsx';
  constructor() { }

  ngOnInit(): void {
  }

  onFileChange(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.data = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
      this.excelData.emit(this.data);
      // console.log(this.data);
    };
    reader.readAsBinaryString(target.files[0]);
  }

}
