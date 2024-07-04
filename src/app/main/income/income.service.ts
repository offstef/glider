import { Injectable } from '@angular/core';
import { Income } from './income.model';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {
  incomes:Income[] = [
    new Income('Salario', 1200),
    new Income('Venta Coche', 2200)
  ];
constructor() { }

  delete(income: Income){
    const index: number = this.incomes.indexOf(income);
    this.incomes.splice(index,1);
  }
}
