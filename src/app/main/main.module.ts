import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomeComponent } from './income/income.component';
import { ExpenseComponent } from './expense/expense.component';
import { MainComponent } from './main.component';
import { IncomeService } from './income/income.service';
import { ExpenseService } from './expense/expense.service';
import { MainHeaderComponent } from './mainHeader/mainHeader.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    MainComponent,
    IncomeComponent,
    ExpenseComponent,
    MainHeaderComponent,
    FormComponent
  ],
  providers: [
    IncomeService,
    ExpenseService
  ],
  exports: [
    MainComponent,
    IncomeComponent,
    ExpenseComponent,
    MainHeaderComponent,
    FormComponent
  ],
})
export class MainModule { }
