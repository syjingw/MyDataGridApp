import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// ag-grid
import {AgGridModule} from "ag-grid-angular/main";
// application
import { AppComponent } from './app.component';
// data grid
import { DataGridComponent } from './data-grid/data-grid.component';
// service
import { VulnerabilitiesService } from './service/vulnerabilities.service';

@NgModule({
  declarations: [
    AppComponent,
    DataGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgGridModule.withComponents([])
  ],
  providers: [VulnerabilitiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
