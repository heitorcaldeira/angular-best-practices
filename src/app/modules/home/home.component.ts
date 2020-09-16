import {
  Component,
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  color = '#00984A';
  index = 0;
  interval: any;

  onClickInfo(): void {
    this.color = `#${(0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6)}`;
  }
}
