import {Component, Input, OnInit} from '@angular/core';
import {HomeComponent} from '../../home.component';

@Component({
  selector: 'app-home-child',
  templateUrl: './home-child.component.html',
  styleUrls: ['./home-child.component.scss']
})
export class HomeChildComponent implements OnInit {

  @Input() text: string;

  constructor(private home: HomeComponent) {
  }

  ngOnInit(): void {
    this.home.childText = 'Updating..';
  }
}
