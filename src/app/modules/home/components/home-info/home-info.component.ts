import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-home-info',
  templateUrl: './home-info.component.html',
  styleUrls: ['./home-info.component.scss'],
})
export class HomeInfoComponent implements OnInit, OnChanges, DoCheck, AfterViewInit,
  AfterContentInit, AfterViewChecked, AfterContentChecked, AfterViewChecked, OnDestroy {

  @Input() info: string;
  @Output() infoEmitter = new EventEmitter();

  index = 0;
  interval: any;

  constructor(private cd: ChangeDetectorRef) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes.info.previousValue, changes.info.currentValue, this.index);
    this.index++;
  }

  ngOnInit(): void {
    console.log('ngOnInit', this.index);
    this.index++;
  }

  ngDoCheck(): void {
    console.log('ngDoCheck', this.index);
    this.index++;

    // this.cd.detectChanges();
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit', this.index);
    this.index++;
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked', this.index);
    this.index++;
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit', this.index);
    this.index++;
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked', this.index);
    this.index++;
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy', this.index);
    this.index++;

    clearInterval(this.interval);
  }
}
