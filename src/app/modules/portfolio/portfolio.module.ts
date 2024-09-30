import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';


@NgModule({
  declarations: [
    ProfilePageComponent,
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    SharedModule
    
  ],exports: [
  ],
})
export class PortfolioModule { }
