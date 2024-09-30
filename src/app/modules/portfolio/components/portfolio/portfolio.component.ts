import { Component } from '@angular/core';
import { Portfolio, SAMPLE_PORTFOLIO } from '../../models/portfolio';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  portfolio: Portfolio = SAMPLE_PORTFOLIO;

}
