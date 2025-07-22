import { ProfileService } from './../../data/services/profile.service';
import { Component, inject } from '@angular/core';
import { Header } from '../../common-ui/header/header';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-profile-page',
  imports: [
    Header, 
    AsyncPipe,
    RouterLink
  ],
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.scss'
})
export class ProfilePage {
  profileService = inject(ProfileService);
  route = inject(ActivatedRoute);

  me$ = toObservable(this.profileService.me)

  profile$ = this.route.params
    .pipe(
      switchMap(({ id }) => {
        if (id === 'me')
          return this.me$

        return this.profileService.getAccout(id);
      })
    )
}
