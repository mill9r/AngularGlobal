import { Pipe, PipeTransform } from '@angular/core';
import {CourseDescription} from '../models';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: CourseDescription[], ...args: unknown[]): unknown {
    if (!value.length) {
      return value;
    }
    return value.slice().sort(this.sortByDate);
  }

  private sortByDate(first: CourseDescription, second: CourseDescription): number {
    const firstPublication = new Date(first.date).getTime();
    const secondPublication = new Date(second.date).getTime();

    return firstPublication - secondPublication;
  }

}
