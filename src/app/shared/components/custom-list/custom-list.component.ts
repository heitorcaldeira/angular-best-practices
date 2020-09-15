import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-custom-list',
  templateUrl: './custom-list.component.html',
  styleUrls: ['./custom-list.component.scss']
})
export class CustomListComponent implements OnInit {

  @Input() list: { key: number, value: string };

  constructor() {
  }

  ngOnInit(): void {
  }

  trackByFn(index: number, item: {key: number, value: string}): number {
    return item.key;
  }
}
