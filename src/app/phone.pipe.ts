import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  public transform(phone: number): string {
    let phoneStr = phone.toString();
    return '+'+phoneStr.slice(0,1)+'('+phoneStr.slice(1,4)+')'+' '+phoneStr.slice(4,6)+'-'+phoneStr.slice(6,8)+'-'+phoneStr.slice(8);
  }

}
