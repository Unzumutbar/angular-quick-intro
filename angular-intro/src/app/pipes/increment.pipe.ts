import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'increment'
})
export class IncrementPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return `Meine Zahl ist ${value + 1}`;
  }
}
