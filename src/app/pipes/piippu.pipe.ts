import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'piippu'
})
export class PiippuPipe implements PipeTransform {

  transform(value: any, args?: any): any {
      if (value === 0) {
          return 'going';
      } else {
          return 'coming';
      }
  }
    // value kertoo mitä tyyppiä palauttaa
    // if-else lause määrittämään palautuksen
}
