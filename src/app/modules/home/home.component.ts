import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  color = '#00984A';
  info = 'Clique aqui! :)';

  constructor() {
  }

  ngOnInit(): void {
    setInterval(() => this.onClickInfo(), 1000);
    setInterval(() => this.info = 'Localiza Labs', 3000);
  }

  onClickInfo(): void {
    this.color = `#${(0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6)}`;
  }
}
