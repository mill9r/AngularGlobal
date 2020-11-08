import { Pipe, PipeTransform } from '@angular/core';
import {CourseDescription} from "../models";

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: CourseDescription[], ...args: unknown[]): unknown {
    if (!value.length) {
      return value
    }
    return null;
  }

  private sortByDate(first: CourseDescription,second: CourseDescription) {
    const firstPublication = new Date(first.publication).getTime();
    const secondPublication = new Date(second.publication).getTime();

    return firstPublication - secondPublication;
  }

}
