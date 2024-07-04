import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainHeader',
  templateUrl: './mainHeader.component.html',
  styleUrls: ['../main.component.scss']
})
export class MainHeaderComponent implements OnInit {

  @Input() totalBudget:number = 0;
  @Input() totalIncome:number = 0;
  @Input() totalExpense:number = 0;
  @Input() totalPercentage:number = 0;
  
  constructor() { }

  ngOnInit() {
  }

}
