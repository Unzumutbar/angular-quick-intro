import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square'
})
export class SquarePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number {
    if (!value) {
      return 0;
    }
    return value * value;
  }

}
