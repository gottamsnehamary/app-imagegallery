import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'imageFilter' })
export class ImageFilterPipe implements PipeTransform {
  transform(items: any[], criteria: string): any {
    if (criteria != 'nature' && criteria != 'roads' && criteria != 'beach') {
      return items;
    } else
      return items.filter((items) => {
        return items.category === criteria;
      });
  }
}

// if (criteria === 'all ') {
//   return items;
// } else
//   return items.filter((items) => {
//     return items.category === criteria;
//   });
