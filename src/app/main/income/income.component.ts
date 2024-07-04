import { Component, OnInit } from '@angular/core';
import { Income } from './income.model';
import { IncomeService } from './income.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['../main.component.scss']
})
export class IncomeComponent implements OnInit {

  incomes:Income[] = [];

  constructor(private incomeService: IncomeService) { }

  ngOnInit() {
    this.incomes = this.incomeService.incomes;
  }

  deleteRegister(income: Income){
    this.incomeService.delete(income);
  }

}
