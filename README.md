# Pipe

Uma maneira elegante e performática de fazer transformação de dados no template.

Nunca chame uma função do seu componente, diretamente no template para tratar dados. Exemplo:

`<h1>getCustomTitle(title)</h1>`

ou..

`<div *ngIf="isChecked(value)"></div>`

Isso fará com que a cada nova detecção de changes, o Angular chame essa função, mesmo se os inputs não forem alterados.

Para isso, use pipes :)

### O jeito correto


```
import {Pipe, PipeTransform} from '@angular/core';
 
 @Pipe({
   name: 'myCustomPipe',
   pure: true
 })
 export class CustomPipe implements PipeTransform {
 
   transform(value: string): string {
     // logic goes here
     return value.toLowerCase();
   }
 }
```

No HTML:

`<h1>title | myCustomPipe</h1>`
