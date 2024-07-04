import { Component, OnInit } from '@angular/core';
import { Income } from './income/income.model';
import { Expense } from './expense/expense.model';
import { IncomeService } from './income/income.service';
import { ExpenseService } from './expense/expense.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  incomes: Income[] = [];
  expenses: Expense[] = [];

  constructor(private incomeService: IncomeService, private expenseService: ExpenseService) {
    this.incomes = incomeService.incomes;
    this.expenses = expenseService.expenses;
  }
  ngOnInit() {
  }

  getTotalIncome(){
    let totalIncome:number = 0;
    this.incomes.forEach(income => {
      totalIncome += income.value;
    });
    return totalIncome;
  }

  getTotalExpense(){
    let totalExpense:number = 0;
    this.expenses.forEach(expense => {
      totalExpense += expense.value;
    });
    return totalExpense;
  }

  getTotalPercentage(){
    return this.getTotalExpense()/this.getTotalIncome();
  }

  getTotalBudget(){
    return this.getTotalIncome() - this.getTotalExpense();
  }
}
