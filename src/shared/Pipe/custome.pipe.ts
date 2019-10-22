import { Pipe, PipeTransform } from '@angular/core';
import { CustomeEnum } from '../Enum/custome';

@Pipe({
  name: 'custome'
})
export class CustomePipe implements PipeTransform {

  transform(value: string): any {
    if (value) {
      const enumValue = CustomeEnum[value];
      return enumValue;
    } else {
      return 'NA';
    }
  }

}
