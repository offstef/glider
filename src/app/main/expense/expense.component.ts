import { Component, Input, OnInit } from '@angular/core';
import { Expense } from './expense.model';
import { ExpenseService } from './expense.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['../main.component.scss']
})
export class ExpenseComponent implements OnInit {

  expenses: Expense[] = [];
  @Input() totalIncome!: number;

  constructor(private expenseService: ExpenseService) { }

  ngOnInit() {
    this.expenses = this.expenseService.expenses;
  }

  deleteRegister(expense: Expense){
    this.expenseService.delete(expense);
  }

  calculatePercentage(expense: Expense){
    return expense.value / this.totalIncome;
  }

}
