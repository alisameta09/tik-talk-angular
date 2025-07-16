import { Component, inject, signal } from '@angular/core';
import { Profile } from '../../data/interfaces/profile.interface';
import { ProfileService } from '../../data/services/profile.service';
import { ProfileCard } from "../../common-ui/profile-card/profile-card";

@Component({
  selector: 'app-search-page',
  imports: [ProfileCard],
  templateUrl: './search-page.html',
  styleUrl: './search-page.scss'
})
export class SearchPage {
  protected readonly title = signal('tik-talk');

  profiles:  Profile[] = [];
  profileService = inject(ProfileService);

  constructor() {
    this.profileService.getTestAccounts()
      .subscribe(val => {
        this.profiles = val
      });
  }
}
