import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent implements OnInit {

  @Input() text: string;
  @Input() size: 'sm' | 'md' | 'lg' | 'auto' = 'auto';
  @Output() customClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
}
