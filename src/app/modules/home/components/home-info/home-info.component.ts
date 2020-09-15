import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-home-info',
  templateUrl: './home-info.component.html',
  styleUrls: ['./home-info.component.scss']
})
export class HomeInfoComponent implements OnInit {

  @Input() info: string;
  @Output() infoEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
