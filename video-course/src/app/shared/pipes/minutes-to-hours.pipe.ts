import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutesToHours'
})
export class MinutesToHoursPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if (!value) {
      return value;
    }

    if (value.match('^[0-9]*$')) {
      const hours = Math.floor(Number(value) / 60);
      const minutes = Number(value) % 60;
      return `${hours}h ${minutes}min`;
    }

    return value;
  }

}
