import { Component, OnInit } from '@angular/core';
import { GridOptions } from "ag-grid";
import { Vulnerability } from "../data-model/vulnerability";
import { VulnerabilitiesService } from '../service/vulnerabilities.service';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent implements OnInit{
  private gridOptions: GridOptions;
  constructor(private vulnerabilitiesService: VulnerabilitiesService) {
      let that = this;
      this.gridOptions = <GridOptions>{
       onGridReady: (() => {
          that.gridOptions.api.sizeColumnsToFit();
      })
      };
      this.gridOptions.enableSorting = true;
      this.gridOptions.animateRows = true;
      this.gridOptions.enableColResize = true;
   }

  private createColumnDefs(vulnerabilities: Vulnerability) {
      let keyNames = Object.keys(vulnerabilities);
      let headers = [];
      keyNames.map(key => {
        headers.push({
            headerName: key.toUpperCase(),
            field: key,
            width: 400
        })
      });
      return headers;
    }

    ngOnInit() {
        let data: Vulnerability[] = this.vulnerabilitiesService.getVulnerabilities();
        this.gridOptions.rowData = data;
        this.gridOptions.columnDefs = this.createColumnDefs(data[0]);

     }

}
