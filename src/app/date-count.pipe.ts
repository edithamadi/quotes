import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any, args?: any): number {
  const today: Date = new Date(); 
    const todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const dateAddition = Math.abs(todayWithNoTime - value ); 
    const secondsInADay = 86400; 
    const dateAdditionSeconds = dateAddition * 0.001; 
    const dateCounter = dateAdditionSeconds / secondsInADay;

    if (dateCounter >= 1) {
        return dateCounter;
    } else {
    return null;
    }

  }
}
