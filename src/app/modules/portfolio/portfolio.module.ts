import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioDetailsComponent } from './components/portfolio-details/portfolio-details.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PortfolioDetailsComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    SharedModule
    
  ],exports: [
  ],
})
export class PortfolioModule { }
