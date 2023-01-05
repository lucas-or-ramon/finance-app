import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recurrence'
})
export class RecurrencePipe implements PipeTransform {

  transform(value: string): string {
    if (value == "FIXED") {
      return "calendar_month";
    }
    if (value == "INSTALLMENTS") {
      return "";
    }
    if (value == "NORMAL") {
      return "remove"
    }
    if (value == "CREDIT_CARD") {
      return "credit_card"
    }
    return "remove"
  }
}
