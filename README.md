# TrackBy

Uma forma de melhorar a perfomance do ***ngFor**.

Com esta função, é possível criar um índice único para cada item de uma lista.

Com isso, o Angular só ira renderizar novos items na lista, se o índice mudar.

Exemplo:

`  <li *ngFor="let item of list; trackBy: trackByFn">{{ item.value }}</li>`

e no arquivo do componente:

```
trackByFn(index: number, item: {key: number, value: string}): number {
    return item.key;
}
```

Para uma explicação de como a função funciona por baixo dos panos, [leia este post](https://stackoverflow.com/questions/44970386/how-is-angulars-ngfor-loop-implemented/44971440#44971440).
