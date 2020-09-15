import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'orkutText',
  pure: true
})
export class OrkutTextPipe implements PipeTransform {

  transform(value: string): string {
    const letters = value.split('');
    const custom = letters.map((letter, index) => {
      console.log(letter);
      return index % 2 === 0 ? letter.toLowerCase() : letter.toUpperCase();
    });

    return custom.join('');
  }
}
