import { Component, OnInit } from '@angular/core';
import { IncomeService } from '../income/income.service';
import { ExpenseService } from '../expense/expense.service';
import { Income } from '../income/income.model';
import { Expense } from '../expense/expense.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['../main.component.scss']
})
export class FormComponent implements OnInit {

  type:string = "operationIncome"
  descriptionInput!: string;
  valueInput!:number;

  constructor(private incomeService: IncomeService, private expenseService: ExpenseService) { }

  ngOnInit() {
  }

  operationType(event: Event){
    const target = event.target as HTMLInputElement;
    this.type = target.value;
  }

  addValue(){
    if(this.type === "operationIncome"){
      this.incomeService.incomes.push(new Income(this.descriptionInput, this.valueInput));
    }
    if(this.type === "operationExpense"){
      this.expenseService.expenses.push(new Expense(this.descriptionInput, this.valueInput));
    }
  }
}
