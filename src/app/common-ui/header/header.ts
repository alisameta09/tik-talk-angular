import { Component, input } from '@angular/core';
import { Profile } from '../../data/interfaces/profile.interface';
import { ImgUrlPipe } from "../../helpers/pipes/img-url-pipe";

@Component({
  selector: 'app-header',
  imports: [ImgUrlPipe],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  profile = input<Profile>();
}
