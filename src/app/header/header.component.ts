import { Component } from '@angular/core';

export interface IIcons{
  text: string,
  imgPath: string
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  icons: IIcons[] = [
    {
      text: "Сравнение",
      imgPath: "../../assets//header/stats.png"
    },
    {
      text: "Избранное",
      imgPath: "../../assets//header/like.png"
    },
    {
      text: "Войти",
      imgPath: "../../assets//header/user.png"
    }
  ];
  
}
