import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatesPipe implements PipeTransform {
  transform(value: string, limit: number) {
    return value.substring(0, limit) + '...';
  }
}
