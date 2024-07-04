import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartGraphComponent } from './start-graph/start-graph.component';
import { RouterModule } from '@angular/router';
import { routes } from '../app.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    StartGraphComponent,
  ],
  exports: [
    StartGraphComponent
  ],
})
export class GraphModule { }
