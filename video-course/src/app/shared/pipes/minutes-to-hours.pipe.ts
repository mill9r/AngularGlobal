import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutesToHours'
})
export class MinutesToHoursPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if (!value) {
      return value;
    }

    const time = value.replace('min', '');
    const hours = Math.floor(Number(time)/60);
    const minutes = Number(time) % 60;
    return `${hours}h ${minutes}min`
  }

}
