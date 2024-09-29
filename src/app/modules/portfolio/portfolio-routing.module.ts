import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioDetailsComponent } from './components/portfolio-details/portfolio-details.component';

const routes: Routes = [
  {
    path: '',
    component: PortfolioDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
