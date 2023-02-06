import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currentDate'
})
export class CurrentDatePipe implements PipeTransform {

  transform(value: Date): String {
    const backendDate = new Date(value);
    return new Date(backendDate.getFullYear(), backendDate.getMonth(), backendDate.getDay() + 1).toLocaleDateString()
  }

}
