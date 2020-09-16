# Lazy loading components

Lazy Loading é o processo de carregar arquivos sob demanda.

A partir do Angular 9, é possível fazer o carregamento sob demanda de componentes.


Exemplo:

```
@ViewChild('container', { read: ViewContainerRef, static: true }) container: ViewContainerRef;
componentRef: ComponentRef;

constructor(
    private componentFactoryResolver: ComponentFactoryResolver
) { }

ngOnInit() {
    this.loadComponent();
}

async loadComponent() {
    const { LazyComponent } = await import('./lazy.component');
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(LazyComponent);
    this.componentRef = this.container.createComponent(componentFactory);
}

/* html */
<ng-template #container></ng-template>
```

