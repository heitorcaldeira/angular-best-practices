import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit, ChangeDetectorRef,
  Component,
  DoCheck,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterViewInit,
  AfterContentInit, AfterViewChecked, AfterContentChecked, AfterViewChecked, OnDestroy {

  color = '#00984A';
  index = 0;
  interval: any;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    console.log('ngOnInit', this.index);
    this.index++;

    // this.interval = setInterval(() => this.changeDetectorRef.detectChanges(), 5000);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked', this.index);
    this.index++;
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit', this.index);
    this.index++;
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked', this.index);
    this.index++;
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit', this.index);
    this.index++;
  }

  ngDoCheck(): void {
    console.log('ngDoCheck', this.index);
    this.index++;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', this.index);
    this.index++;
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy', this.index);
    this.index++;

    clearInterval(this.interval);
  }

  onClickInfo(): void {
    this.color = `#${(0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6)}`;
  }
}
