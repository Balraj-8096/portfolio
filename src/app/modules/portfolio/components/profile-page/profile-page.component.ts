import { Component, Input } from '@angular/core';
import { Profile } from '../../models/portfolio';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent {

  @Input() profile!: Profile;

}
