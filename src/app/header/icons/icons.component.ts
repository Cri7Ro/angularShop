import { Component, Input } from '@angular/core';
import { IIcons } from '../header.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent {

  @Input() iconCard: IIcons = {} as IIcons;

}
