import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-home-info',
  templateUrl: './home-info.component.html',
  styleUrls: ['./home-info.component.scss']
})
export class HomeInfoComponent implements OnInit {

  @Input() info: string;
  @Output() infoEmitter = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  getTextFormatted(text): string {
    const letters = text.split('');
    const custom = letters.map((letter, index) => {
      console.log(letter);
      return index % 2 === 0 ? letter.toLowerCase() : letter.toUpperCase();
    });

    return custom.join('');
  }
}
