import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'routeDirection'
})
export class RouteDirectionPipe implements PipeTransform {

  transform(value: any, args?: any): any { // ? tarkoittaa valinnaista parametria
    if (value === 0) {
      return 'Going to ';
    } else {
      return 'Coming from ';
    }
  }
  // value kertoo mitä tyyppiä palauttaa
  // if-else lause määrittämään palautuksen

}
