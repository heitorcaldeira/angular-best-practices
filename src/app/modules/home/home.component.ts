import {Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('container', { read: ViewContainerRef, static: true }) container: ViewContainerRef;
  color = '#00984A';
  componentRef: ComponentRef<any>;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
  }

  ngOnInit(): void {
  }

  async loadComponent(): Promise<any> {
    const { HomeLazyComponent } = await import('./components/home-lazy/home-lazy.component');
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(HomeLazyComponent);
    // this.container.clear();
    this.componentRef = this.container.createComponent(componentFactory);
  }

  onClickInfo(): void {
    this.loadComponent();
    this.color = `#${(0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6)}`;
  }
}
