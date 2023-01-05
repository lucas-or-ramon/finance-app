import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: string): string {
    if("OK" == value) {
      return 'check_circle';
    }
    if ("PENDING" == value) {
      return 'do_not_disturb_on';
    }
    if ("CANCELED" == value) {
      return 'cancel';
    }

    return 'cancel';
  }
}
