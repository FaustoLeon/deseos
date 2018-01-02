import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tituloPipe'
})

export class TituloPipe implements PipeTransform {
  transform(value: string): string {
    return (value)?value:'Nueva lista';
  }
}
