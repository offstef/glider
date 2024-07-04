import { Injectable } from '@angular/core';
import { Expense } from './expense.model';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  expenses:Expense[] = [
    new Expense('Comida', 200),
    new Expense('Diesel', 550)
  ];
  constructor() { }

  delete(expense: Expense){
    let index = this.expenses.indexOf(expense);
    this.expenses.splice(index,1);
  }
}
