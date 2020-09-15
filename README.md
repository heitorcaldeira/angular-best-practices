# Removendo inscrições

Alguns método para se desinscrever de uma stream de dados:

```
subscription: Subscription;
subscription = observable.subscribe(v => v);
subscription.unsubscribe();
```
---
```
destroy$ = new Subject();
observable.pipe(
    takeUntil(this.destroy$)
).subscribe(v => v);

ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
}
```
---
```
observable.pipe(
    take(1)
).subscribe(v => v);
```
---
```
subject$ = new Subject();

{{ subject$ | async }}
```
