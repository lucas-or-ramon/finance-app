import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorStatus'
})
export class ColorStatusPipe implements PipeTransform {

  transform(value: string): string {
    if("OK" == value) {
      return 'green-icon';
    }
    if ("PENDING" == value) {
      return 'gray-icon';
    }
    if ("CANCELED" == value) {
      return 'red-icon';
    }

    return 'gray-icon';
  }

}
