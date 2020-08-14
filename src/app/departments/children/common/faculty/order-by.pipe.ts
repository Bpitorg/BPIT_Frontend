import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "orderBy"
})
export class ArraySortPipe {
  transform(array: any[], field: string): any[] {
    array = array || [];
    return array.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
  }
}
