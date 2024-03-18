import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ifElsePipe',
  standalone: true
})
export class IfElsePipePipe implements PipeTransform {

  transform(value: boolean, _if: any, _else: any): any {
    if (value) { return _if; }
    else { return _else; }
  }
}
