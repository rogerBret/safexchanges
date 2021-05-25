import { AfterViewInit, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';

declare var $: (arg0: any) => any;
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit, AfterViewInit {

  @ViewChild('dataTable', { static: false })
  table!: { nativeElement: any; };
  dataTable: any;
  constructor() { }
  ngAfterViewInit(): void {
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable()
  }

  ngOnInit(): void {   
  }

}
