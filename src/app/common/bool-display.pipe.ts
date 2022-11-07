import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bool'
})
export class BoolDisplayPipe implements PipeTransform {

  transform(aBool: boolean): string {
    return aBool ? "Yes" : "No";
  }

}
